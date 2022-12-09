import Button from '@components/UI/Button';
import { IoArrowUndoOutline } from 'react-icons/io5';
function CommentCard({ avatar, name, date, comment, separate }) {
	return (
		<div className={`flex items-center py-8 ${separate && 'border-b border-[rgba(0, 0, 0, 0.05)]'}`}>
			<img
				src={avatar}
				alt="user"
				className="h-24 w-24 rounded-full"
			/>
			<div className="ml-10">
				<div className="flex justify-between">
					<div>
						<h3 className="font-bold text-lg">{name}</h3>
						<span className="block font-bold text-sm text-greenBtn mt-1">
							{date}
						</span>
					</div>
					<div>
						<Button
							type="link"
							link="/blog"
							className="flex items-center py-2 px-7 rounded-full border-2 
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
		</div>
	);
}

export default CommentCard;
