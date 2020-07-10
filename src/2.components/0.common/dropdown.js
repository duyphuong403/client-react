import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, useRouteMatch, useLocation } from 'react-router-dom';

const DropDownElm = styled.div`
    cursor: pointer;
    font-size: 17px;    
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    &:hover {
        .dropdown-content {
            display: block;
        }
    }
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    /* background-color: #f9f9f9; */
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    .item {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        transition: all 0.25s ease-in-out 0s;
        font-size: 16px !important;
        &:hover{
            transform: scale(1.1);
        };
    }
`;

export function DropDown(props) {

    return (
        <Suspense fallback={"Loading..."}>
            <DropDownElm className="link">
                <NavLink activeClassName="active" to={`/product`} className="link" >
                    {props.title}
                </NavLink>
                <DropDownContent className="dropdown-content">
                    {props.items.map((eachItem) => (
                        <NavLink activeClassName="active" to={`/${eachItem}-product`} className="link item" key={eachItem}>
                            {eachItem}
                        </NavLink>
                    ))}
                </DropDownContent>
                {/* <Switch>
                    <Route exact path={`/Add-product`} component={AddProduct} />
                </Switch> */}
            </DropDownElm>
        </Suspense>
    );
};