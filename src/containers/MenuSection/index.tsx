import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuCard from 'common-components/business/MenuCard';

import './style.scss';
// import { MenuSectionActions, menuSectionSelector } from 'actions/redux/menuSection';

export type Props = {};

interface State {
	foodNameState: string;
}

export interface OwnProps extends Props, LocalizeContextProps {}

export class MenuSection extends React.Component<OwnProps, State> {
	constructor(props: OwnProps) {
		super(props);
		this.state = {
			foodNameState: 'BURGER',
		};
	}
	menuColorBtn(event: React.MouseEvent<HTMLButtonElement>, foodName: string) {
		console.log(event.target);
		this.setState({ foodNameState: foodName });
	}
	render() {
		const { foodNameState } = this.state;
		return (
			<Container className="menu-section-container" maxWidth="xl">
				<div className="headline-wraper">
					<h2>OUR MENU</h2>
				</div>
				<div className="btns-wraper">
					<div className="btns-center">
						<Button
							onClick={(event) => this.menuColorBtn(event, 'BURGER')}
							className={`food-btn ${foodNameState === 'BURGER' ? 'btn-change-color' : ''}`}
							variant="outlined"
						>
							BURGER
						</Button>
						<Button
							onClick={(event) => this.menuColorBtn(event, 'BURGER-XL')}
							className={`food-btn ${foodNameState === 'BURGER-XL' ? 'btn-change-color' : ''}`}
							variant="outlined"
						>
							BURGER-XL
						</Button>
						<Button
							onClick={(event) => this.menuColorBtn(event, 'BURGER-XXL')}
							className={`food-btn ${foodNameState === 'BURGER-XXL' ? 'btn-change-color' : ''}`}
							variant="outlined"
						>
							BURGER-XXL
						</Button>
					</div>
				</div>

				<div className="menu-cards-conatiner">
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
				</div>
			</Container>
		);
	}
}

export default baseConnect<any, any, Props>(
	MenuSection,
	(state: ApplicationState) => {
		return {};
	},
	{}
);
