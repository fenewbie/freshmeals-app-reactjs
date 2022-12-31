import { userList } from '@utils/constants';
import FooterLink from './FooterLink';

const CustomerCare = () => {
  return (
		<div className="w-full p-2">
			<h4 className="text-xl font-bold mb-6">Customer Care</h4>
			<ul className="space-y-4">
				{userList.map((link) => (
					<li key={link.id}>
						<FooterLink to={link.to} title={link.title} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CustomerCare;
