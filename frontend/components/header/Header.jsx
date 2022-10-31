import logo from '../../asset/logo.png'
import Image from "next/image";
import styles from './Header.module.css';
import {useRouter} from 'next/router'
export const Header = () => {
  const router = useRouter()
    return (
      <div className={styles.headerContainer}>
        <div className={styles.sectionWithLogoAndFindJobs}>
          <Image alt='' width={80} height={50} src={logo} />
          <ul className={styles.sectionWithLogoAndFindJobsUl}>
            <li>Ажил Хайх</li>
            <li>Эрэлттэй хүмүүс</li>
          </ul>
        </div>
        <ul className={styles.sectionWithLoginAndSignUp}>
          <li onClick={()=>router.push('loginPage')}>Нэвтрэх</li>
          <li>Бүртгүүлэх</li>
        </ul>
      </div>
    );
}