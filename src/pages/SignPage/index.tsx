import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import './style.scss';
import { Dispatch } from 'redux';
import { BurgerActions } from 'actions/burger';
import { GetInitProductsSagaFunction } from 'actions/burger/interface';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import { HomePageActions, homePageSelector } from 'actions/redux/homePage';

export type Props = {
	getInitProductsSaga: typeof GetInitProductsSagaFunction;
};

export interface OwnProps extends Props, LocalizeContextProps {}

export class SignPage extends React.Component<OwnProps> {
	render() {
		return (
			<div className="sign-in-container">
				<div className="center-box">
					<h3>create account</h3>

					<div className="field-box-wraper">
						<div className="field-box">
							<TextField fullWidth id="outlined-basic" label="First name" variant="outlined" />
						</div>
						<div className="field-box">
							<TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
						</div>
						<div className="field-box">
							<TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
						</div>
					</div>
					<div className="btn-box">
						<Button variant="contained">create</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	SignPage,
	() => ({}),
	(dispatch: Dispatch) => ({
		getInitProductsSaga: () => dispatch(BurgerActions.getInitProductsSaga()),
	})
);
