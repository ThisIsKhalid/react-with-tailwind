import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = ({pricingOption}) => {
    const {features} = pricingOption;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h2>
                <span className='text-6xl font-bold text-white'>{pricingOption.price}</span>
                <span className='text-gray-100 text-2xl'>/mon</span>
                </h2>
                <p className='text-3xl mt-2'>{pricingOption.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-green-500 w-full rounded-md py-2 mt-2 font-semibold text-lg text-white hover:bg-orange-500 duration-200 ease-linear'>Buy Now</button>
        </div>
    );
};

export default PricingOption;