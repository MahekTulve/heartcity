import React from 'react';
import styles from '../style/footer.module.css';

// Image/video imports
import footerVideo from '../assets/videos/Footer.mp4';
import sectionDesign from '../assets/section-design.png';
import aboutVector from '../assets/abhut vector.png';
import heartCityLogo from '../assets/Heartcity_logo_removebg.png';
import residentialIcon from '../assets/residential-removebg-preview.png';
import arrowDown from '../assets/arrow-down.png';
import websiteIcon from '../assets/website.png';
import phoneIcon from '../assets/telephone.png';
import mailIcon from '../assets/mail.png';

const Footer = () => {
    return (
        <footer className={`${styles.footer} ${styles.animate}`}>
            <video autoPlay muted loop playsInline className={styles.footerVideoBg}>
                <source src={footerVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={styles.videoOverlay}></div>

            <div className={styles.container}>
                <div className={styles.heroSection}>
                    <img src={sectionDesign} alt="Design" className={styles.sectionImage} />
                    <div className={styles.aboutMain}>
                        <div>
                            <h2 className={styles.heading}>
                                EV Homes is a <span className={styles.highlight}>Multi National</span> Pan India Developer
                            </h2>


                            <h5 className={styles.subheading}>
                                With Almost  <div style={{ color: '#f8b400' }}>35+ Years of Experience in Construction and MEP</div>
                            </h5>

                            <p className={styles.description}>
                                Powered by a group of Dedicated Engineers, the very same who
                                lighted up Palm Beach Road and also the very Engineers who were
                                the first to hand-over redevelopment projects in Vashi almost
                                a decade back. EV Homes has the unmatched record of not only
                                timely delivery and top quality construction but also an
                                unparalleled high rate of appreciation in every single project
                                delivered by us to date.
                            </p>
                        </div>
                        <div className={styles.aboutImg}>
                            <img src={aboutVector} alt="About Vector" width="400" height="250" loading="lazy" />
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.logoLineContainer}>
                        <div className={styles.lineLeft}></div>
                        <img src={heartCityLogo} alt="Logo" className={styles.logo} />
                        <div className={styles.lineRight}></div>
                    </div>


                    <div className={styles.colmd3}>
                        <div className={styles.addressSection}>
                            <img src={residentialIcon} alt="Site Icon" width="40" className={styles.mb3} />
                            <h5 className={styles.addressTitle}>Site Address</h5>
                            <div className={styles.addressDetails}>
                                <p><strong>Plot 53 & 54/1C</strong></p>
                                <p>Village - MOSARE</p>
                                <p>Tehsil - PANVEL</p>
                                <p>District - RAIGAD</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.colauto}>
                        <div className={styles.vertLine}></div>
                    </div>

                    <div className={styles.colmd4}>
                        <div className={styles.addressSection}>
                            <img src={arrowDown} alt="Office Icon" width="40" className={styles.mb3} />
                            <h5 className={styles.addressTitle}>Office Address</h5>
                            <div className={styles.addressContent}>
                                <p>212, Awing, Vardhman Chambers</p>
                                <p>Above Axis Bank</p>
                                <p>Sector-17, Vashi, Navi Mumbai</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colauto}>
                        <div className={styles.vertLine}></div>
                    </div>
                    <div className={styles.colmd4}>
                        <div className={styles.contactInfo}>
                            <img src={mailIcon} alt="Contact Icon" width="40" className={styles.mb3} />
                            <h5 className={styles.addressTitle}>Contact Us</h5>
                            <div className={styles.contactContent}>
                                <div className={styles.contactItem}>
                                    <img src={websiteIcon} alt="Website" width="24" />
                                    <a href="http://www.evgroup.in" target="_blank" rel="noopener noreferrer">www.evgroup.in</a>
                                </div>
                                <div className={styles.contactItem}>
                                    <img src={phoneIcon} alt="Phone" width="24" />
                                    <span>8879342777 | 8991068777</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <img src={mailIcon} alt="Email" width="24" />
                                    <a href="mailto:marketing@evheartcity.com">marketing@evheartcity.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
