import {FaTags, FaUserEdit} from 'react-icons/fa';
import {BiCalendar} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BlogCard = ({title = 'Title', description = 'Write something here...', img, tags = []}) => (
        <div className="shadow-xl rounded-lg overflow-hidden my-10 min-h-[650px]">
            <Link className='pb-[70%] w-full overflow-hidden relative flex bg-slate-50'>
                <div className='absolute top-0 left-0 h-full w-full'>
                    <img alt='Blog' src={img} className='mx-auto w-auto h-full transition-all duration-500 scale-100 hover:scale-110'/>
                </div>
            </Link>
            <div className="bg-white p-8 ">
                <div className='flex mb-3'>
                    
                    <div className='flex items-center'>
                        <FaTags className='text-greenBtn'/>
                        {
                            tags.map((tag, index) => (
                                <Link to='/' key={index} className='text-sm font-medium py-1 px-4 rounded-full border border-greenBtn inline-block text-center bg-transparent ml-2 transition-all duration-300 hover:text-white hover:bg-greenBtn shadow-md'>
                                    {tag}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <Link className="text-xl lg:text-2xl font-bold capitalize inline-block mb-2 hover:text-greenBtn transition-all duration-300">{title}</Link>
                <p className='text-justify truncate'>
                    {description}
                </p>
                    <Link to='/' className='text-greenBtn font-medium underline underline-offset-4'>Read more</Link>
                
                <div className='flex items-center justify-between mt-7 border-t pt-6'>
                    <Link to='/' className='flex items-center hover:text-greenBtn transition-all duration-300'>
                        <FaUserEdit className='text-greenBtn mr-2'/>
                        by <span className='ml-1 font-medium capitalize'>admin</span>
                    </Link>
                    <span className='flex items-center'> 
                        <BiCalendar className='text-greenBtn mr-2'/>
                        Nov 12, 2022
                    </span>
                </div>
            </div>
        </div>
    )

export default BlogCard;