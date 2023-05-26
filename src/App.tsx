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
import { AppWrapper, MainContainer } from 'AppStyles';

import { AppConnectedProps } from 'AppContainer';


const App: React.FC<AppConnectedProps> = ({ isDark, setIsDark }) => {
  
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const darkOpacityClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsDark(false);
  }

  return (
    <AppWrapper>
      { isOpenSidebar && <SidebarContainer setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} /> }

      <HeaderContainer 
        isOpenSidebar={isOpenSidebar} 
        setIsOpenSidebar={setIsOpenSidebar}
      />

      { isDark ? <ShadingBlock onClick={darkOpacityClick} /> : null } 
      
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
    </AppWrapper>
  )
}

export default App;
