import React from 'react';

import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Navbar from './components/Navbar/Navbar';
import ShadingBlock from './components/Custom/ShadingBlock/ShadingBlock';
import MainRouter from 'components/MainRouter/MainRouter';
import ConfirmModalContainer from 'components/ConfirmModal/ConfirmModalContainer';
import HintContainer from 'components/Hint/HintContainer';

import { AppWrapper, MainContainer } from 'AppStyles';

import { AppConnectedProps } from 'AppContainer';

import useWindowWidth from 'hooks/useWindowWidth';

const App: React.FC<AppConnectedProps> = (props) => {
  
  const { isDark, isAuth, setIsDark, fetchToCheckMe, confirmModalVisibility } = props;

  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const width = useWindowWidth();

  React.useEffect(() => {
    fetchToCheckMe();
    console.log(process.env.BACKEND_PORT);
  }, []);
  

  const darkOpacityClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsDark(false);
  }

  return (
    <AppWrapper>
      { isOpenSidebar ? <SidebarContainer setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} /> : null }

      <HeaderContainer isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      
      { isDark ? <ShadingBlock onClick={darkOpacityClick} /> : null } 

      { confirmModalVisibility ? <ConfirmModalContainer /> : null }

      { width >= 768 && !isAuth ? <HintContainer /> : null } 
      
      { width >= 768 ? <Navbar /> : null }

      <MainContainer>
      
        <MainRouter />
      
      </MainContainer>
      
      <Footer />
    </AppWrapper>
  );
}

export default App;
