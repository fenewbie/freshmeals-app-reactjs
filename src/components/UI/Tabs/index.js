// import { useState } from 'react'
// import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

// const CustomTab = ({onClick, children}) => {
//     return <div onClick={onClick}>{children}</div>
//     CustomTab.tabsRole = 'Tab'
//     const [tabIndex, setTabIndex]  = useState(0)
//     return (
//       <div className={clas}>
//         <Tabs
//           selectedIndex={tabIndex}
//           onSelect={index => setTabIndex(index)}
//         >
//           <TabList>
//             <Slider {...settings}>
//               <CustomTab onClick={()=> setTabIndex(0)}>Title 1</CustomTab>
//               <CustomTab onClick={()=> setTabIndex(1)}>Title 2</CustomTab>
//               <CustomTab onClick={()=> setTabIndex(2)}>Title 3</CustomTab>
//               <CustomTab onClick={()=> setTabIndex(3)}>Title 4</CustomTab>
//             </Slider>
//           </TabList>
//           <TabPanel>1</TabPanel>
//           <TabPanel>2</TabPanel>
//           <TabPanel>3</TabPanel>
//           <TabPanel>4</TabPanel>
//         </Tabs>
//       </div>
//       )

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

// All custom elements should pass through other props
const CustomTab = ({
	children,
	...otherProps
}) => (
	<Tab {...otherProps}>
		<h1>{children}</h1>
	</Tab>
);

CustomTab.tabsRole = 'Tab'

const TabsCustom = () => (
	<Tabs>
		<TabList>
			<CustomTab>Custom Tab 1</CustomTab>
			<CustomTab>Custom Tab 2</CustomTab>
		</TabList>
		<TabPanel>Panel 1</TabPanel>
		<TabPanel>Panel 2</TabPanel>
	</Tabs>
);
export default TabsCustom;