import {
	collection,
	query,
	where,
	onSnapshot,
    getDocs
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase';

function useQueryDocument(col, queryObj, operator) {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const getFilterDocuments = async () => {
			const colRef = collection(db, col);

            // query
			const q = query(
				colRef,
				where(queryObj.key, operator, queryObj.value)
			);

            const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				let documents = [];
				querySnapshot.docs.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});
		};
		return () => getFilterDocuments();
	}, []);

	return { docs };
}

export default useQueryDocument;
