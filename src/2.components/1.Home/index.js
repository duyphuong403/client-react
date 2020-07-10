import React, { useEffect } from 'react';
import Banner1 from './images/banners/bread-banner-1.jpg';
import Banner2 from './images/banners/bread-banner-2.jpeg';
import Banner3 from './images/banners/bread-banner-3.jpg';
// import './style.scss';
import Slider from "./Slider";
import ProductList from "../2.Product/ProductList";

const bannerCollection = [
    Banner1, Banner2, Banner3
]

export default function () {
    useEffect(() => {
        document.title = "Home"
    })

    return (
        <div>
            <Slider
                slides={bannerCollection}
                autoPlay={3}
            />
            <ProductList />
        </div>
    )
}