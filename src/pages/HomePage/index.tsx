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
// import { HomePageActions, homePageSelector } from 'actions/redux/homePage';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {}

export class HomePage extends React.Component<OwnProps> {
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
	(state: ApplicationState) => {
		return {};
	},
	{}
);
