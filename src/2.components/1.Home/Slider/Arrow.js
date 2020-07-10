import React from 'react';
import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';
import styled from 'styled-components';

const ArrowElm = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    /* background: white; */
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    opacity: 0.5;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 6px #ffffff;
        opacity: 1;
    };

    img {
        transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
        &:focus {
            outline: 0;
        };
    };
`;

export default (props) => {
    return (
        <ArrowElm
            onClick={props.handleClick}
            {...props}
        >
            {props.direction === 'right' ? <img src={rightArrow} alt={""} /> : <img src={leftArrow} alt={""} />}
        </ArrowElm>
    );
};
