/* eslint-disable implicit-arrow-linebreak */
/**
 * Here you add all the apis urls defenition
 */

import request from '@base/features/base-api';
import { AxiosResponse } from 'axios';
import { config } from 'config';

export interface Api {
	getDevices: () => Promise<AxiosResponse>;
	getInitProductsFunc: () => Promise<AxiosResponse>;
}

export const createApi = (baseURL = config.ROOT_SERVER_URL): Api => ({
	getDevices: () =>
		request.call({
			baseURL: 'http://6ew7g.mocklab.io/' || baseURL,
			method: 'get',
			url: '/getlatestWithCustomResponseCode',
		}),
	getInitProductsFunc: () =>
		request.call({
			baseURL: 'https://burger-express-n0ao82wep-eladcoh87.vercel.app/api/products/allproducts' || baseURL,
			method: 'get',
		}),
});

export default createApi();
