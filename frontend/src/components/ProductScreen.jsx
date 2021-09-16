import React from 'react';
import { Link } from 'react-router-dom';
import ProductRating from './ProductRating';

const ProductScreen = (props) => {
  const data = props.data;
  //   console.log(data.find((x) => x.id == props.match.params.id));
  const product = data.find((x) => x.id === Number(props.match.params.id));
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div className='productscreen__main'>
      <Link to='/'>Back To Result</Link>
      <div className='productscreen'>
        <div className='productscreen__col-2'>
          <img
            className='productscreen__image'
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1 className='productscreen__title'>{product.title}</h1>
            </li>
            <li>
              <ProductRating rating={product.rating.rate} />
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description:
              <p className='productscreen__description'>
                {product.description}
              </p>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='productscreen__price_stock'>
            <div className='row__price_stock'>
              <p>Price</p>
              <h3 className='price'>${product.price}</h3>
            </div>
            <div className='row__price_stock'>
              <p>Status</p>
              <h3>
                {Number(product?.rating.count) > 0 ? (
                  <span className='success'>In Stock</span>
                ) : (
                  <span className='error'>Unavailable</span>
                )}
              </h3>
            </div>
            <button className='primary block'>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
