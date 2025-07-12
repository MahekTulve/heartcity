import React, { useEffect, useState } from 'react';
import styles from '../style/header.module.css';
import logo from '../assets/Heartcity_logo_removebg.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a className={styles.navbarBrand} href="#home">
          <img src={logo} alt="Heart City Logo" />
        </a>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

         <div className={`${styles.navbarCollapse} ${menuOpen ? styles.showMenu : ''}`}>
          <div className={styles.nav}>
            <Link className={styles.navLink} to="/#home" onClick={() => setMenuOpen(false)}>Home</Link>
            
            <Link className={styles.navLink} to="/#about-section" onClick={() => setMenuOpen(false)}>About</Link>
            
            <Link className={styles.navLink} to="/#amenities-section" onClick={() => setMenuOpen(false)}>Amenities</Link>
            
            <Link className={styles.navLink} to="/#features-section" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link className={styles.navLink} to="/#layout-section" onClick={() => setMenuOpen(false)}>Layout</Link>
            
            <Link className={styles.navLink} to="/#Contact-section" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link className={styles.navLink} to="/EMI Calculator" onClick={() => setMenuOpen(false)}>EMI Calculator</Link>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Header;
