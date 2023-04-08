
import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import bookimage from "../storage/popular1.png";


const Container = styled.div`
margin-top: 0.3cm; 
overflow: hidden ;
`;
  const Slides = styled.div`  
  justify-content: space-evenly;
box-shadow: 0 0 4px 4px rgb(210, 105, 30 , 0.3) ;
text-align: center;
align-content: center;
padding:5px;
  width: 900px;
  height: 400px;
  border-radius: 10px;
  `;
  const SearchContainer = styled.div`
  border: 0.5px solid grey;
  height: 15px;
  width: 5.1cm;
  border-radius: 7px;
  align-items: center;
  padding: 10px ;
  display: flex;
  `;
  
  const InfoContainer = styled.div`
  `
  const Image = styled.img`
width: 150px;
border: 4px solid white;
`
  const ImgContainer = styled.div`
  margin-top: 5px;
  align-items: center;
 `
   const Button = styled.button`
   background-color: rgb(255, 102, 0) ;
   color: #FFF;
 box-shadow: 0 0 2px 2px  hsl(0, 19.29824561403509%, 11.176470588235293% , 0.3);
 margin-top: 5px;
   display: flex;
   font-size: 10px;
   text-align: center;
 width: 120px;
  display: inline-block;
  font-size: 13px;
  cursor: pointer;

`;
   const ButtonWrapper = styled.div`
  
`;
   const TextWrapper = styled.div` 
font-family: cursive;
`;

const Wrapper = styled.div`
background-color: #F8FBF8;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: center;
width: 200px;
height: 400px;
border-radius: 10px;
`;

const SliderWrapper = styled.div`
text-align: center;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

`
const Name = styled.div`
   font-family: cursive;
   align-items: center;
   font-size: 14px;
  `;
   const AuthorName = styled.div`
   font-size: 10px;;
   font-family: cursive;
  `;
   const Price = styled.div`
   font-family: Arial, Helvetica, sans-serif;
   font-size: 15px;
   `;
  const CatTitle = styled.div`
  font-size: 50px;
  `
const Slidebar= () => {
  return( <Container>
    
    <SliderWrapper>

      <Slides>
      <Swiper 
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={4}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true  }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
      
    >
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>

    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <CatTitle></CatTitle>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
    <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>by:MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
      <Wrapper>
<ImgContainer>
<Image src={bookimage}/>
</ImgContainer>
<InfoContainer><Name>THE LIVE</Name>
<AuthorName>MAYOWA</AuthorName>
<Price>$12.00</Price>
<ButtonWrapper>
<Button><TextWrapper>DETAILS</TextWrapper> </Button>
<Button><TextWrapper>ADD TO CART</TextWrapper></Button>
</ButtonWrapper>
</InfoContainer>
      </Wrapper>
      </SwiperSlide>

    
      </Swiper>


</Slides>

 </SliderWrapper>
    </Container>
  )
}

export default Slidebar;

