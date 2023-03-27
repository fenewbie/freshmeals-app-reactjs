export default function CartTotal({ items, totalAmount }) {
	return (
		<table className="w-full">
			<tbody>
				{items?.map((el) => (
					<tr key={el.title} className="border-t border-b bg-[#F7F8FA] h-14">
						<td className="px-6 py-3">
							{el.title} x <span>{el.quantity}</span>
						</td>
						<td className=" px-6 text-right">${el.totalPrice.toFixed(2)}</td>
					</tr>
				))}

				<tr className="border-t border-b bg-[#FAFAFA] h-14">
					<td className="px-6">Shipping and Handing</td>
					<td className=" px-6 text-right">$00.00</td>
				</tr>
				<tr className="border-t border-b bg-[#F7F8FA] h-14">
					<td className="px-6">Vat</td>
					<td className=" px-6 text-right">$00.00</td>
				</tr>
				<tr className="border-t border-b bg-[#FAFAFA] h-14">
					<td className="px-6">
						<h3 className="font-bold">Order Total</h3>
					</td>
					<td className="px-6 text-right">
						<h3 className="font-bold">${totalAmount.toFixed(2)}</h3>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
