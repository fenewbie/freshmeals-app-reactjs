import { BsFilterLeft, BsSearch } from 'react-icons/bs';

import Input from './Input';
import Button from '@components/UI/Button';
import CommonSection from '@components/Blog/CommonSection';

function SearchSection() {
	return (
		<CommonSection title="Search Object">
			<form className="md:flex">
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
		</CommonSection>
	);
}

export default SearchSection;
