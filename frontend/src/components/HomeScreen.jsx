import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
// import data from '../data';

const HomeScreen = ({ data }) => {
  return (
    <div className='row center'>
      {data.map((products) => (
        <Link
          key={products.id}
          to={`/product/${products.id}`}
          className='product__links'>
          <Product {...products} />
        </Link>
      ))}
    </div>
  );
};

export default HomeScreen;
