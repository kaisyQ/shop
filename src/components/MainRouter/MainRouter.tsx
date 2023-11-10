import React from 'react';

import ProductAboutContainer from 'components/Catalog/Products/Product/ProductAbout/ProductAboutContainer';
import CartContainer from 'components/Cart/CartContainer';


import ContactViewContainer from 'views/ContactView/ContactViewContainer';
import SellSofaViewContainer from 'views/SellSofaView/SellSofaViewContainer';
import SearchContainer from 'components/Search/SearchContainer';

import { Routes, Route } from 'react-router-dom';

import Preloader from 'components/Ui/Preloader/Preloader';
import WebsiteTermsView from 'views/WebsiteTermsView/WebsiteTermsView';

const CatalogView = React.lazy(() => import('views/CatalogView/CatalogView'));
const HomeView = React.lazy(() => import ('views/HomeView/HomeView'));


const MainRouter: React.FC = () => {
    return (
        <>
            <React.Suspense fallback={<Preloader />}>
                <Routes>

                {
                    ['/', '/shop'].map((path, index) => <Route 
                            key={index}
                            path={path}
                            element={ <>
                                    <HomeView />    
                                </>
                            } 
                        />
                    )
                }

                    <Route path='/catalog'>
                        <Route 
                            path='' 
                            element={ <CatalogView /> }
                        />
                        <Route path=':id' element={ <ProductAboutContainer /> }/>
                    </Route>

                    <Route path='/contact' element={ <ContactViewContainer /> }/>

                    <Route path='/sell' element={ <SellSofaViewContainer />}/>

                    <Route path='/cart' element={ <CartContainer />} />

                    <Route path='/terms' element={<WebsiteTermsView />} />

                    <Route path='/search'>
                        <Route path='' element={ <SearchContainer />} /> 
                    </Route>
                </Routes>
            </React.Suspense>
        </>
    );
}

export default React.memo(MainRouter);