function Pagination({ totalPages, currentPage, handlePageChange }) {
	const pageNumberBtns = [];
	for (let index = 1; index < totalPages + 1; index++) {
		pageNumberBtns.push(index);
	}
	return (
		<div className="flex justify-center items-center flex-wrap">
			<button
				disabled={currentPage === 1}
				className={`py-2 px-4 mx-5 border rounded mb-2  ${
					currentPage !== 1
						? 'cursor-pointer hover:border-greenBtn'
						: 'opacity-60'
				}  ${totalPages < 2 ? 'invisible' : 'visible'}`}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				Previous
			</button>
			{pageNumberBtns.map((numberBtn, index) => (
				<button
					className={`h-10 w-10 rounded border mx-2 mb-2 hover:border-greenBtn ${
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
				className={`py-2 px-4 mx-5 border rounded mb-2  ${
					currentPage < totalPages
						? 'cursor-pointer hover:border-greenBtn'
						: 'opacity-60'
				} ${totalPages < 2 ? 'invisible' : 'visible'}`}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
