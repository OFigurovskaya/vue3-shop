<script>
import { mapState } from 'vuex'
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';

export default {
    name: 'SuccessPage',
    data() {
        return {
            path: '/success',
            isLoadingThis: false
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
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
    mounted() {
        this.isLoadingThis = true;
        setTimeout(() => {
            this.$store.dispatch('loadOrderInfo', this.$route.params.id)
            this.isLoadingThis = false;
        }, 2000);

    },
}
</script>

<template>
    <BaseHeader :path="path"/>
  

    <main class="success container">
        <h1 class="success__title mt-8 mb-25">Заказ оформлен</h1>
        <BreadCrumbs :path="path" name="Заказ оформлен" />

        <div class="load mb-25" v-if="this.isLoadingThis">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter ">
        </div>

        <div class="success__info" v-else>
            <h3 class="success__titleOrder">{{ orderInfo.name }}, Ваш заказ успешно оформлен!</h3>
            <div class="success__infoDetails">
                <p class="success__number">Номер заказа: {{ orderInfo.id }}</p>
                <p class="success__address">Адрес доставки: {{ orderInfo.address }}</p>
                <p class="success__phone">Конактный телефон: {{ orderInfo.phone }}</p>
                <p class="success__email">Электронная почта: {{ orderInfo.email }}</p>
                <p class="success__delivery">Доставка: {{ orderInfo.deliveryType.title }}</p>
                <p class="success__pay"> Оплата: {{ orderInfo.paymentType }}</p>
            </div>
            
        </div>

        <p class="success__end">Благодарим Вас за заказ! Наш менеджер свяжется с Вами в течение 10 минут</p>
        <router-link to="/" tag="button" class="success__href button" >Вернуться на главную страницу</router-link>
    </main>
    <BaseFooter />
</template>