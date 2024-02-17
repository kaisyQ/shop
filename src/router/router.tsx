import React from 'react';
import CartContainer from 'components/Cart/CartContainer';
import ContactViewContainer from 'views/ContactView/ContactViewContainer';
import SellSofaViewContainer from 'views/SellSofaView/SellSofaViewContainer';
import SearchContainer from 'components/Search/SearchContainer';
import WebsiteTermsView from 'views/WebsiteTermsView/WebsiteTermsView';
import PaymentView from 'views/PaymentView/PaymentView';

const CatalogView = React.lazy(() => import('views/CatalogView/CatalogView'));
const HomeView = React.lazy(() => import ('views/HomeView/HomeView'));
const ProductView = React.lazy(() => import('views/ProductView/ProductViewContainer'));

export interface IRoute {
    path: string,
    title: string,
    key: string | number,
    component: React.ReactNode
}

const router: Array<IRoute> = [
    {
        path: '/',
        title: 'Home',
        key: 'home-1',
        component: <HomeView />
    },
    {
        path: '/home',
        title: 'home',
        key: 'home-2',
        component: <HomeView />
    },
    {
        path: '/shop',
        title: 'home',
        key: 'home-3',
        component: <HomeView />
    },
    {
        path: '/catalog',
        title: 'Catalog',
        key: 'catalog',
        component: <CatalogView />
    },
    {
        path: '/catalog/:id',
        title: 'Show Catalog Product',
        key: 'catalog-id',
        component: <ProductView />
    },
    {
        path: '/contact',
        title: 'Contact',
        key: 'contact',
        component: <ContactViewContainer />
    },
    {
        path: '/sell-your-sofa',
        title: 'Sell your sofa',
        key: 'sell-your-sofa',
        component: <SellSofaViewContainer />
    },
    {
        path: '/cart',
        title: 'Cart',
        key: 'cart',
        component: <CartContainer />
    },
    {
        path: '/terms',
        title: 'Terms',
        key: 'terms',
        component: <WebsiteTermsView />
    },
    {
        path: '/search',
        title: 'Search',
        key: 'search',
        component: <SearchContainer />
    },
    {
        path: '/payment',
        title: 'Payment',
        key: 'payment',
        component: <PaymentView />
    }
];

export default router;