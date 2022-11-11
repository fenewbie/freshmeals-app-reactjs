import {FaTags, FaUserEdit} from 'react-icons/fa';
import {BiCalendar} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from '../Button';

const BlogCard = () => {
    return (
        <div className="shadow-xl rounded-lg overflow-hidden my-10">
            <Link to='/' className='overflow-hidden inline-block'>
                <img alt='Blog' src='https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/blog/1.jpg' className='transition-all duration-500 scale-100 hover:scale-110'/>
            </Link>
            <div className="bg-white p-8 ">
                <div className='flex mb-3'>
                    
                    <div className='flex items-center'>
                        <FaTags className='text-greenBtn'/>
                        <Link to='/' className='text-sm font-medium py-1 px-5 rounded-full border border-greenBtn inline-block text-center bg-transparent ml-2 transition-all duration-300 hover:text-white hover:bg-greenBtn'>
                            Service
                        </Link>
                    </div>
                </div>
                <Link class="text-xl lg:text-2xl font-bold capitalize inline-block mb-2 hover:text-greenBtn transition-all duration-300">Common Engine Oil problems and solutions</Link>
                <p className='text-justify'>
                    Due to its central geographic location in Southern Europe, Italy has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy
                    <Link to='/' className='text-greenBtn font-medium underline underline-offset-4 ml-1'>Read more</Link>
                </p>
                
                <div className='flex items-center justify-between mt-7 border-t pt-6'>
                    <Link to='/' className='flex items-center hover:text-greenBtn transition-all duration-300'>
                        <FaUserEdit className='text-greenBtn mr-2'/>
                        by <span className='ml-1 font-medium'>Admin</span>
                    </Link>
                    <span className='flex items-center'> 
                        <BiCalendar className='text-greenBtn mr-2'/>
                        June 24, 2022
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;