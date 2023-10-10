<script>
export default {
    name: 'Header',
    data() {
        return {
           
           
        }
    },
    computed: {
        basketProducts() {
            return this.$store.getters.BASKETALL;
        },
    }
}
</script>

<template>
    <div class="header container">
        <div class="header__logo logo">
            <img class="logo__img" src="@/assets/img/logo.svg">
            <img class="logo__img" src="@/assets/img/Womazing.svg">
        </div>

        <div class="header__menu menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <router-link to="/" class="menu__link">Главная</router-link>
                </li>
                <li class="menu__item">
                    <router-link to="/products" class="menu__link">Магазин</router-link>
                </li>
                <li class="menu__item">
                    <router-link to="/brand" class="menu__link">О бренде</router-link>
                </li>
                <li class="menu__item">
                    <router-link to="/contacts" class="menu__link">Конаткы</router-link>
                </li>
            </ul>
        </div>

        <div class="header__tel">
            <a class="tel" href="tel:+74958235412"><img class="header__picTel" src="@/assets/img/telephone 1.svg">+7 (495) 823-54-12</a>
        </div>

        <div class="header__basket">
            <router-link to="/baskets" class="basket"><img class="basketImg" src="../assets/img/shopping-bags 1.svg" alt=""> {{basketProducts.length  }}</router-link>
            
        </div>
    </div>
</template>