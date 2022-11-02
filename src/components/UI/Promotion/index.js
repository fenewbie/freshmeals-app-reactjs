import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../../../services/firebase";
import Item from './Item';

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
		<div className='grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 gap-7'>
			{
				list.map((item) => 
					(
						<Item 
							key={item.id} 
							value={item} 
							className={item.id == 3 ? 'md:col-[2_/_span_2]' : 'md:col-span-2'}
						/>
					)
				)
			}
		</div>
  	)
}
