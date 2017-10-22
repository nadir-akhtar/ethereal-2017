import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products';
import { loadCart } from './home.actions';

class Home extends Component {

  componentWillMount() {
    this.props.loadCart()
  }

  render() {
    return (
        <div className="md-grid">
          <Products cart={this.props.cart}/>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.home.cart,
    visible: state.home.visible
  };
}

export default connect(mapStateToProps, { loadCart })(Home);