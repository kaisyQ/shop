import React from 'react';

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
import ContactViewContainer from 'views/ContactView/ContactViewContainer';
import SellSofaViewContainer from 'views/SellSofaView/SellSofaViewContainer';
import CommentTableContainer from 'components/Admin/CommentsTable/CommentTableContainer';

import SuspenseWrapper from 'components/SuspenseWrapper/SuspenseWrapper';


import { Routes, Route } from 'react-router-dom';


const CatalogView = React.lazy(() => import('views/CatalogView/CatalogView'));
const Posts = React.lazy(() => import('components/Posts/PostsContainer'));
const HomeView = React.lazy(() => import ('views/HomeView/HomeView'));
const Admin = React.lazy(() => import("components/Admin/AdminContainer"));

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
                                <SuspenseWrapper>
                                    <HomeView />    
                                </SuspenseWrapper>
                            </>
                        } 
                    />
                </>)
            }

                <Route path='/catalog'>
                    <Route 
                        path='' 
                        element={ <>
                            <SuspenseWrapper>
                                <CatalogView /> 
                            </SuspenseWrapper>
                        </>}
                    />
                    <Route path=':id' element={
                        <ProductAboutContainer /> 
                    }/>
                </Route>

                <Route path='/contact' element={ 
                    <SuspenseWrapper>
                        <ContactViewContainer />
                    </SuspenseWrapper> 
                }/>

                <Route path='/sell' element={
                    <SuspenseWrapper>
                        <SellSofaViewContainer />
                    </SuspenseWrapper>
                }/>

                <Route 
                    path='/posts' 
                    element={ <>    
                            <SuspenseWrapper>
                                <Posts /> 
                            </SuspenseWrapper>
                        </>
                    } 
                />

                <Route path='/posts/:id'element={ 
                    <PostAboutContainer /> 
                }/>

                <Route path='/auth' element={<AuthContainer />} />

                <Route path='search' element={<Search />} />
                <Route path='/admin'>
                    
                    <Route path='' element={<>
                            <SuspenseWrapper>
                                <Admin /> 
                            </SuspenseWrapper>
                        </>
                    }>
                       {
                        ['productsTable', ''].map((path, index) => <>
                                <Route
                                    key={index} 
                                    path={path} element={<ProductsTableContainer />}
                                />
                            </>
                        )
                       }
                        <Route path='usersTable' element={
                            <UsersTableContainer /> 
                        }/>
                        <Route path='postsTable' element={
                            <PostsTableContainer />
                        }/> 
                        <Route path='commentsTable' element={
                            <CommentTableContainer />
                        }/> 
                    </Route>
                    
                    <Route path='user/:id?' element={
                        <UserEditContainer />
                    }/>
                    <Route path='product/:id?' element={
                        <ProductEditContainer />
                    }/>
                    <Route path='post/:id?' element={
                        <PostEditContainer />
                    }/>

                </Route>
            </Routes>
        </>
    );
}

export default MainRouter;