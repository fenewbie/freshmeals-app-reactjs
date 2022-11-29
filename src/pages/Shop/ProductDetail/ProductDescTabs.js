import { Tabs } from "flowbite-react";
import {HiUserCircle} from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

function ProductTabs({productDesc, review}) {
    return (
		<Tabs.Group style="underline">
			<Tabs.Item
				active={true}
				title="Description"
			>
				<p className="text-justify">{productDesc}</p>
			</Tabs.Item>
			<Tabs.Item title="Review">{review || 'No Review'}</Tabs.Item>
		</Tabs.Group>
	);
}

export default ProductTabs;