import {useContext,createContext, useState} from 'react'

const SelectedAdContext = createContext();

export const SelectedAdContextProvider = ({children}) => {
  const [selectedAd,setSelectedAd] = useState()
    return(
        <SelectedAdContext.Provider value={{selectedAd,setSelectedAd}}>
            {children}
        </SelectedAdContext.Provider>
    )
}
export const useSelectedContext = () => useContext(SelectedAdContext)