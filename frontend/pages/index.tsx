import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import { Input, Button,Card } from '../components/index'
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import advertisings from "../data/advertisings.json" assert {type: 'json'}
import { useSelectedContext } from '../context';

type adsType = {
  advertisingHeader:String,
  detail:String,
  owner:{
    name:String
  },
  createdAt:String
}


export default function Home() {
  const {selectedAd,setSelectedAd} = useSelectedContext()
  const [userInput, setUserInput] = React.useState({});
  const [ads, setAds] = React.useState<adsType[]>(advertisings)
  const handleSearch = () => {
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionWithSearch}>
          <Input placeholder="Сургууль"
            icon={<AiOutlineSearch />}
            name="school"
          />
          <Input placeholder="Хичээл"  name="subject"  icon={<MdLocationOn />} />
          <Button onClick={handleSearch}>Хайх</Button>
        </div>
        <div style={{width:`100%`,backgroundColor: `#f6f5f4`}}>
        <div className={styles.adsContainer}>
          <div className={styles.allAdsContainer}>
            {ads.map((ad,index) => {
              return(
                <Card key={index}>
                  <div onClick={()=>setSelectedAd(ad)}>
                    <h1>{ad.advertisingHeader}</h1>
                    <h3>Захиалагч:{ad.owner.name}</h3>
                    <p>{ad.detail}</p>
                    <p>{ad.createdAt}</p>
                  </div>
                </Card>
              )
         })}
          </div>
          <div className={styles.adDetailContainer}>
            {selectedAd?
            <Card>
              <img style={{width:`100%`}} src={selectedAd.photo}/>
              <h1>{selectedAd.advertisingHeader}</h1>  
              <h3>Захиалагч:{selectedAd.owner.name}</h3>
              <p>{selectedAd.detail}</p>
            </Card> :<Card>
              <div></div></Card>}
          </div>
        </div>
        </div>
    </div>
  )
}
