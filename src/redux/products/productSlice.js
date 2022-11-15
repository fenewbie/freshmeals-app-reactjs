import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_API_KEY_2}`;
const getProducts = (setProVeg, setProBread,setProFruits) => {
	try {
		let endpoints = [
			`https://api.spoonacular.com/food/products/search?apiKey=${API_KEY}&query=vegetables`,
			`https://api.spoonacular.com/food/products/search?apiKey=${API_KEY}&query=bread`,
			`https://api.spoonacular.com/food/products/search?apiKey=${API_KEY}&query=fruits`,
		];

		Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
			(res) => {
				console.log(res[0].data);
				let proArray = []
				const productList = proArray.push(res[0].data.products);
				console.log("productLis",proArray)
				setProVeg(productList);
				setProBread()
			}
		);
	} catch (err) {
		console.log('Error getting products failed: ' + err.message);
	}
};
export default getProducts;
