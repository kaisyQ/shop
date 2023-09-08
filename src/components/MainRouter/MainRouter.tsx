import React from 'react';

import ProductAboutContainer from 'components/Catalog/Products/Product/ProductAbout/ProductAboutContainer';
import PostAboutContainer from 'components/Posts/PostAbout/PostAboutContainer';
import AuthContainer from './../Auth/AuthContainer';
import UserEditContainer from 'components/Admin/UserEdit/UserEditContainer';
import ProductEditContainer from 'components/Admin/ProductEdit/ProductEditContainer';
import PostEditContainer from 'components/Admin/PostEdit/PostEditContainer';
import CartContainer from 'components/Cart/CartContainer';


import UsersTableContainer from 'components/Admin/UsersTable/UsersTableContainer';
import ProductsTableContainer from 'components/Admin/ProductsTable/ProductsTableContainer';
import PostsTableContainer from 'components/Admin/PostsTable/PostsTableContainer';
import ContactViewContainer from 'views/ContactView/ContactViewContainer';
import SellSofaViewContainer from 'views/SellSofaView/SellSofaViewContainer';
import CommentTableContainer from 'components/Admin/CommentsTable/CommentTableContainer';
import SearchContainer from 'components/Search/SearchContainer';
import AdminView from 'components/Admin/AdminContainer';

import { Routes, Route } from 'react-router-dom';

import Preloader from 'components/Ui/Preloader/Preloader';
import WebsiteTermsView from 'views/WebsiteTermsView/WebsiteTermsView';


const CatalogView = React.lazy(() => import('views/CatalogView/CatalogView'));
const Posts = React.lazy(() => import('components/Posts/PostsContainer'));
const HomeView = React.lazy(() => import ('views/HomeView/HomeView'));
const Admin = React.lazy(() => import("components/Admin/AdminContainer"));


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

                    <Route path='/posts' element={ <Posts /> } />

                    <Route path='/posts/:id'element={ <PostAboutContainer /> }/>

                    <Route path='/auth' element={<AuthContainer />} />

                    <Route path='/search'>
                        <Route path='' element={ <SearchContainer />} /> 
                    </Route>
                    <Route path='/admin'>
                        
                        <Route path='' element={ <AdminView /> }>
                        {
                            ['productsTable', ''].map((path, index) => <Route
                                        key={index} 
                                        path={path} element={<ProductsTableContainer />}
                                    />
                            )
                        }
                            <Route path='usersTable' element={ <UsersTableContainer /> }/>
                            <Route path='postsTable' element={ <PostsTableContainer /> }/> 
                            <Route path='commentsTable' element={ <CommentTableContainer /> }/> 
                        </Route>
                        
                        <Route path='user/:id?' element={ <UserEditContainer /> }/>
                        <Route path='product/:id?' element={ <ProductEditContainer /> }/>
                        <Route path='post/:id?' element={ <PostEditContainer /> }/>

                    </Route>
                </Routes>
            </React.Suspense>
        </>
    );
}

export default React.memo(MainRouter);