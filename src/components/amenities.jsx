import React, { useEffect, useRef } from 'react';
import styles from '../style/amenities.module.css';
import swimmingImg from '../assets/swimming.jpg';
import gymImg from '../assets/gym.jfif';
import kidsPlayImg from '../assets/KidPlayArea.jpg';
import basketballImg from '../assets/BasketballCourt.jpg';
import gardenImg from '../assets/garden.jpg';
import clubhouseImg from '../assets/clubhouse.jpg';

const Amenities = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Capture the current ref value in a constant
    const sectionElement = sectionRef.current;
    
    if (!sectionElement) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate title and text
            titleRef.current.classList.add(styles.animate);
            textRef.current.classList.add(styles.animate);
            
            // Animate cards with staggered delay
            cardRefs.current.forEach((card, index) => {
              if (card) {
                card.style.transitionDelay = `${index * 0.1}s`;
                card.classList.add(styles.animate);
              }
            });
            
            // Unobserve after animation to prevent re-triggering
            sectionObserver.unobserve(sectionElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionObserver.observe(sectionElement);

    return () => {
      // Use the captured constant in cleanup
      sectionObserver.unobserve(sectionElement);
    };
  }, []);

  return (
    <section id="Amenities" className={styles.amenity} ref={sectionRef}>
      <div className={styles.backgroundContainer}>
        <div className={styles.container}>
          <h1 ref={titleRef} className={styles.sectionTitle}>LUXURIOUS AMENITIES</h1>
          <div ref={textRef} className={styles.amenitiesText}>
            <p>
              A wide spread of 3 buildings allows you to relish the world-class luxuries with peace and serenity. 
              Take a dip in the refreshing swimming pool while your kids play in the children's play area. 
              We also have systematic waste disposal with an all-day water supply.
            </p>
          </div>

          <ul className={styles.amenityList}>
            {[
              { img: swimmingImg, title: 'Swimming Pool', alt: 'Swimming Pool' },
              { img: gymImg, title: 'Gym', alt: 'Gym' },
              { img: kidsPlayImg, title: "Kid's Play Area", alt: "Kid's Play Area" },
              { img: basketballImg, title: 'Basketball Court', alt: 'Basketball Court' },
              { img: gardenImg, title: 'Garden', alt: 'Garden' },
              { img: clubhouseImg, title: 'Club House', alt: 'Club House' }
            ].map((amenity, index) => (
              <li key={index} className={styles.w33}>
                <div 
                  className={styles.amenityCard}
                  ref={el => cardRefs.current[index] = el}
                >
                  <figure className={styles.amenityCardBanner}>
                    <img 
                      src={amenity.img} 
                      loading="lazy" 
                      alt={amenity.alt} 
                      className={styles.imgCover} 
                    />
                  </figure>
                  <div className={styles.amenityCardContent}>
                    <h3 className={styles.amenityCardTitle}>{amenity.title}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Amenities;