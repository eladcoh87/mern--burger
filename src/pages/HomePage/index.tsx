import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
import './style.scss';
import HeroSection from 'containers/HeroSection';
import MenuSection from 'containers/MenuSection';
import SecoundHeroImage from 'common-components/business/SecoundHeroImage';
import CustomerRecomended from 'common-components/business/CustomerRecomended';
import LastHeroSection from 'common-components/business/LastHeroSection';
import { Dispatch } from 'redux';
import { BurgerActions, burgerSelector } from 'actions/burger';
import { GetInitProductsSagaFunction } from 'actions/burger/interface';
// import { HomePageActions, homePageSelector } from 'actions/redux/homePage';

export type Props = {
	getInitProductsSaga: typeof GetInitProductsSagaFunction;
};

export interface OwnProps extends Props, LocalizeContextProps {}

export class HomePage extends React.Component<OwnProps> {
	componentDidMount(): void {
		console.log('didmount');
		const { getInitProductsSaga } = this.props;
		getInitProductsSaga();
	}
	render() {
		return (
			<div>
				<HeroSection />
				<MenuSection />
				<SecoundHeroImage />
				<CustomerRecomended />
				<LastHeroSection />
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	HomePage,
	(state: ApplicationState) => ({
		initProducts: burgerSelector.initProducts(state),
	}),
	(dispatch: Dispatch) => ({
		getInitProductsSaga: () => dispatch(BurgerActions.getInitProductsSaga()),
	})
);
