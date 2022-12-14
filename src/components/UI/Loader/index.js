import { spinner } from '@utils/constants';
import * as cs from '@utils/constants';

export default function Loader({ type }) {
	switch (type) {
		case 'section':
			return (
				<img
					src={spinner}
					alt="Loading..."
					className="m-auto mb-10 w-14"
				/>
			);
		case 'enter-web':
			return (
				<div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
					<div class="md:h-40 md:w-40 w-32 h-32 relative flex items-center justify-center px-3">
						<span className="text-greenBtn md:text-2xl text-xl">
							<img
								alt="logo"
								src={cs.logo01}
								className="h-full object-contain relative z-10"
							/>
						</span>
						<div class="absolute top-0 left-0 animate-spin rounded-full h-full w-full border-t-4 border-b-4 border-greenBtn bg-[#2D3240]"></div>
					</div>
				</div>
			);
		default:
			return (
				<div className="min-h-[50vh] flex items-center justify-center">
					<div className="text-center align-middle relative flex bg-transparent">
						<span className="block w-5 h-5 bg-green-800 rounded-full my-0 mx-[5px] shadow-slate-400 animate-animate"></span>
						<span className="block w-5 h-5 bg-green-700 rounded-full my-0 mx-[5px] shadow-slate-400 animate-animate"></span>
						<span className="block w-5 h-5 bg-green-600 rounded-full my-0 mx-[5px] shadow-slate-400 animate-animate"></span>
						<span className="block w-5 h-5 bg-green-500 rounded-full my-0 mx-[5px] shadow-slate-400 animate-animate"></span>
						<span className="block w-5 h-5 bg-green-400 rounded-full my-0 mx-[5px] shadow-slate-400 animate-jump"></span>
					</div>
				</div>
			);
	}
}
