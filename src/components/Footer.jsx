import { Facebook, Instagram, MailOutline, Phone, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import  {mobile} from "../responsive"


//main container
const Container=styled.div`
display:flex;
//responsive effect from response.js
${mobile("flex-direction:column;")}
`

//Left section

//left container
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`

//Logo
const Logo=styled.h1``;
const Desc=styled.p`
margin:20px 0;
`;

// social media icon container
const SocialContainer=styled.div`
display:flex;
`;

//Social medain icon
const SocialIcon=styled.h1`
  width:40px;
  height:40px;
  border-radius:50%;
  color:white;
  background-color:#${props=>props.color};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
`;


//Center section of footer

//center container
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`

//center 
const Title=styled.h3`
margin-bottom:30px;
`

//List 
const List=styled.ul`
 margin:0;
 padding:0;
 list-style:none;
 display:flex;
 flex-wrap:wrap;
`;

//List Items
const ListItem=styled.li`
 width:50%;
 margin-bottom:10px;
`;

//Right section of footer

//Right container
const Right=styled.div`
flex:1;
padding:20px;
${mobile("background-color:#fff8f8;")}
`
//contact us
const ContactItem=styled.div`
 margin-bottom:20px;
 display:flex;
 align-items:center;
`
//Payment icon's
const Payment=styled.img`
 width:40%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Levi's</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cum libero quos aliquam deserunt eveniet, explicabo, ipsum,
                sequi harum voluptatum commodi eius molestiae dicta illo tenetur deleniti culpa non numquam nobis!
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>  

                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>   

                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>   

                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>   
            </SocialContainer>
        </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Shipping</ListItem>
                    <ListItem>Payment Terms</ListItem>
                    <ListItem>Returns</ListItem>
                    <ListItem>Terms of use</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                    <ListItem>Help</ListItem>
                    <ListItem>Feedback</ListItem>
                    <ListItem>Sitemap</ListItem>
                    <ListItem>Storelocator</ListItem>
                    <ListItem>Carrers</ListItem>
                </List>
            </Center>

        <Right>
         <Title>Contact</Title>
         <ContactItem><MailOutline sytle={{marginRight:"10px"}}/>customercare@levi.in</ContactItem>
         <ContactItem><Phone sytle={{marginRight:"10px"}}/>1800-123-5384</ContactItem>     
         <ContactItem><Phone sytle={{marginRight:"10px"}}/>1800-1020-501</ContactItem>
         <ContactItem>
            <Payment src="/img/payment.png"/> 
         </ContactItem> 
        </Right>
    </Container>
  )
}

export default Footer