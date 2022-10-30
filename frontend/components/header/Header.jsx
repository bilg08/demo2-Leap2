import logo from '../../asset/logo.png'
import Image from "next/image";
import styles from './Header.module.css'
export const Header = () => {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.sectionWithLogoAndFindJobs}>
          <h1>LOGO</h1>
          {/* <Image width={80} height={50} src={logo} /> */}
          <ul className={styles.sectionWithLogoAndFindJobsUl}>
            <li>Ажил Хайх</li>
            <li>Эрэлттэй хүмүүс</li>
          </ul>
        </div>
        <ul className={styles.sectionWithLoginAndSignUp}>
          <li>Нэвтрэх</li>
          <li>Бүртгүүлэх</li>
        </ul>
      </div>
    );
}