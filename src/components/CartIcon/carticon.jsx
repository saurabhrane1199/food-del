import React from 'react';
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class CartIcon extends React.Component {

	render() {
		let cartLink = "";
		let itemsCount = this.props.currentCart;

		return (
			<Link to="/cart">
				<div className="cartIcon">
					<i className="fa fa-shopping-cart" aria-hidden="true"></i>
					{itemsCount > 0 &&
						<div className="cartBadge">
							{itemsCount}
						</div>
					}
				</div>
			</Link>
		);
	}
}

const mapStateToProps = ({cart}) => ({
	currentCart : cart
})

export default connect(mapStateToProps)(CartIcon);
