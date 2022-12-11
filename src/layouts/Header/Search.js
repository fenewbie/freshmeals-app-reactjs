import { useState } from "react"; 
import Input from "@components/Form/Input";
import Button from "@components/UI/Button/index";
import { BiSearch, BiX } from 'react-icons/bi';

function Search() {
    const [isOpen, setIsOpen] = useState(false);
    return (
		<div className="relative">
			<Button
				onClick={() => setIsOpen(!isOpen)}
				className="p-3 bg-white rounded-full hover:bg-[#80B500] focus:ring-4"
			>
				{isOpen ? <BiX /> : <BiSearch />}
			</Button>
			{isOpen && (
				<div className="absolute top-[120%] right-0 p-4 bg-white border rounded">
					<Input
						type="text"
						placeholder="Looking for some products"
						className="h-[35px]"
					/>
				</div>
			)}
		</div>
	);
}

export default Search;