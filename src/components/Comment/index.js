import { IoArrowUndoOutline } from 'react-icons/io5';
import Button from '@components/UI/Button';
import Card from '@components/UI/Card';
function CommentCard({ avatar, name, date, comment, separate }) {
	return (
		<Card
			className={`flex max-md:flex-wrap items-center py-8 ${
				separate && 'border-b border-[rgba(0, 0, 0, 0.05)]'
			}`}
		>
			<img src={avatar} alt="user" className="h-24 w-24 rounded-full" />
			<div className="md:ml-10 max-md:mt-5">
				<div className="flex justify-between">
					<div>
						<h3 className="font-bold md:text-lg font-raj">{name}</h3>
						<span className="block font-semibold md:text-sm text-[0.8rem] text-greenBtn mt-1 font-raj">
							{date}
						</span>
					</div>
					<div>
						<Button
							type="link"
							link="/blog"
							className="flex items-center py-2 max-md:text-sm md:px-7 px-5 rounded-full border-2 
                        border-[#e7e7e7]
                        hover:border-greenBtn hover:text-greenBtn"
						>
							<IoArrowUndoOutline className="mr-1 relative -top-[1px]" />
							Reply
						</Button>
					</div>
				</div>
				<p className="mt-4 text-sm">{comment}</p>
			</div>
		</Card>
	);
}

export default CommentCard;
