import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const BlogSwiper = ({children}) => {
    return (
        <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination,Navigation]}
            className="mySwiper"
        >
            {children}
        </Swiper>
    )
}
export default BlogSwiper;