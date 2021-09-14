import React from 'react';
import Product from './Product';
import { useRouteMatch, Link } from 'react-router-dom';

const HomeScreen = ({ data }) => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div className='row center'>
      {data.map((products) => (
        <Link
          key={products.id}
          to={`/products/${products.id}`}
          className='product__links'>
          <Product {...products} />
        </Link>
      ))}
    </div>
  );
};

export default HomeScreen;
