import React from 'react';
import FoodCard from './FoodCard';
import LunchData from '../../Data/lunch';

const Lunch = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    LunchData.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default Lunch;