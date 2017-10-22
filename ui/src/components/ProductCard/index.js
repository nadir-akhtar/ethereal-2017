import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../Home/home.actions';
import { Card, CardTitle, CardText, Media, CardActions, Button } from 'react-md';

class ProductCard extends Component {

    add = () => {
        this.props.addToCart(this.props.name, this.props.price, this.props.image, this.props.desc);
    }

    render() {
        return (
            <Card style={{margin: '8px'}}>
                <CardTitle title={this.props.name} subtitle={this.props.price.toString() + " Frux"} />
                <CardText>
                    <Media>
                        <img src={this.props.image} alt="Error loading"/>
                    </Media>
                    <p>{this.props.desc}</p>
                </CardText>
                <CardActions>
                    <Button onClick={this.add} icon>add_shopping_cart</Button>
                </CardActions>
            </Card>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cart: state.home.cart
    };
}

export default connect(mapStateToProps, { addToCart })(ProductCard);