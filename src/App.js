import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import SingleFood from './pages/SingleFood/SingleFood';

class App extends Component {

  state = {
    cart: []
  }

  // add to cart handler
  addCartHandler = (food) => {
    const { cart } = this.state;

    const sameFood = cart.find(item => item.slug === food.slug);
    let newCart;
    if(sameFood){
        const others = cart.filter(item => item.slug !== food.slug);
        newCart = [...others, sameFood];
    }else{
        food.quantity = 1;
        newCart = [...cart, food];
    }
    this.setState({cart: newCart})
  }

  // increase quantity
  increaseQuantity = (food) => {
    const { cart } = this.state;
    if (cart.length > 0) {
      const sameFood = cart.find(item => item.slug === food.slug);
      let count = 1;
      let newCart;
      if(sameFood){
        count = sameFood.quantity + 1;
        sameFood.quantity = count;
        const others = cart.filter(item => item.slug !== food.slug);
        newCart = [...others, sameFood];
      }
      this.setState({cart: newCart})
    }
  }

  // decrease quantity
  decreaseQuantity = (food) => {
    const { cart } = this.state;
    if (cart.length > 0) {
      const sameFood = cart.find(item => item.slug === food.slug);
      let count = 1;
      let newCart;
      if(sameFood){
        count = sameFood.quantity - 1;
        if(count > 0) {
          sameFood.quantity = count;
        }
        const others = cart.filter(item => item.slug !== food.slug);
        newCart = [...others, sameFood];
      }
      this.setState({cart: newCart})
    }
  }

  render() {

    const { cart } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/" exact>
            <Home cart={cart} ></Home>
          </Route>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/food/:slug" exact>
            <SingleFood 
              cart={cart} 
              addCartHandler={this.addCartHandler} 
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity} 
            >
            </SingleFood>
          </Route>
          <Route path="/cart" exact>
            <Cart 
              cart={cart} 
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity} 
            ></Cart>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;