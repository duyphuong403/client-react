import React from 'react';
import styled from 'styled-components';

const SlideElm = styled.div`
    height: 100%;
    width: ${props => props.width}px;
    background-image: url('${props => props.content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default (props) => {
    return (
        <SlideElm {...props} />
    )
}