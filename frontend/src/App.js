//Shree Ganesha

import { useEffect, useState } from 'react';
import Cards from './Cards';
const URL = 'https://fakestoreapi.com/products';

function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className='grid-container'>
        <header className='header__row'>
          <div>
            <a href='index.html' className='brand'>
              GO<span className='special'>Kart</span>
            </a>
          </div>
          <div>
            <a href='cart.html'>Cart</a>
            <a href='signin.html'>Sign In</a>
          </div>
        </header>
        <main>
          {isloading ? (
            <h1>Loading...</h1>
          ) : (
            <div className='row center'>
              {data.map((cards) => (
                <Cards key={cards.id} {...cards} />
              ))}
            </div>
          )}
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </>
  );
}

export default App;
