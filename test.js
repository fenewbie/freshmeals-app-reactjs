import './styles.css';
import axios from 'axios';
import { useState } from 'react';

export default function App() {
	const [planets, setPlanets] = useState([]);

	// Make a request
	const getRequest = async (num) => {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${num}`
		);
		// console.log(response);

		return response;
	};

	// Create an array, filled with promises
	let arr = [];
	let i;
	for (i = 1; i < 10; i++) {
		arr.push(getRequest(i));
	}

	// array of promises
	// console.log(arr);

	// Resolve all promises
	const func = async (arr) => {
		try {
			const stuff = await Promise.all(arr);
			// console.log(stuff);
			setPlanets(stuff);
			return stuff;
		} catch (error) {
			console.error(error);
		}
	};

	// console.log(func(arr));
	func(arr);

	// const planetArr = Promise.all(arr).then((res) =>
	//   res.forEach((result) => console.log(result))
	// );

	return (
		<div className="App">
			<h1>Promise.all!</h1>
			{planets.map((planet) => (
				<div key={planet.data.name}>{planet.data.name}</div>
			))}
		</div>
	);
}
