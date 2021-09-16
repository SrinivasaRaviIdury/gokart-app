import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
// import data from '../data';
const URL = 'https://fakestoreapi.com/products';
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setIsLoading(false);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isloading ? (
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
