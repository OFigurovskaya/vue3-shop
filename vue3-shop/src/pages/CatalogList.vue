<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';

export default {
    name: 'CatalogList',
    data() {
        return {
            productsList: [],
            productsCategory: [],
            photo: []
        }
    },
    mounted() {
        axios
            .get('https://vue-moire.skillbox.cc/api/products')
            .then((response) => {
                this.productsList = response.data.items;
            });
        axios
            .get('https://vue-moire.skillbox.cc/api/productCategories')
            .then((response) => {
                this.productsCategory = response.data.items;
            })
    },
    computed: {
        getPhoto() {
            let arr = [];
            for (let product of this.productsList) {
                for (let elem of product.colors) {
                    this.photo.push(elem.gallery);
                }
            }
            return this.photo
        }
    },
    components: {
        Header,
        Footer
    },
}
</script>

<template>
    <Header />
    <main class="cataloglist container">
        <h1 class="cataloglist__title title">Магазин</h1>

        <div class="breadcrumbs">
            <router-link to="/" class="breadcrumbs__main">Главная</router-link>
            <span> — </span>
            <router-link to="/products" class="breadcrumbs__products">Магазин</router-link>
        </div>

        <div class="cataloglist__filter">
            <ul class="cataloglist__filter-menu">
                <li class="cataloglist__filter-item">
                    <button class="cataloglist__filter-button">Все</button>
                </li>
                <li class="cataloglist__filter-item" v-for="category in productsCategory" :key="category.id">
                    <button class="cataloglist__filter-button">{{ category.title }}</button>
                </li>
            </ul>
        </div>

        <ul class="cataloglist__list">

            <li class="cataloglist__item" v-for="product in productsList" :key="product.id">
                <h4 class="cataloglist__item-title">{{ product.title }}</h4>
                <p class="cataloglist__item-price"> {{ product.price }} ₽</p>
                <div class="cataloglist__item-img" v-for="elem in product.colors[0].gallery">
                    <img class="cataloglist__item-img"  alt=""  :src="elem.file.url">
                </div>
            </li>
        </ul>
    </main>
    <Footer />
</template>