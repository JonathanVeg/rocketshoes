import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case "@cart/UPDATE_QUANTITY":
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);

                if (productIndex >= 0) {
                    draft[productIndex].quantity = action.quantity;
                }
            });

        case "@cart/ADD_SUCCESS":
            return produce(state, draft => {
                draft.push({ ...action.product, quantity: 1 });
            });

        case "@cart/REMOVE_ONE":
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);

                if (productIndex >= 0) {
                    draft[productIndex].quantity -= 1;

                    if (draft[productIndex].quantity <= 0) {
                        draft.splice(productIndex, 1);
                    }
                }
            });
        case "@cart/REMOVE":
            return [...state.filter(it => it.id !== action.product.id)];
        default:
            return state;
    }
}
