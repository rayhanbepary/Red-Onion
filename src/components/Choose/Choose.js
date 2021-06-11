import React from 'react';
import ChooseData from '../../Data/choose';
import ChooseCard from './ChooseCard';

const Choose = () => {
    return (
        <div className="choose-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="header">Why you choose us</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                </div>
                <div className="row">
                    {
                        ChooseData.map( choose => <ChooseCard key={choose.id} choose={choose} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Choose;