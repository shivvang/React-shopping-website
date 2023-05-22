
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";

//main container
const Container =styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
//category image's
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
//responsive style from response.js
${mobile({height:"20vh"})}
`

// category info
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

// category title 
const Title=styled.h1`
color:white;
margin-bottom:20px;
text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
`;

//category button
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`

const CategoriesItems = ({item}) => {
  return (
    <Container>
    <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoriesItems