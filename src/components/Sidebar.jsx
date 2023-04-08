import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
`
const Wrapper = styled.div`
margin-top: 10px;
`
const Text = styled.div`
font-family: cursive;
font-size: 15px;
font-weight: bold;
width: 250px;
text-align: center;
align-items: center;
padding: 10px 10px;
`
const Subtext = styled.div`
margin-top: 20px;
margin-right: 25px;
cursor:  pointer;
width: 200px;
height: 20px;
transition: font-size 0.2s;
&:hover{
  font-size: 17px;
  color:  rgb(255, 102, 0, 0.8);
}
`
const HeadingText = styled.div`

`
const Sidebar = () => {
  return (

   <Container><Wrapper>
   
    
    
    <Text>
    
    <ul>
        <Subtext>CATEGORIES </Subtext>
      <Subtext>NEW BOOKS</Subtext>
      <Subtext>TOP AUTHORS</Subtext>
      <Subtext>AUDIOBOOKS</Subtext>
      <Subtext>BEST SELLERS</Subtext>
      <Subtext>TRENDING</Subtext>
      <Subtext>MOST POPULAR</Subtext>
      <Subtext>EVERGREEN</Subtext>
      <Subtext>MOST RECOMMENDED</Subtext>
      <Subtext>COMING SOON</Subtext>
      <Subtext>BOOK CLUBS</Subtext>
      <Subtext>MOST READ</Subtext>
      <Subtext>SHORT MOVIES</Subtext>
      <Subtext>BOOK QUOTES</Subtext>
      
        </ul></Text>
            </Wrapper>
            </Container>
  )
}

export default Sidebar
