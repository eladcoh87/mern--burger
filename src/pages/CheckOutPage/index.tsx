import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
import './style.scss';

import { Dispatch } from 'redux';
import { BurgerActions, burgerSelector } from 'actions/burger';
import { BurgerProduct } from 'actions/burger/interface';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import { HomePageActions, homePageSelector } from 'actions/redux/homePage';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {
	cart: BurgerProduct[];
	cartSubtotal: number;
}

export class CheckOutPage extends React.Component<OwnProps> {
	render() {
		const { cart, cartSubtotal } = this.props;
		return (
			<div className="checkout-container">
				<div className="left-side-white">
					<div className="left-side-wraper">
						<div className="contact-box">
							<p>contact</p> <p>Already Have Account ?</p>
						</div>
						<div>
							<TextField fullWidth id="outlined-basic" label="enter mail" variant="outlined" />
						</div>
						<div className="ship-box">
							<p>Shipping address</p>
						</div>
						<div>
							<TextField fullWidth id="outlined-basic" label="country/region" variant="outlined" />
						</div>
						<div className="name-box">
							<TextField fullWidth id="outlined-basic" label="firstname" variant="outlined" />{' '}
							<TextField fullWidth id="outlined-basic" label="lastname" variant="outlined" />
						</div>
						<div>
							<TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
						</div>
						<div>
							<TextField fullWidth id="outlined-basic" label="Apartment ,suite,etc" variant="outlined" />
						</div>
						<div className="name-box">
							<TextField fullWidth id="outlined-basic" label="City" variant="outlined" />
							<TextField fullWidth id="outlined-basic" label="State" variant="outlined" />
							<TextField fullWidth id="outlined-basic" label="ZIP code " variant="outlined" />
						</div>
						<div className="name-box">
							<TextField fullWidth id="outlined-basic" label="cardNumber" variant="outlined" />{' '}
							<TextField fullWidth id="outlined-basic" label="CartName" variant="outlined" />
						</div>
						<div className="pay-btn-box">
							<Button variant="contained">PAY</Button>
						</div>
					</div>
				</div>
				<div className="right-side-gray">
					<div className="right-side-wraper">
						<div className="cart-box">
							{cart.map((cartItem) => {
								return (
									<div key={cartItem.id} className="cart-itam-box">
										<div className="img-name-box">
											<img src={cartItem.imageUrl} alt="" />
											<div>
												<p>{cartItem.name}</p>
											</div>
										</div>
										<div> ${cartItem.price}</div>
									</div>
								);
							})}
						</div>
						<div className="info-flex">
							<p>Subtotal</p> <p>${cartSubtotal}</p>
						</div>
						<div className="info-flex">
							<p>Shipping</p> <p>free</p>
						</div>
						<div className="info-flex">
							<p>Estimated taxes</p> <p>no tax</p>
						</div>
						<div className="info-flex">
							<p>Total</p> <p>${cartSubtotal}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	CheckOutPage,
	(state: ApplicationState) => ({
		cart: burgerSelector.cart(state),
		cartSubtotal: burgerSelector.totalCartValue(state),
	}),
	(dispatch: Dispatch) => ({
		getInitProductsSaga: () => dispatch(BurgerActions.getInitProductsSaga()),
	})
);
