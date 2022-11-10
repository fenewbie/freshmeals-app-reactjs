import { createContext, useEffect, useState } from "react";
import {db} from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';


const PortfolioContext = createContext();

const PortFolioProvider = ({children}) => {
    const [portfolioImgs, setPortfolioImgs] = useState([]);
    const [indexAct, setIndexAct] = useState();
    const [loopSlide, setLoopSlide] = useState();

    useEffect(() => {
        const getImgs = async () => {
            const docRef = collection(db, 'portfolio');
            const resp = await getDocs(docRef);
            setPortfolioImgs(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          };
          getImgs();
    }, []);

    return (
        <PortfolioContext.Provider value={{portfolioImgs, indexAct, setIndexAct, loopSlide, setLoopSlide}}>
            {portfolioImgs.length > 0 && children}
        </PortfolioContext.Provider>
    )
}

export default PortFolioProvider;
export {PortfolioContext};