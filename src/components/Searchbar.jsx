import React from 'react'
import { Search } from '@material-ui/icons'
import styled from 'styled-components';
const Container = styled.div`
margin-top: 20px;
height: 100%;
`;
const Wrapper = styled.div`
margin-left: 2cm;
display: flex;
justify-content: space-evenly;
`;

const TitleNav = styled.nav`
`
const Right = styled.div`
width: 25%;
`;
const SearchContainer = styled.div`
border: 0.5px solid grey;
height: 15px;
width: 5.1cm;
border-radius: 7px;
align-items: center;
padding: 8px;
display: flex;
margin-top: -5px;
margin-left: 80px;

`;

const Center = styled.div`
width: 25%;

`;

const Left = styled.div`
width: 25%;

`;

const Input = styled.input`
border: none;

`;
const BookCategory = styled.div`

`;
const Author = styled.ul`
width: 25%;
justify-content: flex-end;
`
const TitleCatergory = styled.div`
`;

const FilterContainer = styled.div`

`
const FilterCategories = styled.option`
box-shadow: 0 0 2px 2px orange;
width: 40px;
`
const FilterTitle = styled.div`
padding-right: 5px;
`
const Filter = styled.div`
display: flex;
flex-direction: row ;
border: 2px solid orange;
border-radius: 10px;
text-align: center;



`
const FilterSelect = styled.select`
text-align: center;
border: none;
`

const Searchbars = () => {
  return (
    <Container>
<Wrapper>
  
    <Left><TitleCatergory> BOOK TITLE</TitleCatergory> </Left>

    <Center><BookCategory>BOOK CATEGORY</BookCategory></Center>
  <FilterContainer>
    <Filter>
      <FilterTitle>AUTHOR</FilterTitle>
      <FilterSelect>
      <FilterCategories>AMERICAN</FilterCategories>
      <FilterCategories>United Kingdom</FilterCategories>
      <FilterCategories>German</FilterCategories>
      </FilterSelect>
    </Filter>
    </FilterContainer>
    
    
    <Right><SearchContainer><Input placeholder='search'/><Search/></SearchContainer></Right> 
    
    
    </Wrapper>
    </Container>
  )
}
export default Searchbars;
