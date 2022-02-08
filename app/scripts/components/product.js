import React from 'react';

const Product = props => {

    return (
        <div className='product'>
            <img src={props.product.picture} alt={props.product.name} />
            <div className='product-info'>
                <div>
                    <h2>{props.product.name}</h2>
                    <h3>Price ${props.product.price}</h3>
                </div>
                <div className='product-description'>
                    <h3>Description</h3>
                    <p>{props.product.about}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;