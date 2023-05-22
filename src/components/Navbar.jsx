import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive"

//Nav Main
const  NavbarContainer=styled.div`
  height:60px;
  //responsive style from response.js
  ${mobile("height:50px;")}
`;

const NavbarWrapper=styled.div `
padding:10px 20px;
display:flex;
justify-content:space-between;
//responsive style from response.js
${mobile("padding:10px 0;")}
 `;
//left section
 const LeftNavSection=styled.div`
 flex:1;
 display:flex;
 align-items:center;
 `

 const Language=styled.span`
 font-size:14;
 cursor:pointer;
 //responsive style from response.js
 ${mobile("display:none;")}
 `

 const SearchContainer =styled.div`
 border:0.5px solid lightgray;
 display:flex;
 align-items:center;
 margin-left:25px;
 padding:5px;
 `
const Input=styled.input`
border:none;
//responsive style from response.js
${mobile("width:50px;")}
`
 //center section
 const CenterNavSection=styled.div`
 flex:1;
 text-align:center;
 `
const Logo=styled.h1`
font-weight:bold;
//responsive style from response.js
${mobile("font-size:24px;")}
`
 //right section
 const RightNavSection=styled.div` 
 flex:1;
 display:flex;
 align-items:center;
 justify-content:flex-end;
 //responsive style from response.js
 ${mobile("flex:2,justify-content:center;")}
 `
 const MenuItems=styled.div`
 font-size:14px;
 cursor:pointer;
 margin-left:25px;
 //responsive style from response.js
 ${mobile("font-size:12px,margin-left:10px;")}
 `

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarWrapper>
            <LeftNavSection>
              <Language>EN</Language>
                  <SearchContainer>
                      <Input placeholder="Search"/>
                      <Search style={{color:"gray",fontSize:16}}/>
                  </SearchContainer>
            </LeftNavSection>

              <CenterNavSection>
                <Logo>Levi's</Logo>
              </CenterNavSection>

            <RightNavSection>
                <MenuItems>Register</MenuItems>
                <MenuItems>Sign In</MenuItems>
                <MenuItems>
                 <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined/>
                 </Badge>
                </MenuItems>
            </RightNavSection>

        </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar