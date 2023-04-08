import React from 'react'
import styled from 'styled-components'
import bookimage from "../storage/popular1.png";
import { Facebook, Twitter, Instagram, YouTube, RateReview, StarHalfOutlined} from '@material-ui/icons';
import Author from "../storage/b2.png";
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
const Container = styled.div`

`
const Wrapper = styled.div`
margin-top: 50px;
display: flex;

`
const SliderTitle = styled.div`
`
const Image = styled.img`
width: 30%;
height: 400px;

`
const DescTitle = styled.span`
font-size: 30px;
font-weight: bold;
`
const DescRatings = styled.div`
display: flex;
width: 50%;
align-items: center;
text-align: center;
`
const DescHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
text-align: center;
align-items: center;
margin-top: 5px;
`
const SocialContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
text-align: center;
`
const SocialIcons =styled.div`
width: 100px;
height: 20px;
display: flex;
align-items: center;
text-align: center;



`
const DescBook = styled.div`
margin-top: 10px;
`
const DesButtons = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;

`
const BuyButton = styled.button`
width: 150px;
height: 50px;
background-color: rgb(255, 102, 0);
border: none;
border-radius: 30px;
color: white;
&:hover{
  background-color:   rgb(255, 166, 0);
}

`
const AuthorDesc = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 10%;
justify-content: flex-start;
`
const AuthorName = styled.div`
font-family: italics;
padding: 5px;
font-size: 15px;
`
const AuthorImage = styled.img`
width: 30px;
height: 30px;
border-radius: 40px;
box-shadow: 0 0 1px 1px orange;
`

const Year = styled.div`
text-align: center;
justify-content: center;
align-items: center;
display: flex;
font-family: 'Times New Roman', Times, serif;
width: 20%;
flex-direction: column;
`

const YearDes = styled.div`
padding-top: 25px;
font-family: cursive;
font-weight: bolder;
`
const SideButtons = styled.button`
`
const AuthNameDes = styled.div`
font-weight: bolder;
`
const CartButton = styled.button`
background-color: rgb(255, 102, 0);
width: 200px;
height: 50px;
color: white;
border: none;
border-radius: 30px;

&:hover{
  background-color:   rgb(255, 166, 0);
}

`
const ButtonDes = styled.div`
width: 70%;
display: flex;
flex-direction: row;

align-items: center;
text-align: center;

`
const DesPrice = styled.div`
`
const Price = styled.div`
margin-top: 10px;
font-size: 40px;
`
const CartContainer = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;

`
const CartMinus = styled.div`
margin-left: 10px;
margin-right: 10px;
font-size: 40px;
`
const CartBox = styled.div`
border-radius: 8px;
width: 40px;
height: 40px;
border: 2px solid grey;
justify-content: center;
text-align: center;
display: flex;
align-items: center;

`
const CartWrapper= styled.div`
padding-left: 40px;
display: flex;
`

const Desc = styled.div`
width: 70%;
padding-left: 20px;
display: flex;
flex-direction: column;
`
function Products() {
  return (
    <div>
        <Container>
            <Wrapper>
      <Image src={bookimage}/>
<Desc>
    <DescTitle>My Life</DescTitle>
    <DescHeader> 
        <DescRatings><RateReview/><StarHalfOutlined/> </DescRatings>
    <SocialContainer>

<SocialIcons style= {{color:"#3b5998"}}><Facebook/></SocialIcons>
<SocialIcons style= {{color:"#3f729b"}}><Twitter/></SocialIcons>
<SocialIcons style= {{color:"#55acee"}} ><Instagram/></SocialIcons>
<SocialIcons style= {{color:"#cd201f"}} ><YouTube/></SocialIcons>
 </SocialContainer>
          </DescHeader>
          <DescBook>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis incidunt vitae voluptates mollitia molestiae aliquid illo obcaecati repudiandae, nam autem quos odit asperiores impedit deserunt amet dolorum, alias eveniet.          Saepe, aut nostrum enim veritatis laborum laboriosam officiis odio qui earum aspernatur voluptatem amet molestiae perferendis? Eum esse sapiente eligendi optio quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis ab quae facere molestias, similique, obcaecati quisquam odit placeat fugit ad, veritatis velit. Cupiditate, quos? Deleniti nihil exercitationem ipsum praesentium?

          </DescBook>
  <Price>$20</Price>

<DesButtons>
    <AuthorDesc><AuthorName> Author</AuthorName>
     <AuthorImage src={Author}/><AuthNameDes>MAYOWA</AuthNameDes>   
    </AuthorDesc>
    <Year>
        Year
      <YearDes>1998</YearDes>
        
    </Year>
    <ButtonDes>
    <BuyButton>BUY NOW</BuyButton>

   
  <CartWrapper>   <CartContainer> <CartMinus>-</CartMinus><CartBox>1`</CartBox> <CartMinus>+</CartMinus></CartContainer> <CartButton>ADD TO CART <Badge badgeContent={2} color="#fffbfb"><ShoppingCartOutlined/></Badge></CartButton></CartWrapper>
    </ButtonDes>
</DesButtons>


</Desc>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Products