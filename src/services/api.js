import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from './firebase';

// Products
export const getProducts = async () => {
	const productsSnap = await getDocs(collection(db, 'products'));
	let document = [];
	productsSnap.forEach((doc) => {
		document.push({ ...doc.data(), id: doc.id });
	});
	return document;
};


export const getProductById = async (id) => {
	const productRef = doc(db, 'products', id);
	const productSnap = await getDoc(productRef);
	const obj = productSnap.data();
	return obj ?? null;
};


// Blog
export const getBlogs = async () => {
	const blogsSnap = await getDocs(collection(db, 'blog'));
	let document = [];
	blogsSnap.forEach((doc) => {
		document.push({ ...doc.data(), id: doc.id });
	});
	return document;
};

export const getBlogById = async (id) => {
	const blogRef = doc(db, 'blog', id);
	const blogSnap = await getDoc(blogRef);
	const obj = blogSnap.data();
	return obj ?? null;
};

export const getData = async () => {
	const blogs = await getBlogs();
	const products = await getProducts();
	return { blogs, products };
};

