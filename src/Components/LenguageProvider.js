import { createContext, useEffect, useState } from 'react'
import idioma from '../Idioma/idioma';

export const LenguageContext = createContext();


const LenguageProvider = ({children}) =>{
    const [lenguage, setLenguage] = useState();

    useEffect(() => {
      const [defaultLenguage] = idioma.filter((i) => i.lenguage === 'English');
      setLenguage(defaultLenguage);
    }, [])
    

    const contextValue = {
        lenguage,
        flagLenguage(lenguage){
            setLenguage(idioma.filter((i) => i.lenguage === lenguage))
        },
    }

    return <LenguageContext.Provider value={contextValue}>{children}</LenguageContext.Provider>
};

export default LenguageProvider

