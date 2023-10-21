<script>
import { mapState } from 'vuex'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';

export default {
    name: 'SuccessPage',
    data() {
        return {
            path: '/success',

        }
    },
    components: {
        Header,
        Footer,
        BreadCrumbs,
    },
    computed: {
        ...mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'totalPrice',
            'delivery',
            'payments',
            'isLoading',
            'orderInfo'
        ]),
    },
    created() {
        this.isLoading = true;
        setTimeout(() => {
            this.$store.dispatch('loadOrderInfo', this.$route.params.id)
            this.isLoading = false;
        }, 2000);

    },
}
</script>

<template>
    <Header />
  

    <main class="orderpage container">
        <h1 class="orderpage__title title mt-8 mb-25">Заказ оформлен</h1>
        <BreadCrumbs :path="path" name="Заказ оформлен" />

        <div class="load mb-25" v-if="this.isLoading">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter ">
        </div>

        <div class="" v-else>
            {{ orderInfo}}
        </div>

       
    </main>
    <Footer />
</template>