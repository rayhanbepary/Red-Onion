import React from 'react';
import AllFood from '../../Data/food';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router';
import { FiShoppingCart } from 'react-icons/fi';

const SingleFood = ({cart, addCartHandler, increaseQuantity, decreaseQuantity}) => {

    const {slug} = useParams()
    const singleFood = AllFood.find(food => food.slug === slug)
    const singleCart = cart.find(item => item.slug === singleFood.slug)

    return (
        <>
            <Navbar cart={cart}></Navbar>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="mb-3">{singleFood.name}</h2>
                        <p>{singleFood.description}</p>
                        <div style={{display: 'flex'}}>
                            <span style={{fontSize: '30px', fontWeight: '600'}}>$<span>{singleFood.price}</span></span>
                            <div className="number-spinner">
                                <button onClick={() => decreaseQuantity(singleFood)} className="minus">-</button>
                                <input 
                                    id="currentQuantity" 
                                    type="number" 
                                    className="text-center" 
                                    value={singleCart ? `${singleCart.quantity}` : "1"} 
                                />
                                <button onClick={() => increaseQuantity(singleFood)} className="plus">+</button>
                            </div>
                        </div>
                        <button 
                            className="cart-btn" 
                            onClick={() => addCartHandler(singleFood)}
                        >
                            <FiShoppingCart className="mr-2" /> 
                            Add
                        </button>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <img src={singleFood.img} alt="" width="100%" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SingleFood;