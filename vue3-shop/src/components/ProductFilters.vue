<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
    name: 'ProductFilters',
    data() {
        return {
            from: 0,
            to: 0
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
    methods: {
        filter(from, to) {
            this.$store.commit('loadFilterPrice', { from, to })
        },
        reset() {
            this.$store.dispatch('filterCategory'); 
        }
    }
}
</script>


<template>
    <form action="#" class="cataloglist__filter-price">
        <h3 class="titleThree">Фильтровать по цене</h3>
        <label for="from">от</label>
        <input type="text" id="from" class="filter-price button" v-model="this.from">
        <label for="to">до</label>
        <input type="text" id="to" class="filter-price button" v-model="this.to">
        
        <button class="button filter-go" @click.prevent="filter(this.from, this.to)">Применить</button>
        <button class="button filter-reset" @click.prevent="reset">Сбросить</button>
    </form>
</template>