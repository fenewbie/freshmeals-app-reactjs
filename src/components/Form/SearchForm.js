import { BsFilterLeft, BsSearch } from 'react-icons/bs';

import Input from './Input';
import Button from '@components/UI/Button';
import CommonSection from '@components/Blog/CommonSection';

function SearchSection() {
	const handleSubmit = e => {
		e.preventDefault();
		
	}
	return (
		
			<form className="md:flex" onSubmit={handleSubmit}>
				<div className="flex-1">
					<Input
						type="text"
						placeholder="Search for some objects"
						className="rounded-none"
					/>
				</div>
				<Button
					btn="card"
					className="rounded-none"
				>
					<BsSearch className="mx-auto" />
				</Button>
			</form>
		
	);
}

export default SearchSection;
