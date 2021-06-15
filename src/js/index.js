//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { PropTypes } from "prop-types";

function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="bigCounter">
				<i className="far fa-clock"></i>
				<div className="four">{props.countFour % 10}</div>
				<div className="three">{props.countThree % 10}</div>
				<div className="two">{props.countTwo % 10}</div>
				<div className="one">{props.countOne % 10}</div>
			</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	countOne: PropTypes.number,
	countTwo: PropTypes.number,
	countThree: PropTypes.number,
	countFour: PropTypes.number
};

let counter = 0;
setInterval(() => {
	const digOne = Math.floor(counter / 1);
	const digTwo = Math.floor(counter / 10);
	const digThree = Math.floor(counter / 100);
	const digFour = Math.floor(counter / 1000);

	counter++;

	ReactDOM.render(
		<SimpleCounter
			countOne={digOne}
			countTwo={digTwo}
			countThree={digThree}
			countFour={digFour}
		/>,
		document.querySelector("#app")
	);
}, 1000);
