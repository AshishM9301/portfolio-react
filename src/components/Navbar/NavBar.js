import React from 'react';
import styles from '../../assets/css/navbar.module.css';

function NavBar() {
  return (
    <div>
      <div className={styles.navbar_container}>
        <div className={styles.active}>Home</div>
        <div>About</div>
        <div>Work</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default NavBar;
