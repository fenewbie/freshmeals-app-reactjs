import { Quantity } from '../../components/Cart/Quantity';
import Button from '../../components/UI/Button';

function CartScreen() {
	const fake = [
		{
			id: 1,
			image: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png',
			name: 'Product Name',
			price: 100,
		},
		{
			id: 2,
			image: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/product/1.png',
			name: 'Product Name',
			price: 200,
		},
	];
	return (
		<div>
			<table className="w-full  text-center">
				{fake.map((product) => (
					<tr
						className={`border-t border-b ${
							parseInt(product.id) % 2 === 0
								? 'max-md:bg-sectionBg'
								: ''
						}`}
					>
						<td className="max-md:block max-md:border-b py-5 md:w-20">
							{product.id}
						</td>
						<td className="max-md:block max-md:border-b py-5">
							<img
								src={product.image}
								alt="product"
								className="h-28 w-28 object-contain mx-auto"
							/>
						</td>
						<td className="max-md:block max-md:border-b py-5">
							<h3 className="font-bold text-[18px]">
								{product.name}
							</h3>
						</td>
						<td className="max-md:block max-md:border-b py-5">
							<span>${product.price.toFixed(2)}</span>
						</td>
						<td className="max-md:block max-md:border-b py-5">
							<div className="h-14">
								<Quantity className="justify-center" />
							</div>
						</td>
						<td className="max-md:block max-md:border-b py-5">
							<h3 className="font-bold text-[18px]">$200.00</h3>
						</td>
					</tr>
				))}
			</table>
			<div className="flex justify-end py-5">
				<Button
					btn="card"
					className="min-w-[150px]"
				>
					Update Cart
				</Button>
			</div>

			<div className="lg:w-[450px] lg:ml-auto mt-12">
				<h3 className="font-bold mb-4 text-xl">Cart Total</h3>
				<table className="w-full">
					<tr className="border-t border-b bg-[#F7F8FA] h-14">
						<td className="px-6">Cart Subtotal</td>
						<td className=" px-6 text-right">$100.00</td>
					</tr>
					<tr className="border-t border-b bg-[#FAFAFA] h-14">
						<td className="px-6">Cart Subtotal</td>
						<td className=" px-6 text-right">$100.00</td>
					</tr>
					<tr className="border-t border-b bg-[#F7F8FA] h-14">
						<td className="px-6">Cart Subtotal</td>
						<td className=" px-6 text-right">$100.00</td>
					</tr>
					<tr className="border-t border-b bg-[#FAFAFA] h-14">
						<td className="px-6">
							<h3 className="font-bold">Order Total</h3>
						</td>
						<td className="px-6 text-right">
							<h3 className="font-bold">$100.00</h3>
						</td>
					</tr>
				</table>
                <Button btn='card' className='w-full mt-5'>Proceed to checkout</Button>
			</div>
		</div>
	);
}

export default CartScreen;
