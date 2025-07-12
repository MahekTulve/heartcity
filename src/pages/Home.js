import React from 'react';
import styles from '../style/home.module.css';
import heartCityVideo from '../assets/videos/Heart.mp4'; 
import About from '../components/About'
import Amenities from '../components/amenities'
import Features from '../components/Features';
import Layout from '../components/Layout';

function Home() {
  return (
    <div>
      <div id="home" className={styles.videocontainer}>
      <video 
        autoPlay 
        muted 
        loop 
        className={styles.responsivevideo}
      >
        <source src={heartCityVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div id="about-section"> 
        <About />
      </div>
      <div id="amenities-section">
        <Amenities />
      </div>
      <div id="features-section">
        <Features />
      </div>
      <div id="layout-section"> 
        <Layout />
      </div>
    </div>
    
  );
}

export default Home;