import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const ChooseCard = ({choose}) => {
    return (
        <div className="col-md-4">
            <div className="choose-card">
                <img src={choose.img} alt="card" width="100%" className="card-img" />
                <div className="card-content">
                    <img src={choose.icon} alt="card icon" className="card-icon" />
                    <span className="card-title">{choose.title}</span>
                    <p className="card-description">{choose.description}</p>
                    <span className="see-more">See more <BsArrowRightShort className="seeMore-icon" /></span>
                </div>
            </div>
        </div>
    );
};

export default ChooseCard;