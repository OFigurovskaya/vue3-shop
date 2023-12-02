<script>
import { mapState } from 'vuex'
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import axios from 'axios';
import SuccessPage from './SuccessPage.vue';

export default {
    name: 'OrderPage',
    data() {
        return {
            path: '/order',
            formData: {},
            formError: {},
            isOrder: false,
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbs,
        SuccessPage
    },
    computed: {
        ...mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'totalPrice',
            'delivery',
            'payments',
            'isLoading',
            'order'

        ]),
    },
    mounted() {
        this.$store.commit('loadKey');
        this.$store.dispatch('initBasket', this.key);
        this.$store.dispatch('initDelivery');
        this.$store.dispatch('initPayments');
        this.$store.commit('totalPriceload')

    },

    methods: {
        placeOrder() {
            this.isOrder = true;

            return (new Promise(resolve => setTimeout(resolve, 2000)))
                .then(() => {
                    this.formError = {};
                    this.formErrorMessage = '';
                    return axios
                        .post(`https://vue-moire.skillbox.cc/api/orders`, {
                            ...this.formData,
                        }, {
                            params: {
                                userAccessKey: this.key,
                            },
                        });
                })
                .then(response => {
                    this.$store.commit('updateOrderInfo', response.data);
                    this.$router.push({ name: 'success', params: { id: response.data.id } });
                    this.isOrder = false;
                })
                .catch(error => {
                    this.formError = error.response.data.error.request || {};
                    this.formErrorMessage = error.response.data.error.message;
                });
        },
    },

}

</script>

<template>
    <BaseHeader />


    <main class="orderpage container">
        <h1 class="orderpage__title title mt-8 mb-25">Оформление заказа</h1>
        <BreadCrumbs :path="path" name="Оформление заказа" />
        <div class="load mb-25" v-if="this.isLoading">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter ">
        </div>
        <div class="orderpage-wrapper" v-if="!this.isLoading">
            <div class="orderpage__form">
                <h3 class="orderpage__form-title">Данные покупателя</h3>
                <label class="orderpage__form-name">Имя
                    <input type="text" v-model="formData.name" placeholder="Введите Ваше имя" :error="formError.name">
                    <p class="error">{{ formError.name }}</p>
                </label>
                <label class="orderpage__form-tel">Телефон
                    <input type="tel" v-model.tel="formData.phone" placeholder="+79999999999" :error="formError.phone">
                    <p class="error">{{ formError.phone }}</p>
                </label>

                <label class="orderpage__form-email">email
                    <input type="email" v-model="formData.email" placeholder="123@mail.ru" :error="formError.email">
                    <p class="error">{{ formError.email }}</p>
                </label>
                <label class="orderpage__form-address">Адрес доставки
                    <input type="text" v-model="formData.address" placeholder="Введите Ваш адрес"
                        :error="formError.address">
                    <p class="error">{{ formError.address }}</p>
                </label>
                <textarea class="orderpage__form-comm" v-model="formData.comm"
                    placeholder="Комментарий к заказу"></textarea>
            </div>
            <div class="orderpage__details">
                <div class="orderpage__delivery">
                    <h4 class="orderpage__delivery-title">Доставка</h4>
                    <template v-for="elem in delivery">
                        <label class="orderpage__delivery-var">{{ elem.title }}: {{ elem.price }} ₽
                            <input type="radio" :value="elem.id" name="delivery-item" v-model="formData.deliveryTypeId">
                        </label>
                    </template>

                </div>
                <div class="orderpage__pay">
                    <h4 class="orderpage__pay-title">Оплата</h4>
                    <template v-for="elem in payments">
                        <label class="orderpage__pay-var">{{ elem.title }}: {{ elem.price }} ₽
                            <input type="radio" :value="elem.id" name="pay-item" v-model="formData.paymentTypeId">
                        </label>
                    </template>
                </div>
            </div>
            <div class="orderpage__order">Ваш заказ:
                <div v-for="elem in productsBasket" class="orderpage__order-wrapper">
                    <p class="orderpage__order-name">{{ elem.product.title }}</p>
                    <p class="orderpage__order-price"> {{ elem.quantity }} шт</p>
                </div>
                <p>Доставка: ₽</p>
                <p>Общая сумма: {{ totalPrice }} ₽</p>

            </div>

        </div>
        <button class="orderpage__button button" @click="placeOrder">Оформить заказ</button>
        <p v-show="this.isOrder">Заказ оформляется...</p>
    </main>
    <BaseFooter />
</template>

<style>
.error {
    color: red;
}
</style>