import React from 'react';

const CartCard = ({item, increaseQuantity, decreaseQuantity }) => {
    return (
        <div className="cart-card">
            <img src={item.img} width="20%" alt="" />
            <div className="item-details">
                <h6>{item.name}</h6>
                <h5>${item.price * item.quantity}</h5>
            </div>
            <div className="number-spinner-cart">
                <button onClick={() => decreaseQuantity(item)} className="minus">-</button>
                <input 
                    id="currentQuantity" 
                    type="number" 
                    className="text-center" 
                    value={item ? `${item.quantity}` : "1"} 
                />
                <button onClick={() => increaseQuantity(item)} className="plus">+</button>
            </div>
        </div>
    );
};

export default CartCard;