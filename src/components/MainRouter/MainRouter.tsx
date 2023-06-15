import React from 'react';

import ContactView from 'views/ContactView/ContactView';
import ProductAboutContainer from 'components/Catalog/Products/Product/ProductAbout/ProductAboutContainer';
import PostAboutContainer from 'components/Posts/PostAbout/PostAboutContainer';
import AuthContainer from './../Auth/AuthContainer';
import Search from 'components/Search/Search';
import AdminContainer from 'components/Admin/AdminContainer';
import UserEditContainer from 'components/Admin/UserEdit/UserEditContainer';
import ProductEditContainer from 'components/Admin/ProductEdit/ProductEditContainer';
import PostEditContainer from 'components/Admin/PostEdit/PostEditContainer';

import UsersTableContainer from 'components/Admin/UsersTable/UsersTableContainer';
import ProductsTableContainer from 'components/Admin/ProductsTable/ProductsTableContainer';
import PostsTableContainer from 'components/Admin/PostsTable/PostsTableContainer';


import { Routes, Route } from 'react-router-dom';
import SellYourSofaView from 'views/SellSofaView/SellSofaView';


import TableSelector from 'components/Admin/TableSelector/TableSelector';

const CatalogView = React.lazy(() => import('views/CatalogView/CatalogView'));
const Posts = React.lazy(() => import('components/Posts/PostsContainer'));
const HomeView = React.lazy(() => import ('views/HomeView/HomeView'));

const MainRouter: React.FC = () => {
    return (
        <>
            <Routes>

            {
                ['/', '/shop'].map((path, index) => <>
                    <Route 
                        key={index}
                        path={path}
                        element={ <>
                                <React.Suspense fallback={<h2>Loading...</h2>}>
                                    <HomeView />    
                                </React.Suspense>
                            </>
                        } 
                    />
                </>)
            }

                <Route path='/catalog'>
                    <Route 
                        path='' 
                        element={ <>
                            <React.Suspense fallback={<h2>Loading...</h2>}>
                                <CatalogView /> 
                            </React.Suspense>
                        </>}
                    />
                    <Route path=':id' element={ <ProductAboutContainer /> } />
                </Route>

                <Route path='/contact' element={ <ContactView /> } />

                <Route path='/sell' element={<SellYourSofaView />} />

                <Route 
                    path='/posts' 
                    element={ <>    
                            <React.Suspense fallback={<h2>Loading...</h2>}>
                                <Posts /> 
                            </React.Suspense>
                        </>
                    } 
                />

                <Route path='/posts/:id'element={ <PostAboutContainer /> } />

                <Route path='/auth' element={<AuthContainer />} />

                <Route path='search' element={<Search />} />
                <Route path='/admin'>
                    
                    <Route path='' element={<AdminContainer />}>
                       {
                        ['usersTable', ''].map((path, index) => <>
                                <Route
                                    key={index} 
                                    path={path} element={<UsersTableContainer />} 
                                />
                            </>
                        )
                       }
                        <Route path='productsTable' element={<ProductsTableContainer />} />
                        <Route path='postsTable' element={<PostsTableContainer />} /> 
                    </Route>
                    
                    <Route path='user/:id?' element={<UserEditContainer />} />
                    <Route path='product/:id?' element={<ProductEditContainer />} />
                    <Route path='post/:id?' element={<PostEditContainer />} />

                </Route>
            </Routes>
        </>
    );
}

export default MainRouter;