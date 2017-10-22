import React, { Component } from 'react';
import {routes as scenes} from '../routes';
import {Toolbar, Button} from 'react-md';
import './App.css';

class App extends Component {
  render() {
    const nav = <Button key="home" href="home" icon>home</Button>;
    const actions = [
      <Button key="cart" href="/checkout" icon>shopping_cart</Button>,
    ];
    return (
      <div className="App">
        <main id="outer-container">
          <Toolbar
            colored
            title="Humanitas Marketplace"
            className="md-paper md-paper--2"
            nav={nav}
            actions={actions}
          />
          {scenes}
        </main>
      </div>
    );
  }
}

export default App;