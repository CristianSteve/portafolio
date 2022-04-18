import { useContext} from 'react'
import { LenguageContext } from '../Components/LenguageProvider'

const useLenguage = () => {
    
    return useContext(LenguageContext)
}

export default useLenguage