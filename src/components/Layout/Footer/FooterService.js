import FooterLink from './FooterLink';
import  {linkFooter} from '../../../constants/route'


const FooterService = () => {
  return (
		<div className="w-full p-2">
			<h4 className="text-xl font-bold mb-6">Services</h4>
			<ul className="space-y-4 pb-14">
				{linkFooter.map((link) => (
					<li key={link.id}>
						<FooterLink to={link.url} title={link.title} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterService;
