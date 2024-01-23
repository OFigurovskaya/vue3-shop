<script>
import { mapState } from 'vuex';

export default {
    name: 'BasePreloader',
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
}
</script>

<template>
     <div class="load mb-25" v-if="this.isLoading">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter ">
        </div>
</template>