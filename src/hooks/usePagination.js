import { useEffect, useState } from 'react';

function usePagination({ listData, limit = 1 }) {
	const [dataRender, setDataRender] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState();
	// const [limit, setLimit] = useState(limitDefault);
	useEffect(() => {
		setTotalPages(Math.ceil(listData.length / limit));
		setDataRender(() => [...listData].splice(0, limit));
		setCurrentPage(1);
		// setLimit()
	}, [listData]);

	useEffect(() => {
		const lastIndex = limit * currentPage;
		const firstIndex = lastIndex - limit;
		setDataRender(() => {
			const newArr = [...listData].slice(firstIndex, lastIndex);
			return newArr
		});
	}, [currentPage, listData, limit]);

	const handlePageChange = (page) => {
        setCurrentPage(page);
    }

	return {
		dataRender,
		currentPage,
		totalPages,
		handlePageChange
	};
}

export default usePagination;
