import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import {Grid, Cell} from 'react-md';

class Products extends Component {
    render() {
        const products = [{
            name: "Diaper",
            price: "20",
            image: "",
            desc: "A cloth diaper used to prevent your carpet from getting ruined."
        }, {
            name: "Soylent",
            price: "20",
            image: "",
            desc: "A curious beverage of choice for overworked college students."
        }, {
            name: "La Croix",
            price: "200",
            image: "",
            desc: "Imagine water but kinda bad."
        }];
        
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