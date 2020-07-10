import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row, Column } from '../0.common/bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const DivElm = styled.div`
    display: flex;
    justify-content: center;
`;

const ProductElm = styled.div`
    margin: 30px;
    text-align: center;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    transition: all 0.25s ease-in-out 0s;
    cursor: pointer;
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

const PriceSpan = styled.span`
    color: #e606d5;
`;

export default () => {
    useEffect(() => {
        document.title = "Product"
    })
    const { url } = useRouteMatch();
    let { pathname } = useLocation();
    console.log(pathname);

    const products = useSelector(state => state.products.list)
    return (
        <div style={{ textAlign: "center" }}>
            <h1>List Products</h1>
            <DivElm>
                <Row style={{ width: "80%" }}>
                    {products.map((eachData) => {
                        return (
                            <Column md={3} sm={4} xs={6} key={eachData.id}>
                                <ProductElm>
                                    <Link to={`product/${eachData.id}`}>
                                        <Img src={eachData.imageUrl} alt={eachData.name} title={eachData.description} />
                                        <ProducTitle>
                                            {eachData.name}
                                        </ProducTitle>
                                        <PriceSpan>${eachData.price}</PriceSpan>
                                    </Link>
                                </ProductElm>
                            </Column>
                        )
                    })}
                </Row>
            </DivElm>
        </div>
    )
}