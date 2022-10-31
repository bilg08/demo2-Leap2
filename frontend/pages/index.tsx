import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import { Input, Button,Card } from '../components/index'
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import advertisings from "../data/advertisings.json" assert {type: 'json'}




export default function Home() {
  
  const [userInput, setUserInput] = React.useState({});
  const [ads, setAds] = React.useState([])
  const handleSearch = () => {
    
  }
  new Promise(function (resolve, reject) {
    if (1 === 1) {
      resolve('right');
      console.log(typeof advertisings)
      setTimeout(() => setAds(advertisings),1500)
    } else {
      reject('false');
    }
  })
  return (
    <div className={styles.container}>
      <div className={styles.mainHomeContainer}>
      <div className={styles.sectionWithSearch}>
          <Input placeholder="Сургууль"
            icon={<AiOutlineSearch />}
            name="school"
          />
          <Input placeholder="Хичээл"  name="subject"  icon={<MdLocationOn />} />
          <Button onClick={handleSearch}>Хайх</Button>
        </div>
        <div className={styles.adsContainer}>
          {/* {ads.length<=0?<p></p>:<div className={styles.allAdsContainer}>
            {ads.map((ad,index) => {
           return <Card key={index} data={ad} />
         })}
          </div>} */}
          <div className={styles.adDetailContainer}>
            details 
          </div>
        </div>
      </div>
    </div>
  )
}
