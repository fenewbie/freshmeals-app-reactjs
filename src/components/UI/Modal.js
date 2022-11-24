import { IoClose } from 'react-icons/io5';
const Backdrop = ({children, handleUnmount}) => {
    return (
        <div className={`bg-transparent fixed top-0 left-0 bottom-0 right-0 z-10`}
        >
            <div className={`backdrop-saturate-50 bg-slate-900/80 absolute top-0 left-0 w-full h-full z-10`}
                onClick={() => handleUnmount()}
            
            ></div>
            <button className='fixed top-4 right-4 text-white text-3xl z-10 p-1 rounded-full border-2 border-white opacity-60 hover:opacity-100'
                onClick={() => handleUnmount()}
            >
                <IoClose/>
            </button>
            <div className="bg-transparent relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {children}
            </div>
        </div>
    )
}

export default Backdrop;