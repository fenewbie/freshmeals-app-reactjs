import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase';

const useFirestore = (col) => {
	const [docs, setDocs] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const querySnapshot = await getDocs(collection(db, col));
			let documents = [];
			querySnapshot.forEach((doc) => {
				documents.push({ ...doc.data(), id: doc.id });
			});
			console.log('documents', documents);
			setDocs(documents);
		};
		return () => getData();
	}, [col]);

	return { docs };
};

export default useFirestore;
