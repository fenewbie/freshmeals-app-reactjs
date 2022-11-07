import axios from 'axios';

const baseURL = 'https://api.spoonacular.com/food/products';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;


const apiAxios = axios.create({
	baseURL: baseURL,
	headers: {
		'x-api-key': API_KEY,
		'Content-Type': 'application/json',
	},
});

apiAxios.interceptors.request.use(async (config) => {
	// Handle token here ...
	return config;
});

apiAxios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		// Handle errors
		console.log(error.message);
		throw error;
	}
);

export default apiAxios;
