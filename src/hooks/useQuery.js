import { useCallback, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@services/firebase';

function useQuery(col, init) {
	const [resultQuery, setResultQuery] = useState(init);

	const handleQuery = useCallback(
		(conditionArr) => {
			const filter = async () => {
				let documents = [];
				const productRef = collection(db, col);
				let queryCondition = conditionArr.filter((c) => {
					return (
						((typeof c.value === 'string' || Array.isArray(c.value)) &&
							c.value.length > 0) ||
						(typeof c.value === 'number' && !isNaN(c.value))
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
				setResultQuery(documents);
			};
			return filter();
		},
		[col]
	);

	return {
		handleQuery,
		resultQuery,
	};
}

export default useQuery;
