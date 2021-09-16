//Shree Ganesha
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
function App() {
  return (
    <>
      <Router>
        <div className='grid-container'>
          <header className='header__row'>
            <div>
              <Link to='/' className='brand'>
                GO<span className='special'>Kart</span>
              </Link>
            </div>
            <div>
              <a href='cart.html'>Cart</a>
              <a href='signin.html'>Sign In</a>
            </div>
          </header>
          <main>
            <Route path='/product/:id' component={ProductScreen}></Route>
            <Route path='/' exact>
              <HomeScreen />
            </Route>
          </main>

          <footer className='row center footer'>All rights reserved</footer>
        </div>
      </Router>
    </>
  );
}

export default App;
