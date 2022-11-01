import styles from '../styles/Home.module.css'
import React, { useEffect,SetStateAction,Dispatch,ReactNode } from 'react';
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
    <div className='w-full'>
      <div className='flex h-40 justify-center flex-col items-center md:flex-row m-auto max-w-screen-xl gap-5'>
          <Input placeholder="Сургууль"
            icon={<AiOutlineSearch />}
            name="school"
          />
          <Input placeholder="Хичээл"  name="subject"  icon={<MdLocationOn />} />
          <Button onClick={handleSearch}>Хайх</Button>
        </div>
        <div style={{width:`100%`,backgroundColor: `#f6f5f4`}}>
        <div className="max-w-screen-xl m-auto flex justify-center items-center">
          <div className='m-5 w-6/12 flex flex-col gap-10'>
            {ads.map((ad,index) => {
              return(
                <Card key={index}>
                  <div  onClick={()=>setSelectedAd(ad)}>
                    <h1 className='text-4xl font-bold'>{ad.advertisingHeader}</h1>
                    <h3 className='text-2xl font-bold color-silver'>Захиалагч:{ad.owner.name}</h3>
                    <p>{ad.detail}</p>
                    <p>{ad.createdAt}</p>
                  </div>
                </Card>
              )
         })}
          </div>
          <div style={{display:selectedAd?'block':'none'}}>
            {selectedAd &&
            <Card>
              <img style={{width:`100%`}} src={selectedAd.photo}/>
              <h1>{selectedAd.advertisingHeader}</h1>  
              <h3>Захиалагч:{selectedAd.owner.name}</h3>
              <p>{selectedAd.detail}</p>
            </Card> }
          </div>
        </div>
        </div>
    </div>
  )
}
