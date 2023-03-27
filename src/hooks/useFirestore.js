import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@services/firebase';

const useFirestore = (col) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const getMultiDocuments = async () => {
			const querySnapshot = await getDocs(collection(db, col));
			let documents = [];
			querySnapshot.forEach((doc) => {
				documents.push({ ...doc.data(), id: doc.id });
			});
			setDocs(documents);
		};
		return () => getMultiDocuments();
	}, [col]);

	
	return { docs };
};

export default useFirestore;
