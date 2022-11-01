import {useContext,createContext, useState, ReactNode,SetStateAction,Dispatch} from 'react'

type context = {
  selectedAd:object,
  children:ReactNode,
  setSelectedAd:React.Dispatch<React.SetStateAction<string>>
}

const SelectedAdContext = createContext<object|null>(null);

export const SelectedAdContextProvider :React.FC<context> = (props) => {
  const [selectedAd,setSelectedAd] = useState(null)
    return(
        <SelectedAdContext.Provider value={{selectedAd,setSelectedAd}}>
            {props.children}
        </SelectedAdContext.Provider>
    )
}
export const useSelectedContext = () => useContext(SelectedAdContext)