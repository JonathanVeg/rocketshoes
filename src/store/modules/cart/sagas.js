import { toast } from 'react-toastify';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import api from './../../../services/api';
import { addToCartSuccess, updateQuantity } from './actions';

function* addToCart({ id }) {
    const productExists = yield select(state => state.cart.find(p => p.id === id));

    const stock = yield call(api.get, `/stock/${id}`);

    const stockQuantity = stock.data.quantity;

    const currentQuantity = productExists ? productExists.quantity : 0;

    const quantity = currentQuantity + 1;

    if (quantity > stockQuantity) {
        toast.error("Item fora de estoque");

        return;
    }

    if (productExists) {
        yield put(updateQuantity(productExists, quantity));

        return;
    }

    const response = yield call(api.get, `/products/${id}`);

    let data = {
        ...response.data,
    };

    yield put(addToCartSuccess(data));
}

export default all([takeLatest("@cart/ADD_REQUEST", addToCart)]);
