function Pagination({ totalPages, currentPage, handlePageChange }) {
	const pageNumberBtns = [];
	for (let index = 1; index < totalPages + 1; index++) {
		pageNumberBtns.push(index);
	}

	console.log(totalPages);
	return (
		<div className="flex justify-center items-center">
			<button
				disabled={currentPage === 1}
				className={`py-2 px-4 mx-5 border rounded  ${
					currentPage !== 1 ? 'cursor-pointer' : 'opacity-60'
				}  ${totalPages === 1 ? 'invisible' : 'visible'}`}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				Previous
			</button>
			{pageNumberBtns.map((numberBtn, index) => (
				<button
					className={`h-10 w-10 rounded border mx-2 ${
						currentPage === numberBtn
							? 'border-greenBtn bg-greenBtn text-white'
							: ''
					}`}
					onClick={() => handlePageChange(numberBtn)}
					key={index}
				>
					{numberBtn}
				</button>
			))}
			<button
				disabled={currentPage === totalPages}
				onClick={() => handlePageChange(currentPage + 1)}
				className={`py-2 px-4 mx-5 border rounded  ${
					currentPage < totalPages ? 'cursor-pointer' : 'opacity-60'
				} ${totalPages === 1 ? 'invisible' : 'visible'}`}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
