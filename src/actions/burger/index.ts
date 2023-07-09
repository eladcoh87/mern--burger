import { all, fork, takeLatest } from 'redux-saga/effects';
import { createSaga } from '@base/features/base-decorator';
import * as Sagas from 'actions/burger/sagas';
import { BurgerTypes } from 'actions/burger';

/* ------------- Export Redux ------------- */
export * from 'actions/burger/redux';

/* ------------- Export Sagas ------------- */
function* getInitProductsWatcherSaga() {
	yield takeLatest(BurgerTypes.GET_INIT_PRODUCTS_SAGA, createSaga(Sagas.getInitProductsSaga));
}

// TODO: Do Not Forget to Add your new saga to index file
export function* burgerSaga() {
	yield all([fork(getInitProductsWatcherSaga)]);
}
