import { useState } from "react";
import Tabs from './Tabs';
import SwiperProduct from './SwiperProducts'
import { Swiper ,SwiperSlide } from "swiper/react";


const Test = () => {
    const [list, setList] = useState([
        {label:'Food & drinks', content: 'Tab1...'}, 
        {label:'Vegetables', content: 'Tab2...'}, 
        {label:'dried foods', content: 'Tab3...'}, 
        {label:'bread & cakes', content: 'Tab4...'},
        {label:'fish & meat', content: 'Tab4...'}]);


    return (
        <Tabs>
            {
                list.map(
                    item => <span key={item.label} label={item.label}
                    >
                                <SwiperProduct>
                                    <SwiperSlide className='min-h-[200px]'>
                                        {item.content}
                                    </SwiperSlide>
                                </SwiperProduct>
                            </span>
                    )
            }
        </Tabs>
    )
}

export default Test;