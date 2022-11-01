import {useContext,createContext, useState} from 'react'

export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
type TodoContextType = {
   selectedAd:any,
   setSelectedAd:() => void
  };
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