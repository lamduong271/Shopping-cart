import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import MessageContainer from "./containers/MessageContainer";

import Footer from "./components/Footer";
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
class App extends Component {
  render() {
    return (
      <div>
        {/* Header  */}
        <Header/>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                <ProductsContainer/>
                {/* <!-- Message --> */}
                <MessageContainer/>
                {/* <!-- Cart --> */}
                <CartContainer/>
            </div>
        </main>
        {/* <!-- Footer --> */}
       <Footer/>
    </div>
    );
  }
}

export default App;
