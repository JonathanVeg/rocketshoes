import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from './../../store/modules/cart/actions';
import { ProductList } from './styles';

function Home(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await api.get("products");

            const data = response.data.map(product => ({ ...product, priceFormatted: formatPrice(product.price) }));

            setProducts(data);
        }

        loadData();
    }, []);

    function handleAddProduct(id) {
        const { addToCartRequest } = props;

        addToCartRequest(id);
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} />
                    <strong>{product.title}</strong>

                    <span>{product.priceFormatted}</span>

                    <button type="button" onClick={() => handleAddProduct(product.id)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> {props.quantity[product.id] || 0}
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

const mapStateToProps = state => ({
    quantity: state.cart.reduce((quantity, product) => {
        quantity[product.id] = product.quantity;

        return quantity;
    }, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
