import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Rating from '@components/Product/Rating'

function ProductTabs({ desc, review, rating, numReviews }) {
	return (
		<Tabs
			onSelect={(firstTab, lastTab) =>
				console.log(`${firstTab}, ${lastTab}`)
			}
		>
			<TabList className="flex flex-wrap py-5 px-0 font-bold cursor-pointer">
				<Tab
					className="mr-[50px] outline-none"
					selectedClassName="text-greenBtn border-b-2 border-greenBtn pb-5"
				>
					Description
				</Tab>
				<Tab
					className="outline-none"
					selectedClassName="text-greenBtn border-b-2 border-greenBtn  pb-5"
				>
					Reviews
				</Tab>
			</TabList>
			<TabPanel className="text-justify ">
				<p className="py-3 mb-2 md:text-2xl text-xl font-bold font-raj">
					Some advantage features of this product
				</p>
				<p className='max-md:text-sm'>{desc}</p>
			</TabPanel>
			<TabPanel>
				<p className="py-3 mb-2 text-2xl text-xl font-bold font-raj">
					Customer Reviews
				</p>
				<Rating
					value={rating}
					text={numReviews}
				/>
				{review || 'No Review'}
			</TabPanel>
		</Tabs>
	);
}

export default ProductTabs;
