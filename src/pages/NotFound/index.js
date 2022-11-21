import MainLayout from "../../components/Layout/MainLayout";
import Button from "../../components/UI/Button";
import  { TbArrowBigLeftLines } from 'react-icons/tb';

function NotFound() {
    return (
        <MainLayout>
            <div className="text-center my-20">
                <h1 className="text-[18rem] font-extrabold text-greenBtn">404</h1>
                <h2 className="text-5xl font-bold uppercase">OOPS! page not found!</h2>
                <p className="mt-7">We are sorry! But the page you are looking for does not exist. It might have been moved or deleted.</p>
                <Button btn='card' type='link' to='/' className='mx-auto'>
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