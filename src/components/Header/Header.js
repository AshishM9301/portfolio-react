import React from 'react';
import NavBar from '../Navbar/NavBar';
import styles from '../../assets/css/Header.module.css';
import HeaderSub from './Header-sub';

function Header() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div>
          <NavBar />
        </div>
        <div>
          <HeaderSub />
        </div>
      </div>
    </div>
  );
}

export default Header;
