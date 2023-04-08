import React from 'react'
import styled from 'styled-components'
import bookimage from "../storage/d5.png";

const Container =styled.div`
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
display: flex;
background-image: url(${bookimage});


`
const Wrapper =styled.div`
box-shadow: 0 0 2px 2px  rgb(255, 166, 0,0.9) ;
width: 400px;
height: 250px;
align-items: center;
text-align: center;
justify-content: center;
display: flex;
flex-direction: column;
background-color: #ffffffe1;

`
const Button =styled.button`
border-radius: 15px;
margin-top: 10px;
margin-bottom: 10px;
text-align: center ;
background-color: rgb(247, 171, 30);
width: 100px;
height: 35px;

color: white;
border: none;
&:hover{
background-color: rgb(255, 166, 0);
}

`
const Title =styled.div`
font-size: 25px;
font-family: cursive;
font-weight: bold;
`
const Input =styled.input`
font-family: Arial, Helvetica, sans-serif;
padding: 5px 10px;
border-radius: 20px;
border-color: rgb(165, 42, 42);
flex: 1;
&:hover{
    border-color: rgb(247, 4, 4);
}

`
const Agreement =styled.div`
font-family: 'Times New Roman', Times, serif;
padding: 5px 5px;
`
const SearchContainer =styled.div`
flex-direction: column;
padding: 10px;
`

const AuthText =styled.div`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

const Login = () => {
  return (
    <Container>
<Wrapper>

<Title>LOGIN </Title>
     
<SearchContainer>
   
    <Input placeholder='EMAIL'/>
    <AuthText></AuthText>
</SearchContainer>
<SearchContainer>
    <Input placeholder='PASSWORD'/>
    <AuthText></AuthText>
</SearchContainer>
<Agreement> I agree with the Terms of Service and Privacy <b>Policy </b></Agreement>
<Button>LOGIN</Button>
</Wrapper>

    </Container>
  )
}

export default Login;
