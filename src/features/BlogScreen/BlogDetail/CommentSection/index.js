import CommentCard from "@components/Comment";

function CommentSection() {
    return (
			<div className="">
				<h3 className="font-bold text-2xl mb-5 font-raj">02 Comments</h3>
				<CommentCard
					avatar="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/1.jpg"
					name="Adam Smit"
					date="20th May 2020"
					comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione."
					separate
				/>
				<CommentCard
					avatar="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/testimonial/3.jpg"
					name="Opinal Mix"
					date="21th May 2020"
					comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione."
				/>
			</div>
		);
}

export default CommentSection;