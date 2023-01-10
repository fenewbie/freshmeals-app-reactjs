import Title from '@components/Title';

function IntroSection() {
	return (
		<div className=" container py-28 grid lg:grid-cols-2 grid-cols-1 gap-16">
			<div className="grid grid-cols-2 md:gap-10 gap-7">
				<img
					className="rounded-md"
					src="https://img.freepik.com/free-photo/close-up-old-farmer-holding-basket-vegetables-man-is-standing-garden-senior-black-apron_1157-39732.jpg?t=st=1669967057~exp=1669967657~hmac=069230ad6b8127c372372939ed41d749d9dd6ab21841fb7018563f54b018e2e3"
					alt="about"
				/>
				<img
					className="mt-10 rounded-md"
					src="https://img.freepik.com/free-photo/man-trimming-bough-brush-senior-black-apron_1157-39699.jpg?t=st=1669967185~exp=1669967785~hmac=75d09914cbecb4ba096559726ecb4fd336e63116fea68c2be9784c4554766884"
					alt="about"
				/>
			</div>
			<div>
				<Title
					title="We  are FRESHMEALS"
					subtitle="KNOW MORE ABOUT US"
					center={false}
				/>
				<p className="border-l-2 border-greenBtn px-8 py-1 relative lg:-top-4 -top-8">
					We provide happiness by producing a fresh food experience
					for people of all ages.
				</p>
				<p className="lg:mt-6">
					Diversifying the products and services offered to customers
					has seen the introduction of dairy ranges, dry stores,
					in-house fruit and vegetable preparation, high quality
					meats, and chef-designed ready-to-eat menu products. All
					ready-to-eat options are designed and prepared using the
					very best ingredients and are hand-crafted by a team of
					experts with the FreshMeals.
				</p>
				<div className="mt-6 flex items-center">
					<div>
						<h5 className=" md:text-xl font-bold">Jerry Henson </h5>
						<span className="text-sm font-light">
							Shop Director
						</span>
					</div>
					<img
						className="h-9"
						src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/icon-img/author-sign.png"
						alt="sign"
					/>
				</div>
			</div>
		</div>
	);
}

export default IntroSection;
