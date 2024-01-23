<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
    name: 'ProductFilters',
    data() {
        return {
            from: 0,
            to: 0,
            currentId: -1,
        }
    },
    mounted() {
            this.$store.dispatch('initList');
            this.$store.dispatch('initCategory');
    },
    ummounted() {
            this.$store.dispatch('initList');
            this.$store.dispatch('initCategory');
    },
    computed:
        mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'isLoading'
        ]),
    methods: {
        filter(from, to) {
            this.$store.commit('loadFilterPrice', { from, to })
        },
        reset() {
            this.$store.dispatch('filterCategory');
            this.from = 0;
            this.to = 0;
        },
        filterCat(id) {
            this.$store.dispatch('filterCategory', id)
            if(this.productList.length === 14) {
                return this.productList.slice(0, 13)
            }
        },
    }
}
</script>


<template>
    <div class="cataloglist__filter mb-8" v-if="!this.isLoading">
        <ul class="cataloglist__filter-menu">
            <li class="cataloglist__filter-item">
                <button class="cataloglist__filter-buttonAll button" @click="filterCat(0), this.currentId = 0"
                    :class="{ active: this.currentId === 0 }">Все</button>
            </li>
            <li class="cataloglist__filter-item" v-for="category in productsCategory" :key="category.id">
                <button class="cataloglist__filter-button button" @click="filterCat(category.id), this.currentId = category.id"
                    :class="{ active: category.id === this.currentId }">{{ category.title }}
                </button>
            </li>
        </ul>
        <form action="#" class="cataloglist__filter-price">
            <h3 class="titleThree">Фильтровать по цене</h3>
            <label for="from">от</label>
            <input type="text" id="from" class="filter-price button" v-model="this.from">
            <label for="to">до</label>
            <input type="text" id="to" class="filter-price button" v-model="this.to">

            <button class="button filter-go" @click.prevent="filter(this.from, this.to)">Применить</button>
            <button class="button filter-reset" @click.prevent="reset">Сбросить</button>
        </form>
    </div>
</template>

<style>
.active {
    background-color: #000;
    color: white;
    border-color: #000;
}
</style>