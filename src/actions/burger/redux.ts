import { createDraft, Draft } from 'immer';
import { createReducerCase } from '@base/features/base-decorator';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from 'actions';
import {
	BurgerState,
	TypesNames,
	ActionCreator,
	SetInitProductsAction,
	AddToCartProductAction,
	RemoveFromCartProductAction,
} from './interface';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getInitProductsSaga: [], // handle by saga
	setInitProducts: ['productsList'], // handle by reducer
	addToCartProduct: ['product'], // handle by reducer
	removeFromCartProduct: ['productId'], // handle by reducer
});

export const BurgerTypes = TypesNames;
export const BurgerActions = Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = createDraft<BurgerState>({
	initProducts: [],
	cart: [],
	totalCartValue: 0,
	totalCartProducts: 0,
});

/* ------------- Selectors ------------- */

export const burgerSelector = {
	initProducts: (state: ApplicationState) => state.burger?.initProducts,
	cart: (state: ApplicationState) => state.burger?.cart,
	totalCartValue: (state: ApplicationState) => state.burger?.totalCartValue,
	totalCartProducts: (state: ApplicationState) => state.burger?.totalCartProducts,
};

/* ------------- Reducers ------------- */

const setInitProductsRedcuer = (draft: Draft<BurgerState>, action: SetInitProductsAction) => {
	const { productsList } = action;
	draft.initProducts = productsList;
};

const addToCartReducer = (draft: Draft<BurgerState>, action: AddToCartProductAction) => {
	const { product } = action;
	const mutableObj = { ...product };
	const productInCartIndex = draft.cart.findIndex((productCart) => productCart.id === mutableObj.id);

	if (productInCartIndex < 0) {
		mutableObj.qty = 1;
		draft.cart.push(mutableObj);
	} else {
		draft.cart[productInCartIndex].qty += 1;
	}
	draft.totalCartValue += mutableObj.price;
	draft.totalCartProducts += 1;
};

const removeFromCartReducer = (draft: Draft<BurgerState>, action: RemoveFromCartProductAction) => {
	const { productId } = action;
	const productInCartIndex = draft.cart.findIndex((productCart) => productCart.id === productId);
	const removedProduct = draft.cart.splice(productInCartIndex, 1);
	draft.totalCartValue -= removedProduct[0].price * removedProduct[0].qty;
	draft.totalCartProducts -= removedProduct[0].qty;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<any, any>(INITIAL_STATE, {
	[TypesNames.SET_INIT_PRODUCTS]: createReducerCase(setInitProductsRedcuer),
	[TypesNames.ADD_TO_CART_PRODUCT]: createReducerCase(addToCartReducer),
	[TypesNames.REMOVE_FROM_CART_PRODUCT]: createReducerCase(removeFromCartReducer),
});
