export const shuffle = (arr) => {
	const copy = [...arr];
	return copy.sort(() => Math.random() - 0.5);
};

