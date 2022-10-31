import styles from '../styles/Home.module.css'
import {Input} from '../components/index'
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

export default function Home() {
  const [userInput,setUserInput] = useState({});
  function handleUserInput(e) {
      setUserInput({...userInput,[e.target.name]:e.target.value})
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainHomeContainer}>
      <div className={styles.sectionWithSearch}>
         <Input placeholder="Сургууль" icon={<AiOutlineSearch/>} name="school"  onChange={handleUserInput}/>
         <Input placeholder="Хичээл" name="subject"  onChange={handleUserInput} icon={<MdLocationOn/>}/>
         <button>HHAA</button>
        </div>
      </div>
    </div>
  )
}
