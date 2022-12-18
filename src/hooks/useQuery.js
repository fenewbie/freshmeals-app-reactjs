import { db } from '@services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCallback, useState } from 'react';

function useQuery(col, filterArr) {
	/*operator: < less than
	<= less than or equal to
	== equal to
	> greater than
	>= greater than or equal to
	!= not equal to
	array-contains
	array-contains-any
	in
	not-in
	
	*/
	const [resultFilter, setResultFilter] = useState([]);

	const handleFilter = useCallback(() => {
		const filter = async () => {
			let documents = [];
			const productRef = collection(db, col);
			let queryCondition = filterArr.filter((c) => {
				return (
					((typeof c.value === 'string' || Array.isArray(c.value)) &&
						c.value.length > 0) ||
					typeof c.value === 'number'
				);
			});

			queryCondition = queryCondition.map((c) =>
				where(c.field, c.operator, c.value)
			);

			const q = query(productRef, ...queryCondition);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				documents.push({ ...doc.data(), id: doc.id });
			});
			setResultFilter(documents);
		};
		return filter();
	}, [filterArr, col]);

	return {
		handleFilter,
		resultFilter,
	};
}

export default useQuery;
