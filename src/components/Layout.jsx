import React, { useEffect, useRef, useState } from 'react';
import styles from '../style/layout.module.css';
import modalStyles from '../style/modal.module.css';
import Form from './Form'
const Layout = () => {
    const sectionRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const sectionElement = sectionRef.current;

        if (!sectionElement) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animate);
                }
            });
        }, { threshold: 0.1 });

        const cards = sectionElement.querySelectorAll(`.${styles.layoutCard}`);
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.2}s`;
            observer.observe(card);
        });

        const title = sectionElement.querySelector(`.${styles.sectionTitle}`);
        if (title) observer.observe(title);

        return () => {
            observer.disconnect();
        };
    }, []);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <section
            id="layout"
            className={styles.layoutSection}
            ref={sectionRef}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.divider}></div>
                    <h2 className={styles.sectionTitle}>LAYOUT OPTIONS</h2>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.cardsContainer}>
                    {/* Bigger Card */}
                    <div className={styles.layoutCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.layoutTitle}>Bigger</h3>
                                <div className={styles.typeBadge}>1RK</div>
                            </div>

                            <div className={styles.priceContainer}>25* Lakhs ALL IN</div>

                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    LIMITED EDITION SEA-FACING 2 BHK
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    SEA FACING SUNSET DECK
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    LARGE EN-SUITE BEDROOMS
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    SEPARATE KITCHEN & EXCLUSIVE DINING
                                </li>
                            </ul>

                            <div className={styles.btnContainer } onClick={openModal}>
                                <button className={styles.primaryBtn}>
                                    View Layout <span className={styles.icon}>🔍</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.layoutCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.layoutTitle}>Large</h3>
                                <div className={styles.typeBadge}>1 BHK</div>
                            </div>

                            <div className={styles.priceContainer}>40* Lakhs ALL IN</div>

                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    LIMITED EDITION SEA-FACING 3 BHK
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    EXTRA LARGE SEA FACING SUNSET DECK
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    LARGE EN-SUITE BEDROOMS
                                </li>
                                <li className={styles.featureItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    SEPARATE KITCHEN & EXCLUSIVE DINING
                                </li>
                            </ul>

                            <div className={styles.btnContainer}>
                                <button className={styles.primaryBtn} onClick={openModal}>
                                    View Layout <span className={styles.icon}>🔍</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className={modalStyles.modalBackdrop}>
                    <Form closeModal={closeModal} />
                </div>
            )}
        </section>
    );
};

export default Layout;