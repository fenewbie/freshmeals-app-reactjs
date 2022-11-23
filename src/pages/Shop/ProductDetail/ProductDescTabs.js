import { Tabs } from "flowbite-react";
import {HiUserCircle} from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

function ProductTabs({productDesc}) {
    return (
		<Tabs.Group
			style="underline"
		>
			<Tabs.Item
				active={true}
				title="Description"
                
			>
				{productDesc}
			</Tabs.Item>
			<Tabs.Item
				title="Review"
			>
				Review
			</Tabs.Item>
		</Tabs.Group>
	);
}

export default ProductTabs;