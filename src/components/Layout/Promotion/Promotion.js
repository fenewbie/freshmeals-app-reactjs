import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import {db} from "../../../services/firebase"
import PromotionItem from './PromotionItem'

export default function Promotion() {
	const [list, setList] = useState([]);
	const colors = ['red', 'blue', 'purple'];
	useEffect(() => {
		const getData = async () => {
			const data = await getDocs(collection(db, "promotion"));
			setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
	  
		getData();
	}, []);

  	return (
		<>
			<div className='container mx-auto xsm:max-w-full'>
				<div className='flex flex-wrap justify-center'>
					{
						list.map((item, index) => 
							(
								<PromotionItem key={index} value={item} color={colors[index]}/>
							)
						)
					}
				</div>
			</div>
		</>
  	)
}
