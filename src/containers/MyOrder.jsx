import React, {useState,useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';

import flechitas from '@icons/flechita.svg';


const MyOrder = () => {
	const {state}= useContext(AppContext);
	const [toggleOrders, setToggleOrders]= useState(false);


	const sumTotal =()=>{
		const reducer = (accumulator, currentValue)=>accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}


	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechitas} alt="arrow"  onClick={()=>setToggleOrders(!toggleOrders)}/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
			<div className="my-order-product-item">
				{state.cart.map(product=>(
					<OrderItem product ={product} key={`orderItem-${product.id}`} />
				))}
			</div>	
			
					<div className="order">
						<p>
						<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button className="primary-button">
					Checkout
					</button>
			
			</div>
			{toggleOrders && <MyOrder />}

		</aside>
	);
}

export default MyOrder;
