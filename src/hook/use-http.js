import axios from 'axios';
import { useState, useEffect } from 'react';
import * as cs from '../constants/Constant';

const useHttp = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			try {
				let endpoints = [
					`${cs.BASE_URL}/search?apiKey=${cs.API_KEY}&query=vegetables`,
					`${cs.BASE_URL}/search?apiKey=${cs.API_KEY}&query=drink`,
					`${cs.BASE_URL}/search?apiKey=${cs.API_KEY}&query=dried-foods`,
					`${cs.BASE_URL}/search?apiKey=${cs.API_KEY}&query=bread-cake`,
					`${cs.BASE_URL}/search?apiKey=${cs.API_KEY}&query=fish-meat`,
				];
				setLoading(true);
				Promise.all(
					endpoints
						.map((endpoint) => axios.get(endpoint))
						.then((res) => {
							console.log('product List is:',res[0].data);
							let proArray = [];
							const productList = proArray.push(res[0].data.products);
							console.log('productLis', proArray);
						})
				);
				// setData(data);
			} catch (err) {
				setError(err.message || 'Something went wrong!');
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div>Nothing</div>
	)
};

export default useHttp;
