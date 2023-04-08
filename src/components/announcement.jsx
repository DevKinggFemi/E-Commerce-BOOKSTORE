import styled from "styled-components";
import bookimage from "../storage/d1.png";
const Container = styled.div`

`;
const Textsub = styled.div`
margin-top: 10px;
font-size: 20px;
color: white;

`
const Wrapper = styled.div`
background-image: url(${bookimage});
height:450px;
width: 1400;
`
const TextWrapper = styled.div`
padding-top: 60px;
padding-left: 10px;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: 40px;
color: #FFFFF0;
`
const Texting = styled.div`
height: 300px;
width: 600px;
background-color: rgb(24, 13, 13, 0.3) ;
border-radius: 200px;
text-align: center;
`
const Button = styled.button`
margin-top: 15px;
text-align: center;
border-radius: 50px;
width: 250px;
height: 50px;
color: white;
font-size: 25px;
font-weight: bold;
font-family: Georgia, 'Times New Roman', Times, serif;
background-color: rgb(255, 102, 0);
border: none;
cursor: pointer;
transition: 0.3s;

&:hover{
  font-size: 30px;
width: 270px;
height: 53px;
background-color: rgb(255, 166, 0);
}
`
const Announcement = () => {
  return (<Container>
    <Wrapper><Texting><TextWrapper>
YOUR ONE STOP SHOP FOR BOOKS</TextWrapper>
<Textsub>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi, sunt dolores porro officiis natus, enim delectus perspiciatis neque dolore animi illum deleniti blanditiis ducimus ex, ab cum! Neque, eaque?</Textsub>
   <Button>SHOP NOW!</Button>
      </Texting>
      
      </Wrapper>
    </Container>
  )
}

export default Announcement;
