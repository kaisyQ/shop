import React from 'react';

import HomeView from 'views/HomeView/HomeView';
import CatalogView from 'views/CatalogView/CatalogView';
import ContactView from 'views/ContactView/ContactView';
import CardAboutContainer from 'components/Catalog/Cards/Card/CardAbout/CardAboutContainer';
import PostsContainer from 'components/Posts/PostsContainer';
import PostAboutContainer from 'components/Posts/PostAbout/PostAboutContainer';
import AuthContainer from './../Auth/AuthContainer';
import Search from 'components/Search/Search';
import AdminContainer from 'components/Admin/AdminContainer';
import UserEditContainer from 'components/Admin/UserEdit/UserEditContainer';
import ProductEditContainer from 'components/Admin/ProductEdit/ProductEditContainer';
import PostEditContainer from 'components/Admin/PostEdit/PostEditContainer';


import { Routes, Route } from 'react-router-dom';

const MainRouter: React.FC = () => {
    return (
        <>
            <Routes>

            {
                ['/', '/shop'].map((path, index) => <>
                    <Route 
                        key={index}
                        path={path}
                        element={ <HomeView /> } />
                </>)
            }

            <Route path='/catalog'>
                <Route path='' element={ <CatalogView /> } />
                <Route path=':id' element={ <CardAboutContainer /> } />
            </Route>

            <Route path='/contact' element={ <ContactView /> } />

            <Route path='/posts' element={ <PostsContainer /> } />

            <Route path='/posts/:id'element={ <PostAboutContainer /> } />

            <Route path='auth' element={<AuthContainer />} />

            <Route path='search' element={<Search />} />

            <Route path='/admin'>
                <Route path='' element={<AdminContainer />} />
                <Route path='user/:id?' element={<UserEditContainer />} />
                <Route path='product/:id?' element={<ProductEditContainer />} />
                <Route path='post/:id?' element={<PostEditContainer />} />
            </Route>

            </Routes>
        </>
    );
}

export default MainRouter;