import { useState, useEffect } from 'react';
import axios from 'axios';

const useHttp = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const API_KEY = `${process.env.REACT_APP_API_KEY_1}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://api.spoonacular.com/food/products/search?query=bread`
				);

				if (!response.ok) {
					throw new Error('Request failed!');
				}

				const data = await response.data.products;
				setData(data);
			} catch (err) {
				setError(err.message || 'Something went wrong!');
			}
		};
		fetchData();
	}, []);

	return {
		data,
	};
};

export default useHttp;
