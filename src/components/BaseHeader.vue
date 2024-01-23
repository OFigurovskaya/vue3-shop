<script>
import { mapState } from 'vuex'
export default {
    name: 'BaseHeader',
    props: ['indexPage'],
    data() {
        return {
            isBurger: false,
            dispalyNone: true,
        }
    },
    computed: {
        ...mapState([
            'key',
            'productList',
            'productsCategory',
            'productsBasket',
            'totalPrice',
            'isLoading',

        ]),
    },
    mounted() {
        window.addEventListener('resize', this.changeSize);
        this.$store.dispatch('initKey');
        this.$store.dispatch('initBasket', this.key);
        this.$store.dispatch('initList');
     

    },
    unmounted() {
        window.removeEventListener('resize', this.changeSize);
        this.$store.dispatch('initKey');
        this.$store.dispatch('initBasket', this.key);
        this.$store.dispatch('initList');

    },
    created() {
        if (window.innerWidth <= 767) {
            this.isBurger = true
        }
        else {
            this.isBurger = false
        }
    },
    methods: {
        changeSize() {
            if (window.innerWidth <= 767) {
                this.isBurger = true
            }
            else {
                this.isBurger = false
            }
        },
        openBurger() {
            this.dispalyNone = !this.dispalyNone
        }
    }
}
</script>

<template @resize="changeSize" >
    <div v-show="!this.isBurger">
        <div class="header container" id="ancor">
            <div class="header__logo logo">
                <img class="logo__img" src="../assets/img/logo.svg">
                <img class="logo__img" src="../assets/img/Womazing.svg">
            </div>

            <div class="header__menu menu">
                <ul class="menu__list">
                    <li class="menu__item" :class="{ activeList: indexPage === 1 }">
                        <router-link to="/" class="menu__link">Главная</router-link>

                    </li>
                    <li class="menu__item" :class="{ activeList: indexPage === 2 }">
                        <router-link to="/products" class="menu__link">Магазин</router-link>
                    </li>
                    <li class="menu__item" :class="{ activeList: indexPage === 3 }">
                        <router-link to="/brand" class="menu__link">О бренде</router-link>
                    </li>
                    <li class="menu__item" :class="{ activeList: indexPage === 4 }">
                        <router-link to="/contacts" class="menu__link">Конаткы</router-link>
                    </li>
                </ul>
            </div>


            <div class="header__tel">
                <a class="tel" href="tel:+74958235412"><img class="header__picTel" src="@/assets/img/telephone1.svg">+7
                    (495)
                    823-54-12</a>
            </div>

            <div class="header__basket">
                <router-link to="/baskets" class="basket"><img class="basketImg" src="@/assets/img/shopping-bags1.svg"
                        alt="">
                    {{ productsBasket.length }}
                </router-link>
            </div>
        </div>
    </div>
    <div v-show="this.isBurger" id="ancor2">
        <div class="header-burger container">
            <div class="header-burger__icon" @click="openBurger" :class="{ lineActive: !this.dispalyNone }">
                <span class="header-burger__line"></span>
                <span class="header-burger__line"></span>
                <span class="header-burger__line"></span>
            </div>
            <div class="header-burger__logo logo">
                <img class="logo__img" src="@/assets/img/logo.svg">
                <img class="logo__img" src="@/assets/img/Womazing.svg">
            </div>
            <div class="header-burger__basket">
                <router-link to="/baskets" class="basket"><img class="basketImg" src="@/assets/img/shopping-bags1.svg"
                        alt="">
                    {{ productsBasket.length }}
                </router-link>
            </div>
            <div class="header-burger__menu" :class="{ dispalyNone: this.dispalyNone }">
                <ul class="header-burger__list">
                    <li class="header-burger__item">
                        <router-link to="/" class="header-burger__link">Главная</router-link>

                    </li>
                    <li class="header-burger__item">
                        <router-link to="/products" class="header-burger__link">Магазин</router-link>
                    </li>
                    <li class="header-burger__item">
                        <router-link to="/brand" class="header-burger__link">О бренде</router-link>
                    </li>
                    <li class="header-burger__item">
                        <router-link to="/contacts" class="header-burger__link">Конаткы</router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style>
.dispalyNone {
    display: none;
    transform: translateX(120%);
}
</style>