import logoHeader01 from '../assets/logo.png';
import logoHeader02 from '../assets/logo01.png';
import paymentImg from '../assets/payment.png';
import noresult from '../assets/search/noresults.png';
import emailImg from '../assets/contact/mail.png';
import phoneImg from '../assets/contact/phone.png';
import locateImg from '../assets/contact/locate.png';

export const logo01 = logoHeader01;
export const logo02 = logoHeader02;
export const paymentMethod = paymentImg;
export const noResult = noresult;
export const email = emailImg;
export const phone = phoneImg;
export const locate = locateImg;

export const labelProduct = [
	{ id: 1, label: 'food & drinks' },
	{ id: 2, label: 'vegetables' },
	{ id: 3, label: 'dried food' },
	{ id: 4, label: 'bread & cake' },
	{ id: 5, label: 'fish & meat' },
	{ id: 6, label: 'fruits' },
];

// Navbar
export const navbarList = [
	{
		id: 1,
		title: 'home',
		url: '/',
		parent_id: null,
	},

	{
		id: 2,
		title: 'about',
		url: '/about',
		parent_id: 1,
	},
	{
		id: 3,
		title: 'shop',
		url: '/shop',
		parent_id: 1,
	},
	{
		id: 4,
		title: 'contact',
		url: '/contact',
		parent_id: 1,
	},
	{
		id: 5,
		title: 'blog',
		url: '/blog',
		parent_id: 1,
	},
	{
		id: 6,
		title: 'gallery',
		url: '/gallery',
		parent_id: 1,
	},
];

export const userList = [
	{
		id: 1,
		title: 'Sign in',
		to: '/login',
	},
	{
		id: 2,
		title: 'Register',

		to: '/register',
	},
	{
		id: 3,
		title: 'My Account',
		to: '/user-profile',
	},
	{
		id: 4,
		title: 'Wishlist',
	},
];

export const linkList = [
	{ id: 1, title: 'About', url: '/about' },
	{ id: 2, title: 'Blog', url: '/' },
	{ id: 3, title: 'Locations Map', url: '/' },
];

export const linkFooter = [
	{ id: 1, title: 'Order tracking', url: '' },
	{ id: 2, title: 'Promotional Offers', url: '' },
];

export const productFilter = {
	categories: [
		{
			id: 1,
			value: 'bread',
			key: 'bread',
		},
		{
			id: 2,
			value: 'cake',
			key: 'cake',
		},
		{
			id: 3,
			value: 'dried food',
			key: 'dried food',
		},
		{
			id: 4,
			value: 'drink',
			key: 'drink',
		},
		{
			id: 5,
			value: 'fish',
			key: 'fish',
		},
		{
			id: 6,
			value: 'fruits',
			key: 'fruits',
		},
		{
			id: 7,
			value: 'meat',
			key: 'meat',
		},
		{
			id: 8,
			value: 'vegetables',
			key: 'vegetables',
		},
	],
	labels: [
		{
			id: 1,
			value: 'offer',
			key: 'Offer',
		},
		{
			id: 2,
			value: 'big sale',
			key: 'Big Sale',
		},
		{
			id: 3,
			value: 'new',
			key: 'New',
		},
	],
	rating: [
		{
			id: 1,
			value: '1',
			key: '1 start & Up',
		},
		{
			id: 2,
			value: '2',
			key: '2 starts & Up',
		},
		{
			id: 3,
			value: '3',
			key: '3 starts & Up',
		},
		{
			id: 4,
			value: '4',
			key: '4 starts & Up',
		},
		{
			id: 5,
			value: '5',
			key: '5 starts & Up',
		},
	],
};

export const countryOption = [
	{ key: 'Select country', value: '' },
	{ key: 'Australia', value: 'Australia' },
	{ key: 'France', value: 'France' },
	{ key: 'United Kingdom (UK)', value: 'United Kingdom (UK)' },
	{ key: 'China', value: 'China' },
	{ key: 'Saudi Arabia', value: 'Saudi Arabia' },
	{ key: 'Morocco', value: 'Morocco' },
	{ key: 'United States (US)', value: 'United States (US)' },
];
export const createaccount = [
	{
		key: 'Create an account ?',
		value: '0',
	},
];

export const saveinfocomment = [
	{
		key: 'Save my name, email, and website in this browser for the next time I comment.',
		value: '0',
	},
];

export const servicetype = [
	{
		key: 'Select Service Type',
		value: '',
	},
	{
		key: 'Gardening',
		value: 'Gardening',
	},
	{
		key: 'Landscaping',
		value: 'Landscaping',
	},
	{
		key: 'Vegetables Growing',
		value: 'Vegetables Growing',
	},
	{
		key: 'Land Preparation',
		value: 'Land Preparation',
	},
];
