import React from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaChessPawn } from 'react-icons/fa';
import styles from './Practice.module.css';
const PlayOnline = () => {
  return (
    <div style={{ background: ' #FF9900' }}>
      <h2>🚧Under Construction🚧</h2>
      <div className={styles.container} style={{ background: '#530000' }}>
        <div className="d-flex flex-wrap justify-content-center align-items-center h-75 gap-3">
          <Link to="/PlayWithOnline" className={styles.card} style={{ background: '#660066' }}>
            <h3>Vs online</h3>
            <FaChessPawn className={styles.icon} style={{ color: 'blue' }} />
            <p>Play With Online</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayOnline;
