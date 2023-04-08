import { Facebook, FormatItalic, FormatItalicOutlined, Instagram, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div`

`
const Wrapper= styled.div`
display: flex;
align-items: center;
background-color: hsl(0, 16.190476190476193%, 20.588235294117645%);
overflow: hidden;

`
const Title = styled.div`
font-family: 'Times New Roman', Times, serif;
align-items: center;
text-align: center;
font-weight: 1000;
color: white;

`
const SocialContainer = styled.div`
margin-top: 20px;
display: flex;
`
const SocialIcons = styled.div`
width: 40px;
height: 40px;
background-color: #${props => props.color} ;

`
const Links = styled.li`
width: 50%;
list-style: none;
font-weight: bold;
color: white;
`
const List = styled.ul`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: space-between;
margin-right: 30px;
`
const Input= styled.input``
const Button= styled.button``
const Text= styled.div`
color:white;
`
const Logo= styled.div`
padding: 20px;
font-weight: bold;
font-family: cursive;
font-size: 30px;
color: white;
`
const LeftWrapper= styled.div`
width: 100%;
`
const Left= styled.div`
flex: 1;
`
const Right= styled.div`
flex: 1;
`
const Center = styled.div`
flex: 1;

align-items: center;
`
const Footer = () => {
  return ( <div>
<Container>

    <Wrapper>

<Left><LeftWrapper><Logo>myBOOKSTORE</Logo>
<Text><Title>ABOUT US</Title></Text>
<Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quibusdam enim excepturi quos consequatur ratione, dolorum quod sequi similique, exercitationem iusto consectetur. Fugit ex illum, animi at ipsum aspernatur repudiandae?</Text>

<SocialContainer>
    <SocialIcons style= {{color:"#3b5998"}}> <Facebook/></SocialIcons>
    <SocialIcons style= {{color:"#3f729b"}}><Instagram/></SocialIcons>
    <SocialIcons style= {{color:"#55acee"}}><Twitter /></SocialIcons>
    <SocialIcons style= {{color:"#cd201f"}}><YouTube/></SocialIcons>
</SocialContainer>
</LeftWrapper>
</Left>


<Center><Title>USEFUL LINKS</Title>
<List>
<Links>HOME</Links>
<Links>BOOKSTORE</Links>
<Links>LOGIN</Links>
<Links>CATEGORIES</Links>
<Links>MOST POPULAR</Links>
<Links>NEW STOCK</Links>
<Links>PROMO</Links>
<Links>RECENTLY OPENED</Links>
</List>
</Center>



<Right>2</Right>




    </Wrapper>
    </Container>      
    </div>
  )
}

export default Footer;
