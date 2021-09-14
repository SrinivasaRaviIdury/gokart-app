//Shree Ganesha
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
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
      <Router>
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
            <Route path='/product/:id' exact>
              <ProductScreen />
            </Route>
            <Route path='/' exact>
              {isloading ? <h1>Loading...</h1> : <HomeScreen data={data} />}
            </Route>
          </main>

          <footer className='row center'>All rights reserved</footer>
        </div>
      </Router>
    </>
  );
}

export default App;
