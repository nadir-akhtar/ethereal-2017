import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkout } from '../Home/home.actions';
import { Avatar, Chip, DataTable, TableHeader, TableRow, TableColumn, TableBody, Button, FontIcon, Card, CardText, CardActions, CardTitle } from 'react-md';

class Checkout extends Component {

    processCheckout = () => {
        this.props.checkout(this.props.cart);
    }

    render() {
        return (
            <div className="md-grid">
                <div>
                    <Card>
                        <CardTitle title="Checkout" />
                        <DataTable baseId="checkout" plain>
                            <TableHeader>
                                <TableRow>
                                    <TableColumn grow>Name</TableColumn>
                                    <TableColumn >Price</TableColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.props.cart ? Object.values(this.props.cart).map((prod, i) => {
                                        return <TableRow key={i}>
                                            <TableColumn className="md-subheading-2">{prod.name}</TableColumn>
                                            <TableColumn className="md-subheading-2">{prod.price}</TableColumn>
                                        </TableRow>
                                    }) : ""}
                            </TableBody>
                        </DataTable>
                        <div style={{ textAlign: "right", margin: "15px" }}>
                            <Chip
                                avatar={<Avatar random></Avatar>}
                                label={"Total: " + Object.values(this.props.cart).reduce((prev, prod) => { return prev + Number(prod.price) }, 0).toString() + " Frux"} />
                        </div>

                        <CardText>{this.props.error ? this.props.error : ""}</CardText>

                        <div>
                            <CardActions centered>
                                <Button onClick={this.processCheckout} raised secondary iconEl={<FontIcon>shopping_basket</FontIcon>}>Pay with MetaMask</Button>
                            </CardActions>
                        </div>

                    </Card>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cart: state.home.cart,
        checkoutCart: state.home.checkoutCart,
        error: state.home.error
    };
}

export default connect(mapStateToProps, { checkout })(Checkout);