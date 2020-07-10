import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import navbarIcon from "../../3.assets/images/navbar-icon.svg";
import Spinner from "../../3.assets/images/Ball-1s-200px.svg";
import Notfound from '../0.common/notfound';
import { DropDown } from './dropdown';

const Homepage = React.lazy(() => import('../1.Home'));
const ProducList = React.lazy(() => import('../2.Product/'));
const AddProduct = React.lazy(() => import('../2.Product/AddProduct'));
const ProductDetail = React.lazy(() => import('../2.Product/ProductDetail'));
const ContactPage = React.lazy(() => import('../3.Contact'));
const AboutPage = React.lazy(() => import('../4.About'));

export default function () {
    return (
        <Suspense fallback={
            <img src={Spinner} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} alt="Loading..." />
        }>
            <Router>
                <MainNavigation>
                    <Link to="/" className="logo">Bánh Mì Shop</Link>
                    <ul className="nav-links">
                        <li>
                            <NavLink exact activeClassName="active" to="/" className="link">Home</NavLink>
                        </li>
                        <li>
                            <DropDown title={"Product"} items={["Add", "Edit"]} />
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/contact" className="link">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/about" className="link">About</NavLink>
                        </li>
                    </ul>
                    <MobileNavButton >
                        <img src={navbarIcon} alt="Navbar Icon" />
                    </MobileNavButton>
                </MainNavigation>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/product" component={ProducList} />
                    <Route exact path="/add-product" component={AddProduct} />
                    <Route exact path="/product/:productId" component={ProductDetail} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        </Suspense>
    );
};

const MainNavigation = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background: #de822f;
    color: white;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
    border-radius: 20px;
    margin: 5px;

    .logo {
        font-size: 25px;
        font-weight: bold;
        text-shadow: 3px 3px 3px black;
        cursor: pointer;
        color: white;
        text-decoration: none;
        transition: all 0.25s ease-in-out 0s;
        &:hover {
            transform: scale(1.1);
        };
    };

    .nav-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        width: 35vw;
        z-index: 1;

        @media screen and (max-width: 690px){
            display: none;
        }
    };

    li {
        padding: 10px;
        transition: all 0.25s ease-in-out 0s;

        &:hover{
            transform: scale(1.1);
        };
    }

    .link {
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;
        transition: all 0.25s ease-in-out 0s;
        text-shadow: 3px 3px 3px black;
    };

    .active {
        text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.45), 0 0 5px rgba(255,255,255,0.8), 0 11px 15px rgba(255,255,255,0.5);
    }

    @media screen and (max-width: 690px){
        height: 70px;
    }
`;

const MobileNavButton = styled.button`
    background: transparent;
    height: 6vh;
    width: 6vh;
    border: none;
    transition: all 0.25s ease-in-out 0s;
    right: 30px;
    position: absolute;
    cursor: pointer;
    display: block;

    /* &:hover{
        opacity: 0.5
    }; */

    img {
        width: 5vh;
        border: 1px solid white;
        border-radius: 5px;
        transition: all 0.25s ease-in-out 0s;

        &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 6px rgba(35, 173, 255, 1);
    };
    };
    @media screen and (min-width: 690px){
        display: none;
    };

`;

