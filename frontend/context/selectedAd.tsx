import {useContext,createContext, useState,ReactNode} from 'react'
type Props = {
  children: ReactNode;
};

interface CollectionContextInterface {
  selectedAd: any;
  setSelectedAd: (_val: any) => void;
}

export const SelectedAdContext = createContext<CollectionContextInterface>({
  selectedAd: false,
  setSelectedAd: (_val: any) => {},
});

export const SelectedAdContextProvider = ({children}:Props) => {
  const [selectedAd,setSelectedAd] = useState<CollectionContextInterface|Boolean>()
    return(
        <SelectedAdContext.Provider value={{selectedAd,setSelectedAd}}>
            {children}
        </SelectedAdContext.Provider>
    )
}
export const useSelectedContext = () => useContext(SelectedAdContext)