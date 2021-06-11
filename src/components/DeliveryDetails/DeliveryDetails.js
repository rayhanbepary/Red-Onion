import React, { Component } from 'react';
import CartCard from './CartCard';
import Form from './Form';

class DeliveryDetails extends Component {

    state = {
        road: '',
        flat: '',
        businessName: '',
        deliveryInstructor: '',
        toWhere: '',
        orderedItems: [this.props.cart],
        subTotal: '',
        tax: '',
        deliveryFee: '',
        total: ''
    }

    // change handler
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // submit handler
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        const subTotal = this.props.cart.reduce((total,currentPrice) => total + currentPrice.price * currentPrice.quantity || 1 ,0 );
        let tax = subTotal / 10;

        let deliveryFee = 12.99;
        if(subTotal === 0){
            deliveryFee = 0;
        }else if(subTotal > 1000){
            deliveryFee = 0;
        }else if(subTotal > 400){
            deliveryFee = 8.95;
        }
        const grandTotal = (subTotal + deliveryFee + tax);

        // formate number
        const formateNum = num => {
            const precision = num.toFixed(2);
            return Number(precision);
        }


        return (
            <div className="container mt-5 mb-5">
                <form onSubmit={this.submitHandler}>
                    <div className="row">
                        <div className="col-md-4">
                            <Form changeHandler={this.changeHandler}></Form>
                        </div>
                        <div className="col-md-6 ml-auto">
                            <span>From <span style={{fontWeight: '600'}}>Gulshan Plaza Restaura GPR</span></span>
                            <br />
                            <span>Arriving in 20-30 min</span>
                            <p className="mt-1">{this.state.road}</p>
                            <div className="mt-4">
                                {
                                    this.props.cart.map(item => 
                                    <CartCard 
                                        key={item.id} 
                                        item={item}
                                        increaseQuantity={this.props.increaseQuantity}
                                        decreaseQuantity={this.props.decreaseQuantity}
                                    ></CartCard>)
                                }
                            </div>

                            <div className="total-cost">
                                <div>
                                    <h6>Subtotal: </h6>
                                    <h6>Tax:</h6>
                                    <h6>Delivery fee:</h6>
                                    <h5>Total:</h5>
                                </div>

                                <div className="status ml-auto">
                                    <h6>$ <span id="subTotalPrice">{formateNum(subTotal)}</span> </h6>
                                    <h6>${formateNum(tax)}</h6>
                                    <h6>${deliveryFee}</h6>
                                    <h5>$ <span id="total">{formateNum(grandTotal)}</span></h5>
                                </div>
                            </div>
                            <button className="place-order" type="submit" >Place Order</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default DeliveryDetails;