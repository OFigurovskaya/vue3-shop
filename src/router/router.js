import { createRouter, createWebHashHistory } from 'vue-router';
import BasketPage from '../pages/BasketPage.vue';
import BrandPage from '../pages/BrandPage.vue';
import CardProduct from '../pages/CardProduct.vue';
import CatalogList from '../pages/CatalogList.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import MainPage from '../pages/MainPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import OrderPage from '../pages/OrderPage.vue';
import SuccessPage from '../pages/SuccessPage.vue';

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/baskets',
            name: 'baskets',
            component: BasketPage
        },
        {
            path: '/brand',
            name: 'brand',
            component: BrandPage
        },
        {
            path: '/product/:id',
            name: 'card',
            component: CardProduct
        },
        {
            path: '/products',
            name: 'catalog',
            component: CatalogList
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/:notFound(.*)',
            name: 'notpage',
            component: NotFoundPage
        },
        {
            path: '/order/',
            name: 'order',
            component: OrderPage
        },
        {
            path: '/success/:id',
            name: 'success',
            component: SuccessPage
        },
    ],
    history: createWebHashHistory()
})

export default router;