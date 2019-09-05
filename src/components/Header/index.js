import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { Cart, Container } from './styles';

function Header(props) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} />
            </Link>

            <Cart to="cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{props.cart.reduce((acc, cur) => acc + cur.quantity, 0)} itens</span>
                </div>

                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}

export default connect(({ cart }) => ({
    cart,
}))(Header);
