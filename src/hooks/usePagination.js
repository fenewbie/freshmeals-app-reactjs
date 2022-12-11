import { useEffect, useState } from 'react';

function usePagination({ listData, limit = 1 }) {
	const [dataRender, setDataRender] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState();

	useEffect(() => {
		setTotalPages(listData.length / limit);
		setDataRender(() => [...listData].splice(0, limit));
	}, []);

	useEffect(() => {
		const lastIndex = limit * currentPage;
		const firstIndex = lastIndex - limit;
		setDataRender([...listData].splice(firstIndex, lastIndex));
	}, [currentPage]);

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
