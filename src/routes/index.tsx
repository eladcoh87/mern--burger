import * as React from 'react';
import { Switch } from 'react-router-dom';
import FlowManagerConfig from 'public/config/flow-manager/types.json';
import Route from './PageContainer';

/* -------------- Pages --------------- */
import App from '../App';
import ErrorPage from 'pages/ErrorPage';
import Checkout from 'pages/Checkout';
import FormExample from 'pages/FormExample';

/* -------------- Routes Paths --------------- */
import RoutesPath from './RoutesPath';
import HomePage from 'pages/HomePage';
import CartPage from 'pages/CartPage';
import CheckOutPage from 'pages/CheckOutPage';
import SignPage from 'pages/SignPage';

const { stepTypes } = FlowManagerConfig;

export default (
	<App>
		<Switch>
			<Route exact path={RoutesPath.CHECKOUT} step={stepTypes.CHECKOUT.name} component={Checkout} />
			<Route exact path={RoutesPath.FORM_EXAMPLE} component={() => <FormExample form="FormExample" />} />
			<Route
				exact
				path={RoutesPath.CHECKOUT_SAMSUNG}
				step={stepTypes.CHECKOUT_SAMSUNG.name}
				component={() => <h1>Checkout for Samsung</h1>}
			/>
			<Route
				exact
				path={RoutesPath.CHECKOUT_XIAOMI}
				step={stepTypes.CHECKOUT_XIAOMI.name}
				component={() => <h1>Checkout for Xiaomi</h1>}
			/>
			<Route exact path={RoutesPath.ERROR_PAGE} component={() => <ErrorPage />} />
			<Route path={RoutesPath.CART_PAGE} component={CartPage} />
			<Route path={RoutesPath.SIGN_PAGE} component={SignPage} />

			<Route path={RoutesPath.CHECKOUT_PAGE} component={CheckOutPage} />

			<Route path={RoutesPath.ROOT} step={stepTypes.DEVICE_GALLERY.name} component={HomePage} />
		</Switch>
	</App>
);
