import MainLayout from '../../components/Layout/MainLayout';
import Promotion from '../components/UI/Promotion';
import CountDown from '../../containers/CountDown';
import OurProducts from '../Shop/OurProducts';

const Home = () => {
	return (
		<MainLayout>
			<OurProducts />
			<Promotion />
			<CountDown />
		</MainLayout>
	);
};

export default Home;
