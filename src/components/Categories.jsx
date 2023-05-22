import React from 'react'
import styled from 'styled-components'
import {categories} from"../data";
import CategoriesItems from './CategoriesItems';
import {mobile} from "../responsive";

//main container
const Container =styled.div`
 display:flex;
 padding:20px;
 justify-content:space-between;
 //responsive style from response.js
 ${mobile({padding:"0",flexDirection:"column"})}
`
//iterating over category items through javascript map
const Categories = () => {
  return (
    <Container>
      
    {categories.map(item=>(
       <CategoriesItems item={item} key={item.id}/> 
    ))}
    </Container>
  )
}

export default Categories