<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import { mapState } from 'vuex'
import UpButton from '../components/UpButton.vue';
import BasePreloader from '../components/BasePreloader.vue'

export default {
    name: 'BasketPage',
    data() {
        return {
            path: '/baskets',
            indexPage: 2,
            isDisabled: true
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbs,
        UpButton,
        BasePreloader
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
        window.addEventListener('scroll', this.onScroll);
        this.$store.commit('totalPriceload')
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
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
        },
        onScroll() {
            if (window.pageYOffset > 400) {
                document.querySelector('.upbutton').classList.remove('upbutton_none')
            } else {
                document.querySelector('.upbutton').classList.add('upbutton_none')
            }
        }
    }
}
</script>

<template>
    <BaseHeader :indexPage="indexPage" />
    <main class="basketpage container" @scroll="onScroll">
        <h1 class="basketpage__title title mt-8 mb-25">Корзина</h1>
        <BreadCrumbs :path="path" name="Корзина" />

        <BasePreloader />

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

                <button @click.prevent="deleteProduct(elem.id)" class="button basketpage__item-buttonDelete button">Удалить
                    товар</button>
            </div>
        </div>
        <p class="basketpage__totalPrice">Итоговая сумма:
            {{ this.totalPrice }} ₽</p>

        <router-link tag="button" to="order" class="basketpage__order button"
            :class="{ basketpage__order_disabled: this.totalPrice === 0 }"><a>заказать</a></router-link>
        <UpButton />
    </main>
    <BaseFooter />
</template>