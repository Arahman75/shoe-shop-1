import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div className="review-container">
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-details" title={name}>
                    <p>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price : <span className='orange-color'>{price}</span></p>
                    <p>Shipping Charge : <span className='orange-color'>{shipping}</span></p>
                    <p>Quantity : <small>{quantity}</small></p>

                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='remove-button'>
                        <FontAwesomeIcon className='remove-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;