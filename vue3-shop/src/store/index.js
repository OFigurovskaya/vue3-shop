import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            productList: [],
            productsCategory: [],
            cardProducts: [],
            productBasket: [],
            addBasket: []
        }
    },
    getters: {
        PRODUCTLIST: state => {
            return state.productList.slice(0, 13);
        },
        PRODUCTSCATEGORY: state => {
            return state.productsCategory.slice(0, 5);
        },
        BASKETALL: state => {
            return state.productBasket;
        },

    },
    mutations: {
        SET_PRODUCT: (state, payload) => {
            state.productList = payload.data.items;
        },
        SET_CATEGORY: (state, payload) => {
            state.productsCategory = payload.data.items;
        },
        FILTER_PRODUCTS: async (state, id, payload) => {
            state.productList = await (await axios.get(`https://vue-moire.skillbox.cc/api/products?categoryId=${id}`)).data.items;
        },
        SET_BASKET: (state, payload) => {
            state.productBasket = payload.data.items;
        },
        ADD_BASKET: async (state, { productId, colorId, sizeId, quantity }, payload) => {
            state.addBasket =  await (await axios.post('https://vue-moire.skillbox.cc/api/baskets/products', { productId, colorId, sizeId, quantity })).data.items;
            state.productBasket.push(state.addBasket)
        }
         
    },
    actions: {
        GET_PRODUCT: async (context, payload) => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/products');
            context.commit('SET_PRODUCT', data);
        },

        GET_CATEGORY: async (context, payload) => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/productCategories');
            context.commit('SET_CATEGORY', data);
        },

        GET_BASKET: async (context, payload) => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/baskets');
            context.commit('SET_BASKET', data);
        },

       
        

    }
})

export default store;