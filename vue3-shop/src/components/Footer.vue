<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <div class="back">
    <div class="footer container">
        <div class="footer__logo logo">
            <img class="logo__img" src="@/assets/img/logo.svg">
            <img class="logo__img" src="@/assets/img/Womazing.svg">
        </div>

        <div class="footer__menu menu">
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

        <div class="footer__tel">
            <a class="tel" href="tel:+74958235412">+7 (495) 823-54-12</a>
            <a class="mail" href="mailto:hello@womazing.com">hello@womazing.com</a>
        </div>

        <div class="footer__copy">
            <ul class="footer__menuDown">
                <li class="footer__itemDown">© Все права защищены</li>
                <li class="footer__itemDown"><a href="" class="footer__linkDown">Политика конфиденциальности</a></li>
                <li class="footer__itemDown"><a href="" class="footer__linkDown">Публичная оферта</a></li>
            </ul>
        </div>

        <div class="footer__social">
            <ul class="footer__menuSocial">
                <li class="footer__itemSocial"><a href="" class="footer__linkSocial"><img src="../assets/img/instagram.svg"></a></li>
                <li class="footer__itemSocial"><a href="" class="footer__linkSocial"><img src="../assets/img/facebook.svg"></a></li>
                <li class="footer__itemSocial"><a href="" class="footer__linkSocial"><img src="../assets/img/twitter.svg"></a></li>
            </ul>
            <img class="footer__capdpay" src="../assets/img/visa-mastercard.svg" alt="" >
        </div>

    

    </div>
</div>
    
</template>