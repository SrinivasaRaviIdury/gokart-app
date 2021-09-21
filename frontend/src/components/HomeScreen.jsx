import React, { useEffect } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
// import data from '../data';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => dispatch(listProducts()), [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div className='row center'>
          {products.map((products) => (
            <Link
              key={products.id}
              to={`/product/${products.id}`}
              className='product__links'>
              <Product {...products} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
