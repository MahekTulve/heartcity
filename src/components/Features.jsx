import React, { useState, useEffect, useRef } from 'react';
import styles from '../style/features.module.css';

// Import all images
import cctvCamera from '../assets/cctv-camera.png';
import fireExtinguisher from '../assets/fire-extinguisher.png';
import trashCan from '../assets/trash-can.png';
import elevator from '../assets/elevator.png';
import hours24 from '../assets/24-hours.png';
import parkingLot from '../assets/parking-lot.png';
import web from '../assets/web.png';

import lift from '../assets/lift.jpg';
import waterTank from '../assets/UndergroundWaterTank.jpg';
import fireSystems from '../assets/FireFightingSystems.jpg';
import vaastu from '../assets/VaastuCompliant.jpg';
import parking from '../assets/parking design.jpg';
import rainWater from '../assets/rainWater.jpg';
import cctv from '../assets/cctvCamera.jpg';
import powerBackup from '../assets/PowerBackup.jpg';
import waterSupply from '../assets/WaterSupply.jpg';
import wasteDisposal from '../assets/WasteDisposal.jpg';
import maintenanceStaff from '../assets/maintenance_staff.jpg';
import securityPersonnel from '../assets/SecurityPersonnel.jpg';
import decorativeLine from '../assets/luxury-background-gold-gradient-design.png';
import waterIcon from '../assets/water.png';
import liftIcon from '../assets/lift.png';
import extinguisherIcon from '../assets/extinguisher.png';
import compassIcon from '../assets/compass.png';
import parkingIcon from '../assets/parking.png';
import rainWaterIcon from '../assets/rain-water.png';
import cameraIcon from '../assets/camera.png';
import batteryIcon from '../assets/battery-repair.png';
import wasteWaterIcon from '../assets/waste-water.png';
import trashIcon from '../assets/trash.png';
import employeesIcon from '../assets/employees.png';
import securityIcon from '../assets/security-guard.png';

const Features = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const featuresRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    const features = [
        [
            { icon: waterIcon, text: 'Water Tank' },
            { icon: liftIcon, text: 'Lift' },
            { icon: extinguisherIcon, text: 'Fire Safety' }
        ],
        [
            { icon: compassIcon, text: 'Vaastu Compliant' },
            { icon: parkingIcon, text: 'Parking' },
            { icon: rainWaterIcon, text: 'RWH System' }
        ],
        [
            { icon: cameraIcon, text: 'CCTV Camera' },
            { icon: batteryIcon, text: 'Power Backup' },
            { icon: wasteWaterIcon, text: '24x7 Water' }
        ],
        [
            { icon: trashIcon, text: 'Waste Disposal' },
            { icon: employeesIcon, text: 'Staff' },
            { icon: securityIcon, text: 'Security' }
        ]
    ];

    // Slides for desktop view
    const slides = [
        [
            { img: lift, name: 'Branded Lift' },
            { img: waterTank, name: 'Underground Water Tank' },
            { img: fireSystems, name: 'Fire Fighting Systems' },
            { img: vaastu, name: 'Vaastu Compliant' }
        ],
        [
            { img: parking, name: 'Ample Car Parking' },
            { img: rainWater, name: 'Rain Water Harvesting' },
            { img: cctv, name: 'CCTV Camera Security' },
            { img: powerBackup, name: 'Power Backup for Lift' }
        ],
        [
            { img: waterSupply, name: '24x7 Water Supply' },
            { img: wasteDisposal, name: 'Waste Disposal' },
            { img: maintenanceStaff, name: 'Maintenance Staff' },
            { img: securityPersonnel, name: 'Security Personnel' }
        ]
    ];

const autoScrollInterval = useRef(null);

useEffect(() => {
    const handleScroll = () => {
        const top = featuresRef.current?.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        if (top < triggerPoint) {
            setAnimate(true);
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    autoScrollInterval.current = setInterval(() => {
        setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }
    };
}, []);

const resetAutoScrollTimer = () => {
    if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
    }
    autoScrollInterval.current = setInterval(() => {
        setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1));
    }, 5000);
};

const nextSlide = () => {
    setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1));
    resetAutoScrollTimer();
};

const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? 2 : prev - 1));
    resetAutoScrollTimer();
};

const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoScrollTimer();
};


    return (
        <div>
            <section
                id="Features"
                ref={featuresRef}
                className={styles.featuresSection}
            >
                <img src={cctvCamera} className={styles.floatImg3} alt="decoration" />
                <img src={fireExtinguisher} className={styles.floatImg2} alt="decoration" />
                <img src={trashCan} className={styles.floatImg1} alt="decoration" />
                <img src={elevator} className={styles.floatImg4} alt="decoration" />
                <img src={hours24} className={styles.floatImg5} alt="decoration" />
                <img src={parkingLot} className={styles.floatImg6} alt="decoration" />
                <img src={web} className={styles.floatImg7} alt="decoration" />

                <div className={styles.container}>
                    <h1 className={`${styles.sectionTitle} ${animate ? styles.animate : ''}`}>
                        PREMIUM FEATURES
                    </h1>

                    <div className={styles.featuresSliderContainer}>
                        <button className={styles.sliderArrow} onClick={prevSlide} aria-label="Previous slide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <div className={styles.featuresSlider} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {slides.map((slide, slideIndex) => (
                                <div key={slideIndex} className={styles.featuresSlide}>
                                    <div className={styles.featureRow}>
                                        {slide.map((item, itemIndex) => (
                                            <div key={itemIndex} className={styles.featureCol}>
                                                <div className={`${styles.featureItem} ${animate ? styles.animate : ''}`}>
                                                    <div className={styles.featureImgContainer}>
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                            className={styles.featureItemImg}
                                                        />
                                                        <div className={styles.featureOverlay}></div>
                                                    </div>
                                                    <div className={styles.featureItemName}>{item.name}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className={styles.sliderArrow} onClick={nextSlide} aria-label="Next slide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    {/* Slider Dots */}
                    <div className={styles.sliderDotsContainer}>
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                className={`${styles.sliderDot} ${currentSlide === index ? styles.active : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile Features Section */}
            <section className={styles.mobileFeatures}>
                <div className={styles.mainFeatures}>
                    {/* Header with decorative lines */}
                    <div className={styles.aboutHeader}>
                        <img 
                            src={decorativeLine} 
                            alt="decorative line"
                            className={styles.decorativeLine}
                        />
                        <p className={styles.featuresHeaderText}>FEATURES</p>
                        <img 
                            src={decorativeLine} 
                            alt="decorative line"
                            className={styles.decorativeLine}
                        />
                    </div>

                    {/* Features grid */}
                    <div className={styles.featuresBody}>
                        {features.map((row, rowIndex) => (
                            <div key={rowIndex} className={styles.featuresRow}>
                                {row.map((feature, colIndex) => (
                                    <div key={colIndex} className={styles.featureCol}>
                                        <img
                                            src={feature.icon}
                                            alt={feature.text}
                                            className={styles.featureIcon}
                                        />
                                        <p className={styles.featureText}>{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;