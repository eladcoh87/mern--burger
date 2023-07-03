import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
// import Container from '@mui/material/Container';
import './style.scss';
import NavLinks from 'common-components/business/NavLinks';
import FoodStripIcons from 'common-components/business/FoodStripIcons';
// import { HeaderSectionActions, headerSectionSelector } from 'actions/redux/headerSection';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {}

export class HeaderSection extends React.Component<OwnProps> {
	render() {
		return (
			<div className="header-container">
				<NavLinks />
				<FoodStripIcons />
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	HeaderSection,
	(state: ApplicationState) => {
		return {};
	},
	{}
);
