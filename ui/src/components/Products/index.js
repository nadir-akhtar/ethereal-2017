import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import products from './products.js'
import {Grid, Cell} from 'react-md';

class Products extends Component {
    render() {

        return (
            <div>
                <Grid container="pictures" component="section">
                    {Object.values(products).map((prod, index) => {
                        return <Cell key={index} size={4}>
                            <ProductCard 
                                key={index}
                                name={prod.name}
                                price={prod.price}
                                image={prod.image}
                                desc={prod.desc}/>
                        </Cell>
                        })
                    }
                </Grid>
            </div>
        );
    }
}

export default Products;