import * as cs from '../../utils/constants';

function SearchPage() {
	return (
		<div className='container mx-auto py-28'>
			<span className="text-5xl font-bold flex items-center">
				No result
				<img
					src={cs.noResult}
					alt="no-result"
					className="h-16 object-contain ml-2"
				/>
			</span>
		</div>
	);
}

export default SearchPage;
