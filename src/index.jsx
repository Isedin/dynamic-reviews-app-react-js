import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
export const Testimonial = (props) => {
	// store the title prop in a const named title
	const title = props.title;
	// Store the author prop in a constant named author
	const author = props.author;
	// Store the date prop in a constant named date
	const date = props.date;
	// Store the stars prop in a constant named stars
	const stars = props.stars;
	// Store the content prop in a constant named content
	const content = props.content;
	return (
		// within the <div> element inside of return(), add an <h2> element containing the title constant.
		<div className="card">
			{/* add an <h5> element containing the author */}
			<h2>{title}</h2>
			<h5>
				Submitted by {author} on {date}
			</h5>
			<h5>
				{stars}/{stars} Stars
			</h5>
			<p>{content}</p>
		</div>
	);
};

export const App = () => {
	return (
		<div>
			<Testimonial
				title="Great atmosphere!"
				author="Sheila S."
				date="11/10/20"
				stars={4}
				content="Great food, wait staff, and ambience. We'll be returning!"
			/>
			<Testimonial
				title="Loved the Apps!"
				author="Kim Z."
				date="10/15/20"
				stars={3}
				content="The appetizers were fantastic, but the overall menu could be expanded."
			/>
      <Testimonial
      title="Gutes Essen!"
      author="Argent"
      date="09/09/24"
      stars={4}
      content="Gutes Essen, waren zufrieden."
      />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
