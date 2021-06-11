import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
    return (
        <div className="col-md-4">
            <Link className="food-card-link" to={`/food/${food.slug}`}>
                <div className="food-card">
                    <img src={food.img} alt="card" className="food-img" />
                    <div className="foodCard-content">
                        <h6 className="food-name">{food.name}</h6>
                        <p className="food-subTitle">{food.subTitle}</p>
                        <h6 className="food-price">${food.price}</h6>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FoodCard;