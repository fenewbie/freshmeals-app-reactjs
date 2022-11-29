export const shuffle = (arr) => {
	const copy = [...arr];
	return copy.sort(() => Math.random() - 0.5);
};


export const reviewRandom = () => {
	return  Math.floor(Math.random() * 200);
}

export const ratingRandom = () => {
	return  (Math.random() * 5).toFixed(1);
}

export const discountRandom = (price) => {
	return (Math.random() * price).toFixed(0);
}