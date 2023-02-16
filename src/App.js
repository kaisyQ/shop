
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CardAbout from './components/Catalog/Cards/Card/CardAbout'

import AdminRouterContainer from './components/AdminRouter/AdminRouterContainer'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'


const AppContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0 auto;
  color: #123C69;
`

const MainContainer = styled.div`
  max-width: 33rem;
  margin: 0 auto;
  z-index: 1;
`


function App() {
  return (
    <AppContainer>

      <Routes>
        <Route path='/admin/*' element={<AdminRouterContainer />} />
        <Route path='*' element={ (
          <>
            <Header />
            <MainContainer>
              <main>
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
                </Routes>
              </main>
              <Footer />
            </MainContainer>
          </>)} 
        />
      </Routes>
    </AppContainer>
  )
}

export default App;
