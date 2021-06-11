import React from 'react';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="display-table">
                            <div className="table-cell">
                                <h1 className="text-center hero-title">Best food waiting for your belly</h1>
                                <div className="col-md-6 offset-md-3">
                                    <input type="search" className="search" placeholder="Search food items" />
                                    <button className="search-btn">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;