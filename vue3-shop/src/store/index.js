import { createStore, createLogger } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            productList: [],
            productsCategory: [],
            key: null,
            productsBasket: [],
            cardProduct: [],
            addBasketArr: [],
            totalPrice: 0,
            delivery: [],
            payments: [],
            orderInfo: null,
            isLoading: false,
            limitPage: 3,
            page: 1,
        }
    },
    mutations: {
        loadlist(state, payload) {
            state.productList = payload.data.items.slice(0, 13);
        },
        loadCategory(state, payload) {
            state.productsCategory = payload.data.items.slice(0, 5);
        },
        loadFilter(state, payload) {
            state.productList = payload.data.items
        },
        loadKey(state, payload) {
            if (!localStorage.getItem('key')) {
                state.key = payload.data.accessKey;
                localStorage.setItem('key', state.key)
            } else {
                state.key = localStorage.getItem('key')
            }
        },
        loadBasket(state, payload) {
            state.productsBasket = payload.data.items
        },
        loadCardProduct(state, payload) {
            state.cardProduct = payload.data;
        },
        plus(state, id, num) {
            for (let elem of state.productsBasket) {
                if (elem.id === id) {
                    elem.quantity++;
                }
            }
        },
        minus(state, id, num) {
            for (let elem of state.productsBasket) {
                if (elem.id === id) {
                    if (elem.quantity > 0) {
                        elem.quantity--;
                    }
                }
            }
        },

        totalPriceload(state) {
            let sum = 0;
            for (let elem of state.productsBasket) {
                sum += ((elem.price * elem.quantity) - Math.round((elem.price * elem.quantity) * 10 / 100));
            }
            state.totalPrice = sum
        },

        loadDelivery(state, payload) {
            state.delivery = payload.data
        },

        loadPayments(state, payload) {
            state.payments = payload.data
        },

        updateOrderInfo(state, orderInfo) {
            state.orderInfo = orderInfo;
          },

        loadFilterPrice(state, { from, to }) {
                state.productList = state.productList.filter(elem => {
                    if (elem.price >= from && elem.price <= to) {
                        return elem
                    }
                })
               
        },

    },

    actions: {
        initList: async (context) => {
            context.state.isLoading = true;
            setTimeout(async () => {
                let data = await axios.get(`https://vue-moire.skillbox.cc/api/products`)
                    .catch((error) => console.log(error.message));
                context.commit('loadlist', data);
                context.state.isLoading = false;
            }, 2000);
        },

        // initList: async (context ) => {
        //     context.state.isLoading = true;
        //     setTimeout(async () => {
        //         let data = await axios.get(`https://vue-moire.skillbox.cc/api/products?page=${context.state.page}&limit=${context.state.limitPage}`)
        //             .catch((error) => console.log(error.message));
        //         context.commit('loadlist', data);
        //         context.state.isLoading = false;
        //     }, 2000);
        // },
        
        initCategory: async (context) => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/productCategories')
                .catch((error) => console.log(error.message));
            context.commit('loadCategory', data);
        },
        filterCategory: async (context, id) => {
            let data = await axios.get(`https://vue-moire.skillbox.cc/api/products?categoryId=${id}&limit=${context.state.limitPage}`)
                .catch((error) => console.log(error.message));
            context.commit('loadFilter', data);
        },
        initKey: async (context) => {
            context.state.isLoading = true;
            setTimeout(async () => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/users/accessKey')
                .catch((error) => console.log(error.message));;
            context.commit('loadKey', data)
            context.state.isLoading = false;
            }, 2000);
        },
        initBasket: async (context, key) => {
                let data = await axios.get(`https://vue-moire.skillbox.cc/api/baskets?userAccessKey=${key}`)
                    .catch((error) => console.log(error.message));
                context.commit('loadBasket', data)
                
        },
        initCardProduct: async (context, id) => {
            let data = await axios.get(`https://vue-moire.skillbox.cc/api/products/${id}`)
                .catch((error) => console.log(error.message));
            context.commit('loadCardProduct', data)
        },
        addBasket: async (context, { productId, colorId, sizeId, quantity, key }) => {
            let data = await axios.post('https://vue-moire.skillbox.cc/api/baskets/products', { productId, colorId, sizeId, quantity }, { params: { userAccessKey: key } })
                .catch((error) => console.log(error.response.data.error.request));
            if (data) {
                document.querySelector('.okText').innerHTML = '';
                document.querySelector('.errorText').innerHTML = '';
                document.querySelector('.okText').innerHTML = 'Товар добавлен!';
                context.commit('loadBasket', data);
            } else {
                document.querySelector('.errorText').innerHTML = '';
                document.querySelector('.okText').innerHTML = '';
                document.querySelector('.errorText').innerHTML = 'Вы не выбрали цвет или размер, товар не добавлен';
            }
        },

        basketDelete: async (context, id) => {
            let data = await axios.request(`https://vue-moire.skillbox.cc/api/baskets/products?userAccessKey=${context.state.key}`, {
                data: {
                    basketItemId: id
                },
                method: 'delete'
            })
                .catch((error) => console.log(error.message));
            context.commit('loadBasket', data);
        },
        initDelivery: async (context) => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/deliveries');
            context.commit('loadDelivery', data)
        },
        initPayments: async (context) => {
            let data = await axios.get('https://vue-moire.skillbox.cc/api/payments?deliveryTypeId=1')
            context.commit('loadPayments', data)
        },
        loadOrderInfo(context, orderId) {
            return axios
            .get('https://vue-moire.skillbox.cc/api/orders/' + orderId, {
              params: {
                userAccessKey: context.state.key
              }
            })
            .then(response => {
              context.commit('updateOrderInfo', response.data);
            })
          },
        
        

    },
    getters: {

    },
    plugins: [createLogger()]
})

export default store;

