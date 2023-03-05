import React from 'react'

import HeaderContainer from './components/Header/HeaderContainer'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CardAbout from './components/Catalog/Cards/Card/CardAbout'
import LoginContainer from './components/Login/LoginContainer'
import EditUserContainer from './components/EditUser/EditUserContainer'
import UsersContainer from './components/Users/UsersContainer'
import CreateUserContainer from './components/CreateUser/CreateUserContainer'
import BlogsContainer from './components/Blogs/BlogsContainer'

import DarkOpacity from './components/Custom/DarkOpacity'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'


const AppContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0 auto;
  color: #123C69;
`

const MainContainer = styled.main`
  max-width: 33rem;
  margin: 0 auto;
  z-index: 3;
`


function App({ checkMe, isDark, setIsDark }) {
  
  React.useEffect(() => {
    checkMe()
  }, [checkMe])
  
  const darkOpacityClick = (ev) => {
    setIsDark(false)
  }

  return (
    <AppContainer>
      <HeaderContainer />
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
                  <Route path=':id' element={ <CardAbout /> } />
                </Route>
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/blogs/:id?' element={ <BlogsContainer />} />
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
