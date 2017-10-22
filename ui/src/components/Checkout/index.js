import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkout } from '../Home/home.actions';
import { DataTable, TableHeader, TableRow, TableColumn, TableBody, Button, FontIcon } from 'react-md';

class Checkout extends Component {
    render() {
        return (
            <div className="md-grid">
                {this.props.cart.length === {} ? 
                   <p>Cart is empty. Please go <a href='/home'>home</a></p> :
                   <div>
                        <DataTable baseId="checkout" plain>
                            <TableHeader>
                                <TableRow>
                                    <TableColumn grow>Name</TableColumn>
                                    <TableColumn >Price</TableColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.values(this.props.cart).map((prod, i) => {
                                    return <TableRow key={i}>
                                        <TableColumn>{prod.name}</TableColumn>
                                        <TableColumn>{prod.price}</TableColumn>
                                    </TableRow>
                                })}
                            </TableBody>
                        </DataTable>
                        <Button className="right" onClick={this.props.checkout} raised secondary iconEl={<FontIcon>shopping_basket</FontIcon>}>Pay with MetaMask</Button>
                    </div>
                }
                
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cart: state.home.cart
    };
}

export default connect(mapStateToProps, { checkout })(Checkout);