import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import {db} from "../../../services/firebase"
import Item from './Item'

export default function Promotion() {
	const [list, setList] = useState([]);
	
	useEffect(() => {
		const getData = async () => {
			const data = await getDocs(collection(db, "promotion"));
			setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
	  
		getData();
	}, []);

  	return (
		<>
			<div>
				<div className='flex flex-wrap justify-center'>
					{
						list.map((item) => 
							(
								<Item key={item.id} value={item}/>
							)
						)
					}
				</div>
			</div>
		</>
  	)
}
