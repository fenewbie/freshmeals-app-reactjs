import logoHeader01 from '../assets/logo.png';
import logoHeader02 from '../assets/logo01.png';
import paymentImg from '../assets/payment.png';
import noresult from '../assets/search/noresults.png';

export const logo01 = logoHeader01;
export const logo02 = logoHeader02;
export const paymentMethod = paymentImg;
export const noResult = noresult;

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
		url: '/sign-in',
	},
	{
		id: 2,
		title: 'Register',
		url: '/register',
	},
	{
		id: 3,
		title: 'My Account',
		url: '/sign-in',
	},
	{
		id: 4,
		title: 'Wishlist',
		url: '/wishlist',
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
			name: 'bread',
		},
		{
			id: 2,
			name: 'cake',
		},
		{
			id: 3,
			name: 'dried food',
		},
		{
			id: 4,
			name: 'drink',
		},
		{
			id: 5,
			name: 'fish',
		},
		{
			id: 6,
			name: 'fruits',
		},
		{
			id: 7,
			name: 'meat',
		},
		{
			id: 8,
			name: 'vegetables',
		},
	],
	labels: [
		{
			id: 1,
			value: 'offer',
			desc: 'Offer'
		},
		{
			id: 2,
			value: 'big sale',
			desc: 'Big Sale'
		},
		{
			id: 3,
			value: 'new',
			desc: 'New'
		},
	],
	rating: [
		{
			id: 1,
			value: 1,
			desc: '1 start',
		},
		{
			id: 2,
			value: 2,
			desc: '2 starts',
		},
		{
			id: 3,
			value: 3,
			desc: '3 starts',
		},
		{
			id: 4,
			value: 4,
			desc: '4 starts',
		},
		{
			id: 5,
			value: 5,
			desc: '5 starts',
		}
	],
};
