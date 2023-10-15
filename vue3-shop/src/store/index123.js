import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            productList: [],
            productsCategory: [],
            cardProducts: [],
            productBasket: [],
            addBasket: [],
            userKey: null
        }
    },
    actions: {
        GET_PRODUCTLIST: async (context, payload) => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/products');
            context.commit('SET_PRODUCTLIST', data);
            console.log(data);
        },
    
    },
        mutations: {
            SET_PRODUCTLIST: (state, payload) => {
                state.productList = payload;
            },
        },

        getters: {
            PRODUCTLIST(state) {
                return state.productList;
            },

        },


    })


        // GET_PRODUCT: async (context, payload) => {
        //     let data = await axios.get('https://vue-moire.skillbox.cc/api/products');
        //     context.commit('SET_PRODUCT', data);
        // },

        // GET_CATEGORY: async (context, payload) => {
        //     let data = await axios.get('https://vue-moire.skillbox.cc/api/productCategories');
        //     context.commit('SET_CATEGORY', data);
        // },

        // GET_BASKET: async (context, key, payload) => {
        //     let data = await axios.get('https://vue-moire.skillbox.cc/api/baskets', {
        //         params: { userAccessKey: key }
        //     });
        //     context.commit('SET_KEY', data);
        //     context.commit('SET_BASKET', data);
        // },

        // GET_ADD: async (context, { productId, colorId, sizeId, quantity, key }, payload) => {
        //     let data = ((await axios.post('https://vue-moire.skillbox.cc/api/baskets/products', { productId, colorId, sizeId, quantity }, { params: { userAccessKey: key } })));
        //     context.commit('ADD_BASKET', data);
        // }

        //

// 

export default store;

