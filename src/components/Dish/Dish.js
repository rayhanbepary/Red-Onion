import React, { Component } from 'react';
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import Lunch from './Lunch';

class Dish extends Component {

    state = {
        whichTime: "Lunch"
    }

    handleClick = (e) => {
        this.setState({
            whichTime: e.target.innerText
        })
    }

    render() {

        const { whichTime } = this.state;

        switch (whichTime) {
            case 'Breakfast':
                return (
                    <>
                        <div className="food-btn">
                            <button onClick={this.handleClick}>Breakfast</button>
                            <button onClick={this.handleClick}>Lunch</button>
                            <button onClick={this.handleClick}>Dinner</button>
                        </div>
                        <Breakfast></Breakfast>
                    </>
                );
                break;
            case 'Lunch':
                return (
                    <>
                        <div className="food-btn">
                            <button onClick={this.handleClick}>Breakfast</button>
                            <button onClick={this.handleClick}>Lunch</button>
                            <button onClick={this.handleClick}>Dinner</button>
                        </div>
                        <Lunch></Lunch>
                    </>
                );
                break;
            case 'Dinner':
                return (
                    <>
                        <div className="food-btn">
                            <button onClick={this.handleClick}>Breakfast</button>
                            <button onClick={this.handleClick}>Lunch</button>
                            <button onClick={this.handleClick}>Dinner</button>
                        </div>
                        <Dinner></Dinner>
                    </>
                );
                break;
            default:
                return (
                    <h1 style={{marginBottom: '100px', textAlign: 'center'}}>No dish is available right now</h1>
                );
                break;
        }
    }
}

export default Dish;