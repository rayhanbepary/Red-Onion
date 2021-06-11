import React from 'react';
import DinnerData from '../../Data/dinner';
import FoodCard from './FoodCard';

const Dinner = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    DinnerData.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default Dinner;