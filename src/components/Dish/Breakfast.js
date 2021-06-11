import React from 'react';
import FoodCard from './FoodCard';
import BreakfastData from '../../Data/breakfast';

const Breakfast = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    BreakfastData.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default Breakfast;