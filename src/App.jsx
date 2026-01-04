import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Filters from './components/Filters';

function App() {
  return (

    <div className='main'>

      <header >
      <h1>Mini E-Commerce</h1>
      </header>

      <main className="container">    
        <div className="main-content">
          <Filters />
          <ProductList />
        </div>

        <aside className="sidebar">
          <Cart />
        </aside>

      </main>

    </div>
  );
}

export default App;
