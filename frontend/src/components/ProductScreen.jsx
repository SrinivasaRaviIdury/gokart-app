import React from 'react';
import { Link } from 'react-router-dom';
import ProductRating from './ProductRating';

const ProductScreen = (props) => {
  const data = props.data;
  //   console.log(data.find((x) => x.id == props.match.params.id));
  const product = data.find((x) => x.id === Number(props.match.params.id));
  console.log(product);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to='/'>Back To Result</Link>
      <div className='row-product top'>
        <div className='col-2'>
          <img className='large' src={product.image} alt={product.title} />
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1>{product.title}</h1>
            </li>
            <li>
              <ProductRating rating={product.rating.rate} />
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>Price</div>
                  <div className='price'>${product.price}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Status</div>
                  <div>
                    {product?.countInStock > 0 ? (
                      <span className='success'></span>
                    ) : (
                      <span className='error'>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className='primary block'>Add To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
