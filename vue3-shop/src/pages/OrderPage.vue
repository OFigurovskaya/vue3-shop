<script>
import { mapState } from 'vuex'

export default {
    name: 'OrderPage',
    data() {
        return {
            path: '/baskets',
        }
    },
    computed: {
        ...mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'totalPrice'
        ]),
    },
    mounted() {
        this.$store.commit('loadKey');
        this.$store.dispatch('initBasket', this.key);
        this.$store.commit('totalPriceload')
       
    },
}
</script>

<template>
    <ul>
        <ol v-for="elem in productsBasket">{{ elem }}ZZZZZZZZZZZZZ</ol>
    
    </ul>
    {{ totalPrice }}
</template>