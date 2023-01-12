import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@services/firebase';

export default function useFetchDocument(collectionName, documentID) {
	const [document, setDocument] = useState(null);
	const getSingleDocument = async () => {
		const docRef = doc(db, collectionName, documentID);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const obj = {
				id: documentID,
				...docSnap.data(),
			};
			setDocument(obj);
		} else {
			console.log('Document not found');
		}
	};

	useEffect(() => {
		getSingleDocument();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { document };
}
