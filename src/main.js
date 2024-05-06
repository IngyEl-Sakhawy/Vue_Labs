import { createApp } from 'vue'
import App from './App.vue'

import { createRouter , createWebHistory } from 'vue-router';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import HomePage from './components/HomePage.vue';
import ProductsPage from './components/ProductsPage.vue';
import ProductDetails from './components/ProductDetails.vue';
import AddProduct from './components/AddProduct.vue';
import ErrorPage from './components/ErrorPage.vue';


const routes = [
    {
        path:'/', component:HomePage
    },
    {
        path:'/products',
        component:ProductsPage
    },
    {
        path:'/products/:id',
        component:ProductDetails
    },
    {
        path:'/add',
        component:AddProduct
    },
    {
        path:'/add/:id',
        component:AddProduct
    },
    {
        path:'/:NotFound(.*)*',
        component:ErrorPage,
        meta:{hideNavbar:true}
    }
];

let router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
