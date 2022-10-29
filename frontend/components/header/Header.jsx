import React from 'react';
import logo from '../../asset/logo.png'
import Image from "next/image";
import styles from './Header.module.css'
export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoSection}>
                <Image width={80} height={50} src={logo} />
            </div>
            <ul className={styles.navItems}>
                <li>Нэвтрэх</li>
                <li>Бүртгүүлэх</li>
            </ul>
        </div>
    )
}