import FooterLink from './FooterLink';
import { linkList } from '@utils/constants';

const Company = () => {
  return (
    <div className='w-full p-2'>
      <h4 className='text-xl font-bold mb-6'>Company</h4>
      <ul className='space-y-4'>
        {linkList.map(link => (
          <li key={link.id}>
            <FooterLink to={link.url} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
