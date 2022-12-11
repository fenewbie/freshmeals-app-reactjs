function Pagination({
	totalPages,
	currentPage,
	handlePageChange
}) {

	const pageNumberBtns = [];
	for (let index = 1; index < totalPages + 1; index++) {
		pageNumberBtns.push(index);
	}

	
	
	return (
		<div className="flex justify-center items-center">
			<button
				disabled={currentPage === 1}
				className={`py-2 px-4 mx-5 border rounded  ${
					currentPage !== 1 ? 'cursor-pointer' : 'opacity-60'
				}`}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				Previous
			</button>
			{pageNumberBtns.map((numberBtn) => (
				<button
					className={`h-10 w-10 rounded border mx-2 ${
						currentPage === numberBtn
							? 'border-greenBtn bg-greenBtn text-white'
							: ''
					}`}
					onClick={() => handlePageChange(numberBtn)}
				>
					{numberBtn}
				</button>
			))}
			<button
				disabled={currentPage === totalPages}
				onClick={() => handlePageChange(currentPage + 1)}
				className={`py-2 px-4 mx-5 border rounded  ${
					currentPage < totalPages ? 'cursor-pointer' : 'opacity-60'
				}`}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
