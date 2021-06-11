import React from 'react';

const Form = ({changeHandler}) => {
    return (
        <>
           <h5 style={{borderBottom: '1.5px solid #222', paddingBottom: '10px'}}>Edit Delivery Details</h5>
            <div className="delivery-details">
                <input 
                    type="text" 
                    className="mt-3"
                    placeholder="Deliver to door" 
                    name="toWhere"
                    onChange={changeHandler}
                />
                <input 
                    type="text" 
                    placeholder="Road No"
                    name="road" 
                    onChange={changeHandler}
                />
                <input 
                    type="text" 
                    placeholder="Flat, suite or floor" 
                    name="flat"
                    onChange={changeHandler}
                />
                <input 
                    type="text" 
                    placeholder="Business Name" 
                    name="businessName"
                    onChange={changeHandler}
                />
                <input 
                    type="text" 
                    placeholder="Add delivery instructor" 
                    name="deliveryInstructor"
                    onChange={changeHandler}
                />
                <button>Save & Continue</button>
            </div> 
        </>
    );
};

export default Form;