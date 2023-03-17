import React from 'react'

import HeaderContainer from './components/Header/HeaderContainer'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import LoginContainer from './components/Login/LoginContainer'
import EditUserContainer from './components/EditUser/EditUserContainer'
import UsersContainer from './components/Users/UsersContainer'
import CreateUserContainer from './components/CreateUser/CreateUserContainer'
import BlogsContainer from './components/Blogs/BlogsContainer'
import CartContainer from './components/Cart/CartContainer'
import CardAboutContainer from './components/Catalog/Cards/Card/CartAbout/CardAboutContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import SearchContainer from './components/Search/SearchContainer'

import DarkOpacity from './components/Custom/DarkOpacity'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'


const AppContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  color: black;
`

const MainContainer = styled.main`
  max-width: 33rem;
  margin: 0 auto;
  z-index: 3;
`


function App({ checkMe, isDark, setIsDark }) {
  
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
    

  React.useEffect(() => {
    checkMe()
  }, [checkMe])
  
  const darkOpacityClick = (ev) => {
    setIsDark(false)
  }

  return (
    <AppContainer>
      { isOpenSidebar && <SidebarContainer setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} /> }
      { isSearchOpen && <SearchContainer isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} /> }

      <HeaderContainer 
        isOpenSidebar={isOpenSidebar} 
        setIsOpenSidebar={setIsOpenSidebar}
        
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      { isDark ? <DarkOpacity onClick={darkOpacityClick}/> : <></> } 
      
      <MainContainer>
        <Routes>
          <Route path='/admin/*'>
            <Route path='' element={<LoginContainer />} />
            <Route path='login' element={<LoginContainer />} />
            <Route path="users" element={<UsersContainer />} />
            <Route exact path='users/create' element={<CreateUserContainer />} />
            <Route path='users/:id' element={<EditUserContainer />} />
          </Route>
          <Route path='*' element={(
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
                <Route path='/blogs/:id?' element={ <BlogsContainer />} />
                <Route path='/cart' element={ <CartContainer />} />
              </Routes>
            </>
          )} />
        </Routes>
        <Footer />
      </MainContainer>
    </AppContainer>
  )
}

export default App;
