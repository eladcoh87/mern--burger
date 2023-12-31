/* eslint-disable no-underscore-dangle */
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import api from 'requests';
import { BurgerActions } from 'actions/burger';
import { ResponseInitProducts } from 'actions/burger/interface';

export function* getInitProductsSaga() {
	const response: AxiosResponse<ResponseInitProducts[]> = yield call(api.getInitProductsFunc);
	const newList = response.data.map((product) => {
		const newProdoctObject = {
			...product,
		};
		newProdoctObject.id = newProdoctObject._id || 'genericid';
		delete newProdoctObject._id;
		newProdoctObject.qty = 0;
		newProdoctObject.price = Number(newProdoctObject.price.toFixed(2));
		return newProdoctObject;
	});

	yield put(BurgerActions.setInitProducts(newList));
}
