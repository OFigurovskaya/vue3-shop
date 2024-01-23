<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import ProductFilters from '../components/ProductFilters.vue'
import { mapState } from 'vuex'
import UpButton from '../components/UpButton.vue';
import BasePreloader from '../components/BasePreloader.vue'

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
            'productListAll',
            'productsCategory',
            'key',
            'productsBasket',
            'isLoading',
        ]),

    },
    mounted() {
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
        UpButton,
        BasePreloader
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
        <BasePreloader />
        <ul class="cataloglist__list" v-if="!this.isLoading">
            <li class="cataloglist__item" v-for="product in this.productList" :key="product.id">
                <router-link :to="{ name: 'card', params: { id: product.id } }" v-for="elem in product.colors[0].gallery"
                    title="Посмотреть товар">
                    <img class="cataloglist__item-img mb-25" alt="" :src="elem.file.url">
                    <h4 class="cataloglist__item-title ">{{ product.title }}</h4>
                    <p class="cataloglist__item-price"> {{ product.price }} ₽</p>
                </router-link>
            </li>
        </ul>
        <UpButton />
    </main>
    <BaseFooter />
</template>



