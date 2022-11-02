import {useContext,createContext, useState,ReactNode} from 'react'
type Props = {
  children: ReactNode;
};

interface CollectionContextInterface {
  selectedAd: object;
  setSelectedAd: (_val: any) => void;
}

export const SelectedAdContext = createContext<CollectionContextInterface>({
  selectedAd: {},
  setSelectedAd: (_val: any) => {},
});

export const SelectedAdContextProvider = ({children}:Props) => {
  const [selectedAd,setSelectedAd] = useState<CollectionContextInterface|any>()
    return(
        <SelectedAdContext.Provider value={{selectedAd,setSelectedAd}}>
            {children}
        </SelectedAdContext.Provider>
    )
}
export const useSelectedContext = () => useContext(SelectedAdContext)