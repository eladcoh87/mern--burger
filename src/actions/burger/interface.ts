import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */

export interface BurgerProduct {
	id: string;
	name: string;
	imageUrl: string;
	description: string;
	price: number;
	qty: number;
}

export interface BurgerState {
	initProducts: BurgerProduct[];
	cart: BurgerProduct[];
}

export enum TypesNames {
	GET_INIT_PRODUCTS_SAGA = 'GET_INIT_PRODUCTS_SAGA',
	SET_INIT_PRODUCTS = 'SET_INIT_PRODUCTS',
	ADD_TO_CART_PRODUCT = 'ADD_TO_CART_PRODUCT',
	REMOVE_FROM_CART_PRODUCT = 'REMOVE_FROM_CART_PRODUCT',
}

export declare function GetInitProductsSagaFunction(): GetInitProductsSagaAction;
export declare function SetInitProductsFunction(productsList: BurgerProduct[]): SetInitProductsAction;
export declare function AddToCartProductFunction(product: BurgerProduct): AddToCartProductAction;
export declare function RemoveFromCartProductFunction(productId: string): RemoveFromCartProductAction;

export interface ActionCreator {
	getInitProductsSaga: typeof GetInitProductsSagaFunction;
	setInitProducts: typeof SetInitProductsFunction;
	addToCartProduct: typeof AddToCartProductFunction;
	removeFromCartProduct: typeof RemoveFromCartProductFunction;
}

export type GetInitProductsSagaAction = Action<TypesNames.GET_INIT_PRODUCTS_SAGA>;

export interface SetInitProductsAction extends Action<TypesNames.SET_INIT_PRODUCTS> {
	productsList: BurgerProduct[];
}

export interface AddToCartProductAction extends Action<TypesNames.ADD_TO_CART_PRODUCT> {
	product: BurgerProduct;
}

export interface RemoveFromCartProductAction extends Action<TypesNames.REMOVE_FROM_CART_PRODUCT> {
	productId: string;
}

/* ------------- Define Any Interfaces ------------- */
export interface ResponseInitProducts {
	_id?: string;
	id: string;
	name: string;
	imageUrl: string;
	description: string;
	price: number;
	qty: number;
}
