import React from 'react';
import HomePage from './pages/Home/HomePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import ProductListPage from './pages/ProductList/ProductListPage';
import ProductActionPage from './pages/ProductActions/ProductActionPage';

const routes = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage />
    },
    {
        path : "/products-list",
        exact : false,
        main : () => <ProductListPage />
    },
    {
        path : "/products/add",
        exact : false,
        main : ({history}) => <ProductActionPage history={history}/>
    },
    {
        path : "/products/:id/edit",
        exact : false,
        main : ({match, history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage />
    }
];

export default routes;