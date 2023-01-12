import { useEffect, useState } from 'react';

const Timer = ({ day, type }) => {
	const [counter, setCounter] = useState(+(day * 24 * 60 * 60).toFixed(0));

	let days, hrs, mins, secs;

	const formatCounter = () => {
		const format = (timer) => {
			timer = timer < 10 ? '0' + timer : timer;
			return timer;
		};

		let totalSeconds = counter;
		hrs = Math.floor(totalSeconds / 3600);

		days = Math.floor(hrs / 24);
		days = format(days);

		hrs %= 24;
		hrs = format(hrs);

		totalSeconds %= 3600;

		mins = Math.floor(totalSeconds / 60);
		mins = format(mins);

		secs = (totalSeconds % 60).toFixed(0);
		secs = format(secs);
	};

	formatCounter();

	useEffect(() => {
		const intCountDown = setInterval(() => {
			setCounter((preCounter) => {
				const newCounter =
					preCounter === 0 ? +(day * 24 * 60 * 60).toFixed(0) : preCounter - 1;
				return newCounter;
			});
		}, 1000);

		return () => {
			clearInterval(intCountDown);
		};
	}, [day]);

	return (
		<div className="mt-12 flex flex-wrap max-sm:justify-around font-sans">
			<div className="inline-block text-center mr-4 sm:mr-6 my-3 sm:my-0 ">
				<span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">
					{days}
				</span>
				<span className={`uppercase text-sm lg:text-lg inline-block mt-2 ${type && 'text-white'} `}>
					DAYS
				</span>
			</div>

			<div className="inline-block text-center mr-4 sm:mr-6 my-3 sm:my-0">
				<span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">
					{hrs}
				</span>
				<span className={`uppercase text-sm lg:text-lg inline-block mt-2 ${type && 'text-white'} `}>
					Hrs
				</span>
			</div>
			<div className="inline-block text-center mr-4 sm:mr-6 my-3 sm:my-0">
				<span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">
					{mins}
				</span>
				<span className={`uppercase text-sm lg:text-lg inline-block mt-2 ${type && 'text-white'} `}>
					mins
				</span>
			</div>
			<div className="inline-block text-center mr-4 sm:mr-6 my-3 sm:my-0">
				<span className="h-12 w-12 lg:h-24 lg:w-24 min-[600px]:h-14 min-[600px]:w-14 rounded-full bg-white text-xl lg:text-3xl font-bold text-center flex justify-center items-center">
					{secs}
				</span>
				<span className={`uppercase text-sm lg:text-lg inline-block mt-2 ${type && 'text-white'} `}>
					secs
				</span>
			</div>
		</div>
	);
};

export default Timer;
