<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import { mapState } from 'vuex'

export default {
    name: 'BasketPage',
    data() {
        return {
            path: '/baskets',
            indexPage: 2
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbs,
    },
    computed: {
        ...mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'totalPrice',
            'isLoading'
        ]),
    },
    mounted() {
        this.$store.commit('loadKey');
        this.$store.dispatch('initBasket', this.key);
        this.$store.commit('totalPriceload')
    },
    methods: {
        plus(id, num) {
            this.$store.commit('plus', id, num);
            this.$store.commit('totalPriceload')
        },
        minus(id, num) {
            this.$store.commit('minus', id, num);
            this.$store.commit('totalPriceload')
        },
        deleteProduct(id) {
            this.$store.dispatch('basketDelete', id);
            this.$store.commit('totalPriceload')
        },
    }
}
</script>

<template>
    <BaseHeader :indexPage="indexPage"/>
    <main class="basketpage container">
        <h1 class="basketpage__title title mt-8 mb-25">Корзина</h1>
        <BreadCrumbs :path="path" name="Корзина" />
        
        <div class="load mb-25" v-if="this.isLoading">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter ">
        </div>

        <div class="basketpage__list" v-if="!this.isLoading">
            <div class="basketpage__item" v-for="(elem, index) in productsBasket">
                <img :src="elem.color.gallery[0].file.url" :alt="elem.product.title" class="basketpage__item-img">
                <h3 class="basketpage__item-title">{{ elem.product.title }}</h3>
                <div class="basketpage__item-price">
                    <p class="basketpage__item-priceAll">Цена за штуку: {{ elem.price }} ₽</p>
                    Общая сумма до скидки: 
                    <p class="basketpage__item-priceBefore priceBefore"> {{ (elem.price * elem.quantity) }} ₽</p>
                    <p class="basketpage__item-priceAfterText">Общая сумма с учетом скидки 10%: </p>
                    <p class="basketpage__item-priceAfter">
                        {{ (elem.price * elem.quantity) -
                            Math.round((elem.price * elem.quantity) * 10 / 100) }} ₽</p>
                </div>
                <div class="cardCount">
                    Количество:
                    <button type="button" aria-label="Убрать один товар" @click="minus(elem.id, elem.quantity)"
                        class="button cardCount__button">-</button>
                    <input type="text" name="quantity" v-model="elem.quantity" class="cardCount__input" :disabled="true">
                    <button type="button" aria-label="Добавить один товар" @click="plus(elem.id, elem.quantity)"
                        class="button cardCount__button">+</button>
                </div>

                <button @click="deleteProduct(elem.id)" class="button basketpage__item-buttonDelete button">Удалить товар</button>
            </div>
        </div>
        <p class="basketpage__totalPrice">Итоговая сумма: {{ totalPrice }} ₽</p>

        <router-link tag="button" to="order" class="basketpage__order button">заказать</router-link>

    </main>
    <BaseFooter />
</template>