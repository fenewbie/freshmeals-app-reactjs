import { userList } from '../../../constants/route';
import FooterLink from './FooterLink';


const CustomerCare = () => {
  // const customerCare = userList.filter(item => item.title === 'user')[0];
  
  // const links = [
  //   ...customerCare.children.filter(link => link.title !== 'Register'),
  //   { id: 5, title: 'contact us', url: '/contact' },
  // ];
  return (
		<div className="w-full p-2">
			<h4 className="text-xl font-bold mb-6">Customer Care</h4>
			<ul className="space-y-4 pb-14">
				{userList.map((link, idx) => (
					<li key={idx}>
						<FooterLink to={link.url} title={link.title} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CustomerCare;
