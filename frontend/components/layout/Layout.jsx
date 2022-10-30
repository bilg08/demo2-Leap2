import React from 'react';
import { Header, Footer } from '../index';
import styles from './Layout.module.css';
export const LayOut = ({children}) => {
    return (
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <Header/>
          {children}
          <Footer/>
        </div>
      </div>
    );
}