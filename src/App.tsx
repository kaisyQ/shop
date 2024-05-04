import React from 'react';

import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Navbar from './components/Navbar/Navbar';
import ShadingBlock from './components/Custom/ShadingBlock/ShadingBlock';
import MainRouter from 'components/MainRouter/MainRouter';
import LiveChat from 'components/LiveChat/LiveChat';
import { Toaster } from 'sonner';

import { AppWrapper, MainContainer } from 'AppStyles';

import { AppConnectedProps } from 'AppContainer';

import useWindowWidth from 'hooks/useWindowWidth';

import { useProductsLimitSetter } from 'hooks/useProductLimitSetter';

const App: React.FC<AppConnectedProps> = (props) => {

  const { isDark, setIsDark } = props;

  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const width = useWindowWidth();

  useProductsLimitSetter();

  const darkOpacityClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsDark(false);
  }

  return (
    <AppWrapper>
      <Toaster richColors />
      
      {isOpenSidebar ? <SidebarContainer setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} /> : null}

      <HeaderContainer isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />

      {isDark ? <ShadingBlock onClick={darkOpacityClick} /> : null}

      <LiveChat />

      {width >= 768 ? <Navbar /> : null}

      <MainContainer>
        <MainRouter />
      </MainContainer>

      <Footer />
    </AppWrapper>
  );
}

export default App;
