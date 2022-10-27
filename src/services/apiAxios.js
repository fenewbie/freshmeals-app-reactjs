import axios from 'axios';

const baseURL = 'https://freshmeals-database.glitch.me';

const apiAxios = axios.create({
	baseURL: baseURL
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
