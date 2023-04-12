import { toast } from 'react-hot-toast';
import * as cs from './constants';

export const toastMessage = (message) => {
	return toast.custom((t) => {
		return (
			<div
				className={` ${
					t.visible ? 'animate-toastEnter' : 'animate-toastLeave'
				} flex gap-3 items-center bg-white border border-l-4  border-greenBtn py-2 pl-2 pr-3 rounded-md shadow-xl`}
			>
				<img
					src={cs.addCart}
					className="h-12 w-12"
					alt="toast"
				/>
				<span>{message}</span>
			</div>
		);
	});
};
