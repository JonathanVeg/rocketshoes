import React from 'react';
import { MdAddCircleOutline, MdDelete, MdRemoveCircleOutline } from 'react-icons/md';
import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart, total, dispatch }) {
    function handleDeleteProduct(product) {
        dispatch({
            type: "@cart/REMOVE",
            product,
        });
    }

    function handleAddProduct(id) {
        dispatch({
            type: "@cart/ADD_REQUEST",
            id,
        });
    }

    function handleRemoveProduct(product) {
        dispatch({
            type: "@cart/REMOVE_ONE",
            product,
        });
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <th />
                    <th>Produto</th>
                    <th>Qtd</th>
                    <th>Subtotal</th>
                    <th />
                </thead>
                {cart.map(product => {
                    return (
                        <tbody>
                            <td>
                                <img src={product.image} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{formatPrice(product.price)}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button" onClick={() => handleRemoveProduct(product)}>
                                        <MdRemoveCircleOutline size={20} color="#7159C1" />
                                    </button>
                                    <input type="number" readOnly value={product.quantity || 1} />
                                    <button type="button" onClick={() => handleAddProduct(product.id)}>
                                        <MdAddCircleOutline size={20} color="#7159C1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <string>{product.subtotal}</string>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDeleteProduct(product)}>
                                    <MdDelete size={20} color="#7159C1" />
                                </button>
                            </td>
                        </tbody>
                    );
                })}
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * (product.quantity || 1)),
    })),
    total: formatPrice(state.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)),
});

export default connect(mapStateToProps)(Cart);
