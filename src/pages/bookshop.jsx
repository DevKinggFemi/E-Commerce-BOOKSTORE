import NavbarBookShop from "../components/navbarBookShop";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Slidebar from "../components/slidebar";
import Products from "../components/products";
const Container = styled.div`
min-width: 1300px;
width: 100%;
`;
const BorderWrapp = styled.div`
border: 1px solid brown;
border-radius: 40px;
width: 80%;
margin-left: 160px;

`;
const SlideWrapper = styled.div`
margin-left: -6%;
margin-top: 20px;

`;

const SlideHeading = styled.div`
display: flex;
margin-left: 100px;
margin-top: 30px;
font-size: 40px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bolder;
`
const SearchContainer = styled.div`
margin: 20px 20px;
border: 0.5px solid grey;
height: 15px;
width: 5.1cm;
border-radius: 7px;
align-items: center;
padding: 10px ;
display: flex;
`;
const Input = styled.input`
border-color: white;
`;
const Sidebars = styled.div`
width: 20%;
background-color: hsl(0, 0%, 100%);
`;
const Wrapper = styled.div`
width : 100%;
display: flex;
flex-direction: column;
overflow: hidden;
`;
const Nav = styled.div`
width: 80%;
display: flex;
flex-direction: column;
`;
const SlideHeader = styled.div`
font-size: 40px;
display: flex;
justify-content: center;
`
const Heading = styled.div`
display: flex;

`;
const Bookshop = () => {
  const Options = ( <div>
  <SlideWrapper>
    <SlideHeader>POPULAR </SlideHeader>
      <Slidebar/></SlideWrapper>
    <SlideHeader>RECENTLY ADDED </SlideHeader>
    <SlideWrapper><BorderWrapp/><Slidebar/></SlideWrapper>
    <SlideWrapper><BorderWrapp/><Slidebar/></SlideWrapper> 
</div>
  )
  return (
  <Container>
    <Wrapper>
    <NavbarBookShop/>
        <Heading>
 <Sidebars><Sidebar/></Sidebars> 
<Nav>
  <Products/>
</Nav>
</Heading>
</Wrapper>
  </Container>
  )
}

export default Bookshop;