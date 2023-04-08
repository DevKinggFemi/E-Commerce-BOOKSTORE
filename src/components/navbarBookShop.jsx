import { Badge } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import bookimage from "../storage/logo.png";
import { Search } from '@material-ui/icons'

const  Container = styled.div`
background-color: #7a7ba8 0.5;
height: 3.5cm;
background-color: hsl(0, 19.29824561403509%, 11.176470588235293%);
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`;
const Topright = styled.div`
padding:  40px 40px ;
  display: flex;
justify-content: space-between;
width: 900px;
`
const SearchContainer = styled.div`
border: 0.5px solid grey;
height: 15px;
width: 6cm;
border-radius: 12px;
align-items: center;
padding: 8px;
display: flex;
background-color: white;
cursor: context-menu;
box-shadow: 0 0 1px 1px  rgb(255, 166, 0,0.9) ;

&:hover{
  box-shadow: 0 0 2px 2px  rgb(255, 166, 0);
}

`;

const NavbarItem = styled.a`
margin-right: 30px;
font-size: 18px;
font-family: cursive;
font-weight: bold;
border-radius: 10px;
color: white;
justify-content: space-between;
border-width: 50px;
width:100px;
padding-LEFT: 20px;
transition: all 0.3s ease-in;
cursor: pointer;
align-items: center;
text-align: center;
transition: 0.4s;
&:hover{
  color: rgb(255, 102, 0);
  font-size: 19px;
}
`
const Input = styled.input`
border: none;
width: 300px;
`;
const Logo = styled.img`

`;

const Topleft = styled.span`
padding:  5px 40px ;

`;








const NavbarBookShop = () => {
  return (<Container>
    <Wrapper>
      <Topleft><img src={bookimage} alt='logo' width='120px' height="120px"/></Topleft>
       
     
      <Topright>
      <SearchContainer><Input placeholder='search'/><Search/></SearchContainer>
        <NavbarItem>HOME</NavbarItem>
        <NavbarItem>BOOKSTORE</NavbarItem>
        <NavbarItem>LOGIN</NavbarItem>
        <NavbarItem>ITEMS<Badge badgeContent={4} color="#0e0d0d"><ShoppingCartOutlined/></Badge></NavbarItem>      
      </Topright>

      </Wrapper> 
       </Container>
  )
}
  


export default NavbarBookShop;
