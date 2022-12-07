import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async (col) => {
	const querySnapshot = await getDocs(collection(db, col));
	let documents = [];
	const products = querySnapshot.forEach((doc) => {
		documents.push({ ...doc.data(), id: doc.id });
	});
	return document;
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
	// console.log('blog by id from api', obj);
	return obj ?? null;
};


export const getData = async () => {
	const blogs = await getBlogs();
	const products = await getProducts();
	return {blogs, products}
}