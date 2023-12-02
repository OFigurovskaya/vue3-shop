<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import axios from 'axios';
import { mapState } from 'vuex'

export default {
    name: 'CatalogList',
    data() {
        return {
            // isLoading: false,
            path: '/products',
            productsAmount: 7,
            currentId: -1
        }
    },
    computed:
        mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'isLoading'
        ]),
    mounted() {
            this.$store.dispatch('initList');
            this.$store.dispatch('initCategory');
            this.$store.dispatch('initKey');
    },
    methods: {
        filter(id) {
            this.$store.dispatch('filterCategory', id)
            if(this.productList.length === 14) {
                return this.productList.slice(0, 13)
            }
        },
    },

    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbs
    },
}
</script>

<template>
    <BaseHeader />

    <main class="cataloglist container">
        <h1 class="cataloglist__title title mt-8 mb-25">Магазин</h1>

        <BreadCrumbs :path="path" name="Магазин" />

        <div class="cataloglist__filter mb-8" v-if="!this.isLoading">
            <ul class="cataloglist__filter-menu">
                <li class="cataloglist__filter-item">
                    <button class="cataloglist__filter-buttonAll button" @click="filter(0), this.currentId = 0"
                        :class="{ active: this.currentId === 0 }">Все</button>
                </li>
                <li class="cataloglist__filter-item" v-for="category in productsCategory" :key="category.id">
                    <button class="cataloglist__filter-button button"
                        @click="filter(category.id), this.currentId = category.id"
                        :class="{ active: category.id === this.currentId }">{{ category.title }}
                    </button>
                </li>
            </ul>
        </div>


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
        <button>x</button>
    </main>
    <BaseFooter />
</template>


<style>
.active {
    background-color: #000;
    color: white;
    border-color: #000;
}
</style>

