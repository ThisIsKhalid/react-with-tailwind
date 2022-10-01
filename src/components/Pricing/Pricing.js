import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, features: [
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Ajaira feature'
        ]},
        {id: 2, name: 'Medium', price: 9.99, features: [
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Ajaira feature'
        ]},
        {id: 3, name: 'Premium', price: 19.99, features: [
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Ajaira feature'
        ]},
    ]

    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white p-6'>Best Deal of the Town</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    pricingOptions.map(pricingOption => <PricingOption
                    key={pricingOption.id}
                    pricingOption={pricingOption}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;