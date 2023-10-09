<script>
import axios from 'axios';

export default {
    name: 'ProductFilters',
    data() {
        return {
            productsCategory: []
        }
    },
    emits: ['cat1'],
    mounted() {
        axios
            .get('https://vue-moire.skillbox.cc/api/productCategories')
            .catch((error) => console.log(error.toJSON().message))
            .then((response) => {
                this.productsCategory = response.data.items;
            })
    }
}
</script>


<template>
    <div class="cataloglist__filter mb-8">
        <ul class="cataloglist__filter-menu">
            <li class="cataloglist__filter-item">
                <button class="cataloglist__filter-buttonAll button">Все</button>
            </li>
            <li class="cataloglist__filter-item" v-for="category in productsCategory" :key="category.id">
                <button class="cataloglist__filter-button button" @click="cat1">{{ category.title }}</button>
            </li>
        </ul>
    </div>
</template>