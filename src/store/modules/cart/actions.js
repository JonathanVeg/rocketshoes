export function addToCartRequest(id) {
    return {
        type: "@cart/ADD_REQUEST",
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: "@cart/ADD_SUCCESS",
        product,
    };
}

export function updateQuantity(product, quantity) {
    return {
        type: "@cart/UPDATE_QUANTITY",
        product,
        quantity,
    };
}
