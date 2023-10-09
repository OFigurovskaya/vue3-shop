import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            productList: [],
            productsCategory: [],
            cardProducts: [],
        }
    },
    getters: {
        PRODUCTLIST: state => {
            return state.productList.slice(0, 13);
        },
        PRODUCTSCATEGORY: state => {
            return state.productsCategory.slice(0, 5);
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
        
        
    }
})

export default store;