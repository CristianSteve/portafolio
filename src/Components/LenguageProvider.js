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
        flagLenguage(){
            const changeLenguage = lenguage.lenguage === 'English' ? 'Español' : 'English';
            const [defaultLenguage] = idioma.filter((i) => i.lenguage === changeLenguage);
            console.log(defaultLenguage)
            setLenguage(defaultLenguage)
        },
    }

    return <LenguageContext.Provider value={contextValue}>{children}</LenguageContext.Provider>
};

export default LenguageProvider

