import React from 'react';
import styled from 'styled-components';

const DotElm = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'gray' : 'white'};
    opacity: 0.5;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 6px #ffffff;
    };
`;

const Dot = props => (
    <DotElm
        {...props}
    />
);

const ParentDotElm = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default (props) => {
    return (
        <ParentDotElm>
            {props.slides.map((slide, i) => (
                <Dot key={slide} active={props.activeSlide === i} onClick={() => props.handleClick(i)}/>
            ))}
        </ParentDotElm>
    )
};