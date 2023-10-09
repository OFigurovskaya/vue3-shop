<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import axios from 'axios';

export default {
    name: 'CatalogList',
    data() {
        return {
            isLoading: false,
            path: '/products',
            productsAmount: 7,
        }
    },
    computed: {
        productsList() {
            return this.$store.getters.PRODUCTLIST;
        },
        productsCategory() {
            return this.$store.getters.PRODUCTSCATEGORY;
        },

    },
    mounted() {
        this.isLoading = true;
        setTimeout(() => {
            this.$store.dispatch('GET_PRODUCT');
            this.$store.dispatch('GET_CATEGORY');
            this.isLoading = false;
        }, 2000);
    },
    methods: {
        getFilter(id) {
            this.$store.commit('FILTER_PRODUCTS', id)
        },
        reset() {
            this.$store.dispatch('GET_PRODUCT');
        }
    },

    components: {
        Header,
        Footer,
        BreadCrumbs
    },
}
</script>

<template>
    <Header />
   
    <main class="cataloglist container">
        <h1 class="cataloglist__title title mt-8 mb-25">Магазин</h1>

        <BreadCrumbs :path="path" />

        <div class="cataloglist__filter mb-8">
            <ul class="cataloglist__filter-menu">
                <li class="cataloglist__filter-item">
                    <button class="cataloglist__filter-buttonAll button" @click="reset">Все</button>
                </li>
                <li class="cataloglist__filter-item" v-for="category in productsCategory" :key="category.id">
                    <button class="cataloglist__filter-button button" @click="getFilter(category.id)">{{ category.title }}
                    </button>
                </li>
            </ul>
        </div>


        <div class="load mb-25" v-if="this.isLoading">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter ">
        </div>
        <ul class="cataloglist__list">
            <li class="cataloglist__item" v-for="product in this.productsList" :key="product.id">
                <router-link :to="{ name: 'card', params: { id: product.id } }" v-for="elem in product.colors[0].gallery"
                    title="Посмотреть товар">
                    <img class="cataloglist__item-img mb-25" alt="" :src="elem.file.url">
                    <h4 class="cataloglist__item-title ">{{ product.title }}</h4>
                    <p class="cataloglist__item-price"> {{ product.price }} ₽</p>
                </router-link>
            </li>
        </ul>
        <button>x</button>
    </main>
    <Footer />
</template>