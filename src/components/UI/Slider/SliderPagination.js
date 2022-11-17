import { useSwiper } from "swiper/react";

const SliderPagination = ({totalSlides, indexAct}) => {
    const swiper = useSwiper();

    const createDots = (total) => {
        const dots = [];
        for (let i = 0; i < total; i++) {
            const dot = <span key={i} className={`block h-2.5 w-2.5 rounded-full mx-1 md:mx-3 hover:bg-greenBtn ${i === indexAct? 'bg-greenBtn' : 'bg-[#C0C0C0]'}`}
                        onClick={() => swiper.slideToLoop(i)}></span>;
            dots.push(dot);
        }
        return dots;
    }

    return (
        <div className="flex justify-center cursor-pointer lg:hidden">
            {
                createDots(totalSlides)
            }
        </div>
    )
}

export default SliderPagination;