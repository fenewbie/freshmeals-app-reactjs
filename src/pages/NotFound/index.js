import MainLayout from "../../components/Layout/MainLayout";
import Button from "../../components/UI/Button";
import  { TbArrowBigLeftLines } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";

function NotFound() {
    const negative = useNavigate()
    return (
        <MainLayout>
            <div className="text-center my-20">
                <h1 className="lg:text-[18rem] md:text-8xl text-7xl font-extrabold text-greenBtn">404</h1>
                <h2 className="lg:text-5xl md:text-2xl font-bold uppercase lg:my-10 my-6">OOPS! page not found!</h2>
                <p className="mt-7">We are sorry! But the page you are looking for does not exist. It might have been moved or deleted.</p>
                <Button btn='card' className='mx-auto'
                    onClick={() => negative('/')}
                >
                    <span className="flex items-center">
                        <TbArrowBigLeftLines className="text-xl mr-2"/>
                        BACK TO HOME
                    </span>
                </Button>
            </div>
        </MainLayout>
    );
}

export default NotFound;