<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import ProductFilters from '../components/ProductFilters.vue'
import BasePagination from '../components/BasePagination.vue';
import axios from 'axios';
import { mapState } from 'vuex'
import UpButton from '../components/UpButton.vue'

export default {
    name: 'CatalogList',
    data() {
        return {
            path: '/products',
            indexPage: 2,
        }
    },
    computed: {
        ...mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'isLoading',
            'page',
        ]),

    },

    mounted() {
        this.$store.dispatch('initList');
        this.$store.dispatch('initCategory');
        this.$store.dispatch('initKey');
        window.addEventListener('scroll', this.onScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
    },
    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbs,
        ProductFilters,
        BasePagination,
        UpButton
    },
    methods: {
        onScroll() {
            if(window.pageYOffset > 400) {
                document.querySelector('.upbutton').classList.remove('upbutton_none')
            } else {
                document.querySelector('.upbutton').classList.add('upbutton_none')
            }
        }
    },
}
</script>

<template>
    <BaseHeader :indexPage="indexPage" />

    <main class="cataloglist container" @scroll="onScroll">
        <h1 class="cataloglist__title title mt-8 mb-25">Магазин</h1>

        <BreadCrumbs :path="path" name="Магазин" />

        <ProductFilters />


        <div class="load mb-25" v-if="this.isLoading">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter ">
        </div>
        <ul class="cataloglist__list" v-if="!this.isLoading">
            <li class="cataloglist__item" v-for="product in productList" :key="product.id">
                <router-link :to="{ name: 'card', params: { id: product.id } }" v-for="elem in product.colors[0].gallery"
                    title="Посмотреть товар">
                    <img class="cataloglist__item-img mb-25" alt="" :src="elem.file.url">
                    <h4 class="cataloglist__item-title ">{{ product.title }}</h4>
                    <p class="cataloglist__item-price"> {{ product.price }} ₽</p>
                </router-link>
            </li>
        </ul>
        <BasePagination  />
        <UpButton />
    </main>
    <BaseFooter />
</template>



