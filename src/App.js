import React from 'react'

import HeaderContainer from './components/Header/HeaderContainer'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import LoginContainer from './components/Auth/AuthContainer'
import EditUserContainer from './components/EditUser/EditUserContainer'
import UsersContainer from './components/Users/UsersContainer'
import CreateUserContainer from './components/CreateUser/CreateUserContainer'
import BlogsContainer from './components/Blogs/BlogsContainer'
import CartContainer from './components/Cart/CartContainer'
import CardAboutContainer from './components/Catalog/Cards/Card/CardAbout/CardAboutContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import Navbar from './components/Navbar/Navbar'
import SearchContainer from './components/Search/SearchContainer'
import BlogAboutContainer from './components/Blogs/BlogAbout/BlogAboutContainer'



import DarkOpacity from './components/Custom/DarkOpacity'
import BigImage from './components/Custom/BigImage'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'


const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  color: black;
  min-width: 250px;
  max-width: 1200px;
  min-height: 100vh;

  @media only screen and (max-width: 768px){
    max-width: 768px;
  }

  @media only screen and (max-width: 330px){
    max-width: 330px;
  }
`

const MainContainer = styled.main`
  z-index: 3;
  padding: 0 1rem;
  flex-grow: 1;
  position: relative;
`


function App({ checkMe, isDark, setIsDark }) {
  
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)

  React.useEffect(() => {
    checkMe()
  }, [checkMe])
  
  const darkOpacityClick = (ev) => {
    setIsDark(false)
  }

  return (
    <AppContainer>
      <BigImage />
      { isOpenSidebar && <SidebarContainer setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} /> }

      <HeaderContainer 
        isOpenSidebar={isOpenSidebar} 
        setIsOpenSidebar={setIsOpenSidebar}
        
      />

      { isDark ? <DarkOpacity onClick={darkOpacityClick}/> : <></> } 
      
      <Navbar />

      <MainContainer>
        <>
            <Routes>

              {
                ['/', '/shop'].map(
                  (path, index) => <Route key={index} path={path} element={ <Home /> } /> )
              }

              <Route path='/catalog'>
                <Route path='' element={ <Catalog /> } />
                <Route path=':id' element={ <CardAboutContainer /> } />
              </Route>
              
              <Route path='/contact' element={ <Contact /> } />

              <Route path='/blogs/:id?' element={ <BlogsContainer /> } />
              
              <Route path='/blog'>
                <Route path=':id' element={ <BlogAboutContainer /> } />
                <Route path='create' element={ <BlogAboutContainer /> } />
              </Route>

              <Route path='/cart' element={ <CartContainer />} />

              <Route path='login' element={<LoginContainer />} />

              <Route path="users" element={<UsersContainer />} />

              <Route exact path='users/create' element={<CreateUserContainer />} />

              <Route path='users/:id' element={<EditUserContainer />} />

              <Route path='search' element={<SearchContainer />} />

            </Routes>
          </>
      </MainContainer>
      <Footer />
    </AppContainer>
  )
}

export default App;
