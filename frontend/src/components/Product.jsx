import React from 'react';
import ProductRating from './ProductRating';
const Product = ({ title, price, description, category, rating, image }) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__content__image'>
          <img src={image} alt={title} />
        </div>
        <div className='card__content__title'>
          <h2>{title}</h2>
        </div>
        <div className='card__content__desc'>
          <p>{description}</p>
          <h4>${price}</h4>
        </div>
        <ProductRating rating={rating.rate} />
      </div>
    </div>
  );
};

export default Product;
