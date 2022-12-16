export default function CartTotal() {
	return (
		<table className="w-full">
			<tbody>
				<tr className="border-t border-b bg-[#F7F8FA] h-14">
					<td className="px-6">
						Vegetables x <span>2</span>
					</td>
					<td className=" px-6 text-right">$63.00</td>
				</tr>
				<tr className="border-t border-b bg-[#F7F8FA] h-14">
					<td className="px-6">
						Vegetables x <span>2</span>
					</td>
					<td className=" px-6 text-right">$63.00</td>
				</tr>
				<tr className="border-t border-b bg-[#F7F8FA] h-14">
					<td className="px-6">
						Vegetables x <span>2</span>
					</td>
					<td className=" px-6 text-right">$63.00</td>
				</tr>
				<tr className="border-t border-b bg-[#FAFAFA] h-14">
					<td className="px-6">Shipping and Handing</td>
					<td className=" px-6 text-right">$15.00</td>
				</tr>
				<tr className="border-t border-b bg-[#F7F8FA] h-14">
					<td className="px-6">Vat</td>
					<td className=" px-6 text-right">$10.00</td>
				</tr>
				<tr className="border-t border-b bg-[#FAFAFA] h-14">
					<td className="px-6">
						<h3 className="font-bold">Order Total</h3>
					</td>
					<td className="px-6 text-right">
						<h3 className="font-bold">$63.00</h3>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
