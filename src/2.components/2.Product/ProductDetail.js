import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from '../0.common/bootstrap';
import { useParams } from 'react-router-dom';

const MainDiv = styled.div`
    text-align: center;
    background-color: ${props => props.backgroundColor};
`;

const ProductElm = styled.div`
    margin: 30px;
    text-align: center;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    transition: all 0.25s ease-in-out 0s;
    /* cursor: pointer; */
    &:hover {
        transform: scale(1.1);
    };
`;

const Img = styled.img`
    width: 100%;
    margin-bottom: 10px;
`;

const ProducTitle = styled.span`
    display: block;
    margin-bottom: 10px;
`;

export default () => {
    document.title = "Product Detail";

    // set background color
    // useEffect(() => {
    //     return () => {
    //         // code clean up here
    //         // Executed before the next render or unmount
    //         // dispatch(allActions.style.setBackground("white"));
    //     }
    // }, []) // the useEffect will be called if the "dispatch" changes in later times.

    // // useEffect without second argument will be called every render
    // // useEffect with second argument array empty [] will be called once.
    const { productId } = useParams();

    const product = useSelector(state => {
        return state.products.list.find(x => x.id === +productId);
    });
    // console.log(product);
    return (
        <MainDiv>
            <h1>Product Detail</h1>
            <Column md={3} sm={4} xs={6}>
                <ProductElm>
                    <Img src={product.imageUrl} alt={product.name} title={product.description} />
                    <ProducTitle>
                        {product.name}
                    </ProducTitle>
                    <span style={{ color: "#e606d5" }}>${product.price}</span>
                </ProductElm>
            </Column>
        </MainDiv>
    )
};