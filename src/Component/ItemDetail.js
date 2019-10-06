import React from 'react';
import '../pages/css/Product.css';

const ItemDetail = (props) => {
	return (
		<div id="main">
			<div id="p_cont15">
				{/* <h1 >{TreeList[check.state.selected].state.name}</h1> */}
				<h1>{props.location.name}</h1>
			</div>

			<div id="cont5">
				{/* <img id="cont24" src={TreeList[check.state.selected].state.img} alt=""></img>   */}
				<img id="cont24" src={props.location.img} alt="" />
				<h2 id="p_cont18">
					Description:
					{/* <h3 id="cont6">{Description_List[check.state.selected].state.Description}</h3> */}
					<h3 id="cont6">{props.location.desc}</h3>
					<div id="cont19">
						<div id="cont8">
							<h3> Tree Type: {props.location.type}</h3>
							<br />
							<h3>Tree Height: {props.location.height}</h3>
							<br />
							<h3>Maintain: {props.location.maintain}</h3>
							<br />
							<h3>Soil: {props.location.soil}</h3>
							<br />
							<h3>Sun: {props.location.sun}</h3>
							<br />
						</div>
						<div id="cont10">
							<h1>Total Price: $ {props.location.price}</h1>
							<button
								onClick={() => {
									console.log(props);
								}}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</h2>
			</div>
		</div>
	);
};
export default ItemDetail;
