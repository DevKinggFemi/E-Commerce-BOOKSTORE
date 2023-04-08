
import Announcement from '../components/announcement';
import Navbar from '../components/navBar';
import Searchbars from '../components/Searchbar';
import Slidebar from '../components/slidebar';
import styled from 'styled-components';
const Container = styled.div`



`
const Home = () => {
  return (
    <div>
      <Container>
      <Navbar/>
      <Announcement/>
      <Searchbars/>
      <Slidebar/>
      
        </Container>
    </div>
  )
}

export default Home
