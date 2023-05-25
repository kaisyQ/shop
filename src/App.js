import React from 'react';


import HomeView from 'views/HomeView/HomeView';
import CatalogView from 'views/CatalogView/CatalogView';
import ContactView from 'views/ContactView/ContactView';

import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import LoginContainer from './components/Auth/AuthContainer';
import BlogsContainer from './components/Blogs/BlogsContainer';
import CardAboutContainer from './components/Catalog/Cards/Card/CardAbout/CardAboutContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Navbar from './components/Navbar/Navbar';
import Search from 'components/Search/Search';

import BlogAboutContainer from './components/Blogs/BlogAbout/BlogAboutContainer';



import ShadingBlock from './components/Custom/ShadingBlock/ShadingBlock';

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';


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
      { isOpenSidebar && <SidebarContainer setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} /> }

      <HeaderContainer 
        isOpenSidebar={isOpenSidebar} 
        setIsOpenSidebar={setIsOpenSidebar}
        
      />

      { isDark ? <ShadingBlock onClick={darkOpacityClick}/> : null } 
      
      <Navbar />

      <MainContainer>
        <>
            <Routes>

              {
                ['/', '/shop'].map(
                  (path, index) => <Route key={index} path={path} element={ <HomeView /> } /> )
              }

              <Route path='/catalog'>
                <Route path='' element={ <CatalogView /> } />
                <Route path=':id' element={ <CardAboutContainer /> } />
              </Route>
              
              <Route path='/contact' element={ <ContactView /> } />

              <Route path='/blogs/:id?' element={ <BlogsContainer /> } />
              
              <Route path='/blog'>
                <Route path=':id' element={ <BlogAboutContainer /> } />
                <Route path='create' element={ <BlogAboutContainer /> } />
              </Route>

              <Route path='login' element={<LoginContainer />} />

              <Route path='search' element={<Search />} />

            </Routes>
          </>
      </MainContainer>
      <Footer />
    </AppContainer>
  )
}

export default App;
