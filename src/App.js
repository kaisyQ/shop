import logo from './logo.svg'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import CardAbout from './components/Catalog/Cards/Card/CardAbout'


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
      <Header />
      <MainContainer>
        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/catalog'>
              <Route path='' element={ <Catalog /> } />
              <Route path=':id' element={ <CardAbout /> } />
            </Route>
            <Route path='/contact' element={ <Contact /> } />
          </Routes>
        </main>
        <Footer />
      </MainContainer>
    </AppContainer>
  )
}

export default App;
