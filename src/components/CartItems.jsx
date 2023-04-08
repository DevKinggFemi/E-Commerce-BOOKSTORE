import React from 'react'
import styled from 'styled-components'
import bookimage from "../storage/popular1.png";


const Container = styled.div`
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
margin-top: -0.1px;
padding: 30px;
box-shadow: 0 0 2px 2px brown ;
`
const ImageWrapper = styled.img`
width: 150px;
`
const Des = styled.div`
padding-left: 20px;
display: flex;
flex-direction: column;

`
const BookDes = styled.div`
font-size: 15px;
`
const PriceDes = styled.div`
font-size: 50px;
font-family: 'Times New Roman', Times, serif;
padding: 15px;
`
const DesButtons = styled.div`
`
const BuyButton = styled.button`
border: none;
height: 30px;
border-radius: 10px;
color: white;
background-color: rgb(255, 102, 0);
font-weight: 1000;
&:hover{

background-color: rgb(255, 166, 0);
}
`
const RemoveButton = styled.button`
border: none;
height: 30px;
margin-top: 15px;
border-radius: 10px;
color: white;
background-color: rgb(238, 52, 52);
font-weight: 1000;
&:hover{

background-color: rgb(180, 8, 8);
}

`
const CartItems = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <ImageWrapper src={bookimage}/>
            <Des><BookDes>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus assumenda deserunt magni cumque explicabo, dignissimos laborum voluptatibus nobis, officia, error velit. Illum molestiae quisquam optio dolore aspernatur laudantium voluptates placeat?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem error excepturi, eum quam pariatur vel saepe tenetur amet sint corrupti ipsum aliquam nostrum! Impedit laborum aspernatur quidem a exercitationem.
                </BookDes>
                <PriceDes>
                    20$
                </PriceDes>
                <BuyButton>
BUY NOW
                </BuyButton>
                <RemoveButton>REMOVE FROM CART</RemoveButton>
                <DesButtons>
                
                </DesButtons>


            </Des>
        </Wrapper>
        <Wrapper>
            <ImageWrapper src={bookimage}/>
            <Des><BookDes>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus assumenda deserunt magni cumque explicabo, dignissimos laborum voluptatibus nobis, officia, error velit. Illum molestiae quisquam optio dolore aspernatur laudantium voluptates placeat?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem error excepturi, eum quam pariatur vel saepe tenetur amet sint corrupti ipsum aliquam nostrum! Impedit laborum aspernatur quidem a exercitationem.
                </BookDes>
                <PriceDes>
                    20$
                </PriceDes>
                <BuyButton>
BUY NOW
                </BuyButton>
                <RemoveButton>REMOVE FROM CART</RemoveButton>
                <DesButtons>
                
                </DesButtons>


            </Des>
        </Wrapper>
      </Container>
    </div>
  )
}

export default CartItems
