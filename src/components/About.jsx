import React, { useEffect, useRef, useState } from 'react';
import styles from '../style/about.module.css';
import lineImage from '../assets/luxury-background-gold-gradient-design.png';
import aboutImg from '../assets/about-img.png';

const About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = titleRef.current?.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      if (top < triggerPoint) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="About" className={styles.herosection}>
      <div className={styles.aboutheader}>
        <div className={styles.lineContainer}>
          <img src={lineImage} alt="decorative line" className={styles.line} />
        </div>
        <p>ABOUT</p>
        <div className={styles.lineContainer}>
          <img src={lineImage} alt="decorative line" className={styles.line} />
        </div>
      </div>

      <div className={styles.aboutmain}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2
              ref={titleRef}
              className={`${styles.herotitle} ${animate ? styles.animate : ''}`}
            >
              <span className={styles.heroexperience}>AFFORDABLE LUXURY</span>
            </h2>
            <h5
              ref={subtitleRef}
              className={`${styles.herosubtitle} ${animate ? styles.animate : ''}`}
            >
              <div className={styles.heroexperiencebadge}>LUXURY 1RK & 1BHK APARTMENTS</div>
            </h5>
            <div className={styles.paragraphContainer}>
              <p
                ref={textRef}
                className={`${styles.herotext} ${animate ? styles.animate : ''}`}
              >
                EV Heart City 1 is centrally located in Mosare that has luxury apartments to fulfill your dreams of owning
                a home that gives you the personal space and time you deserve. The luxurious yet affordable apartments are
                spread in 4-storeyed, 3 building plans with gated security and a best-in-class swimming pool.
              </p>
              <p
                ref={textRef}
                className={`${styles.herotext} ${animate ? styles.animate : ''}`}
              >
                The elegant amenities include an open gym, children's park in completely modern styling. Accessibility to 
                the nearest Navi Mumbai International Airport and other transport facilities make EV Heart City stand out 
                from the ordinary.
              </p>
            </div>
          </div>
          
          <div ref={imageRef} className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img 
                src={aboutImg} 
                alt="Luxury apartment building" 
                className={styles.aboutImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;