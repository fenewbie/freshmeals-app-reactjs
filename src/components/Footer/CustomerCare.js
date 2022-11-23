import { userList } from '../../constants/route';
import FooterLink from './FooterLink';

const CustomerCare = () => {
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
