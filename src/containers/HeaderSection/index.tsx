import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
// import Container from '@mui/material/Container';
import './style.scss';
import NavLinks from 'common-components/business/NavLinks';
import FoodStripIcons from 'common-components/business/FoodStripIcons';
import { burgerSelector, BurgerActions } from 'actions/burger';
import { BurgerProduct, RemoveFromCartProductFunction } from 'actions/burger/interface';
import { Dispatch } from 'redux';
// import { HeaderSectionActions, headerSectionSelector } from 'actions/redux/headerSection';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {
	cart: BurgerProduct[];
	totalCartProducts: number;
	totalCartValue: number;
	removeFromCartProduct: typeof RemoveFromCartProductFunction;
}

export class HeaderSection extends React.Component<OwnProps> {
	render() {
		const { cart, removeFromCartProduct, totalCartProducts, totalCartValue } = this.props;
		return (
			<div className="header-container">
				<NavLinks
					totalCartProducts={totalCartProducts}
					removeFromCartProduct={(productId) => removeFromCartProduct(productId)}
					cart={cart}
					totalCartValue={totalCartValue}
				/>
				<FoodStripIcons />
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	HeaderSection,
	(state: ApplicationState) => ({
		cart: burgerSelector.cart(state),
		totalCartProducts: burgerSelector.totalCartProducts(state),
		totalCartValue: burgerSelector.totalCartValue(state),
	}),
	(dispatch: Dispatch) => ({
		removeFromCartProduct: (productId: string) => dispatch(BurgerActions.removeFromCartProduct(productId)),
	})
);
