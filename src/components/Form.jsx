import React, { useState } from 'react';
import modalStyles from '../style/modal.module.css';

const Form = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));

        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Send data to Google Apps Script
            await fetch("https://script.google.com/macros/s/AKfycbyFd8zoP4Djx_y1D2SkbV_ayDkZgfTvnp9UnW6qWi4dDLv87MPB-hV13NL8zDKWWSLg/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            alert('Form submitted successfully!');
            closeModal();
        } catch (err) {
            console.error("Form submission error:", err);
            alert('Failed to send form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={modalStyles.modalContainer}>
            <div className={modalStyles.designPart}>
                <div className={modalStyles.img}></div>
                <div className={modalStyles.designContent}>
                    <h3>Unlock Your Dream Space Today</h3>
                    <p>Kindly share your contact details to get exclusive access to the layout plan!</p>
                </div>
            </div>

            <div className={modalStyles.formContainer}>
                <div className={modalStyles.closeIcon}>
                    <button onClick={closeModal}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <h2>Contact Form</h2>

                <form
                    className={modalStyles.contactForm}
                    onSubmit={handleSubmit}
                >
                    <div className={modalStyles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className={modalStyles.error}>{errors.name}</p>}
                    </div>

                    <div className={modalStyles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className={modalStyles.error}>{errors.phone}</p>}
                    </div>

                    <div className={modalStyles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={modalStyles.error}>{errors.email}</p>}
                    </div>

                    <button
                        type="submit"
                        className={modalStyles.submitBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

                <p className={modalStyles.footerNote}>
                    We respect your privacy. Your information will not be shared.
                </p>
            </div>
        </div>
    );
};

export default Form;