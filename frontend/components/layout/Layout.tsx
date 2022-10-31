import React from 'react';
import { Header, Footer } from '../index';
import styles from './Layout.module.css';
export const LayOut = ({children}:any) => {
    return (
      <div className={styles.container}>
        <Header/>
          {children}
          {/* <Footer/> */}
      </div>
    );
}