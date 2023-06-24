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


const App: React.FC<AppConnectedProps> = (props) => {
  
  const { isDark, isHint, setIsHint, setIsDark, fetchToCheckMe, confirmModalVisibility } = props;

  const date = new Date();

  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const seconds = date.getSeconds();
  const min = date.getMinutes();
  const hours = date.getHours();

  const [time, setTime] = React.useState(0);
  const [startTime, setStartTime] = React.useState(hours*60*60+min*60+seconds);
  const [timerInterval, setTimerInterval] = React.useState<number | null>(null);
  const [isRunningTimer, setIsRunningTimer] = React.useState(true);

  React.useEffect(() => {
    fetchToCheckMe();
  }, []);
  
  React.useEffect(() => {

    if (!isRunningTimer) {
      return () => {
        if (timerInterval) {
          clearInterval(timerInterval);
        }
      }
    }

    const updateTime = () => {
      const date = new Date();
      const seconds = date.getSeconds();
      const min = date.getMinutes();
      const hours = date.getHours();
      
      if (time === 300) {
        setIsHint(true);
        setIsRunningTimer(false);
        return;
      }

      setTime(() => {
          return hours*60*60+min*60+seconds-startTime;
      });
    }
    
    const timer = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [time, isRunningTimer]);

  const darkOpacityClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsDark(false);
  }

  return (
    <AppWrapper>
      { isOpenSidebar ? <SidebarContainer setIsOpen={setIsOpenSidebar} isOpen={isOpenSidebar} /> : null }

      <HeaderContainer isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      
      { isDark ? <ShadingBlock onClick={darkOpacityClick} /> : null } 

      { confirmModalVisibility ? <ConfirmModalContainer /> : null }

      { isHint ? <HintContainer /> : null } 
      
      <Navbar />

      <MainContainer>
      
        <MainRouter />
      
      </MainContainer>
      
      <Footer />
    </AppWrapper>
  );
}

export default App;
