import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import DeliveryDetails from '../../components/DeliveryDetails/DeliveryDetails';

class Cart extends Component {
    render() {
        const { cart } = this.props;
        return (
            <>
                <Navbar cart={cart}></Navbar>
                <DeliveryDetails 
                    cart={cart}
                    increaseQuantity={this.props.increaseQuantity}
                    decreaseQuantity={this.props.decreaseQuantity}
                ></DeliveryDetails>
                <Footer></Footer>
            </>
        );
    }
}

export default Cart;