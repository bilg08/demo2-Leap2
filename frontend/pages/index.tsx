import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import { Input, Button } from '../components/index'
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
export default function Home() {
  const [userInput, setUserInput] = React.useState({});
  return (
    <div className={styles.container}>
      <div className={styles.mainHomeContainer}>
      <div className={styles.sectionWithSearch}>
          <Input placeholder="Сургууль"
            userInput={userInput}
            icon={<AiOutlineSearch />}
            name="school"
            onchange={setUserInput}
          />
          <Input placeholder="Хичээл" userInput={userInput} name="subject" onchange={setUserInput} icon={<MdLocationOn />} />
          <Button>Хайх</Button>
        </div>
      </div>
    </div>
  )
}
