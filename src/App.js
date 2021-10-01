import React, { Component } from 'react';
import Header from './components/Header'
import ProductsContainer from './containers/ProductContainers';
import MessContainer from './containers/MessContainer'
import Footer from './components/Footer'
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
