import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
import './style.scss';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { BurgerActions, burgerSelector } from 'actions/burger';
import { BurgerProduct, RemoveFromCartProductFunction } from 'actions/burger/interface';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// import { HomePageActions, homePageSelector } from 'actions/redux/homePage';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {
	removeFromCartProduct: typeof RemoveFromCartProductFunction;
	cart: BurgerProduct[];
	cartSubtotal: number;
}

export class CartPage extends React.Component<OwnProps> {
	render() {
		const { cart, cartSubtotal, removeFromCartProduct } = this.props;
		return (
			<div className="cart-page-container">
				{cart.length === 0 ? (
					<div className="cart-empty-wraper">
						<p>Your Cart Is Empty</p>
						<Button variant="contained">Continue Shopping</Button>
					</div>
				) : (
					<Container className="cart-full-wraper" maxWidth="lg">
						<div className="headline">
							<p>Your Cart</p>{' '}
							<p>
								<Link to="/">Continue Shopping </Link>
							</p>
						</div>
						<div className="type-headline-wraper">
							<div>
								<p>PRODUCT</p>
							</div>
							<div className="price-quantity-total">
								<p>PRICE</p>
								<p>QUANTITY</p>
								<p>TOTAL</p>
							</div>
						</div>
						<hr className="line" />

						<div className="product-list-wraper">
							{cart.map((productCart) => {
								return (
									<div className="product-box" key={productCart.id}>
										<div className="product-img-info-wraper">
											<img src={productCart.imageUrl} alt="" />
											<div className="product-info-box">
												<p className="para-name">{productCart.name}</p>
												<p>${productCart.price}</p>
											</div>
										</div>
										<div className="product-price-qty-wraper">
											<p className="price-para">${productCart.price}</p>
											<div className="product-qty-box">
												{' '}
												<p>{productCart.qty}</p>{' '}
												<IconButton
													onClick={() => removeFromCartProduct(productCart.id)}
													size="small"
													aria-label="delete"
												>
													<DeleteIcon />
												</IconButton>
											</div>
											<div className="total-box">
												<p>${(productCart.qty * productCart.price).toFixed(2)}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<hr className="line" />
						<div className="subtotal-box">
							<p className="subtotal-price">Subtotal: ${cartSubtotal}</p>
							<p>Taxes and shipping calculated at checkout</p>
							<Button variant="outlined">checkout</Button>
						</div>
					</Container>
				)}
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	CartPage,
	(state: ApplicationState) => ({
		cart: burgerSelector.cart(state),
		cartSubtotal: burgerSelector.totalCartValue(state),
	}),
	(dispatch: Dispatch) => ({
		removeFromCartProduct: (productId: string) => dispatch(BurgerActions.removeFromCartProduct(productId)),
	})
);
