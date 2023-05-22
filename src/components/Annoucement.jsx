import React from 'react';

import styled from "styled-components"

const Container=styled.div`
height:30px;
background-color:teal;
color:white;
font-size:14px;
font-weight:500;
align-items:center;
justify-content:center;
text-align: center;
`

const Annoucement = () => {
  return (
    <>
    <Container>
        Extra Rs.500 OFF on purchase value of Rs.2500 for all new Levi's® email subscribers
    </Container>
    </>
  )
}

export default Annoucement