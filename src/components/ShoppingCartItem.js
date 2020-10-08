import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext'

const Item = props => {
	const {image, title, price} = props.item;
	const {removeItem} = useContext(CartContext);
	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />


			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button onClick={() => removeItem(props.item)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
