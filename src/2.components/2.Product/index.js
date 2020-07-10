import React, { useEffect } from 'react';
import ProductList from './ProductList';


export default ({ match }) => {
    useEffect(() => {
        document.title = "Product"
    })

    return (
        <div style={{textAlign: "center"}}>
            <ProductList />
        </div>
    )
}