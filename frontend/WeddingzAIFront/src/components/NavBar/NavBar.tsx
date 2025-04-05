import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/ wai-logo.svg';
import userIcon from "../../assets/images/user-icon.svg";
import { Link } from 'react-router-dom';

interface NavBarProps {
  titleName: string;
}

export const NavBar: React.FC<NavBarProps> = ({titleName}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/home">
          <img src={logo} alt="Logo" style={{ height: '200px' }} />
        </Link>
      </div>

      <div className={styles.title}>
        {titleName === 'My Wedding' ? (
          <Link to="/weddash">{titleName}</Link>
        ) : (
          titleName
        )}
      </div>

      <div className={styles.authWrapper}>
        <img src={userIcon} alt="User Icon" />
        <div>
          <div className={styles.authName}><strong>Anonymous</strong></div>
          <div className={styles.auth}>
            <a href="#">Login</a> | <a href="#">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};