<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import UpButton from '../components/UpButton.vue'

export default {
    name: 'BrandPage',
    data() {
        return {
            path: '/brand',
            indexPage: 3
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbs,
        UpButton
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            if(window.pageYOffset > 400) {
                document.querySelector('.upbutton').classList.remove('upbutton_none')
            } else {
                document.querySelector('.upbutton').classList.add('upbutton_none')
            }
        }
    },
}
</script>

<template>
    <BaseHeader :indexPage="indexPage"/>
    <main class="brandpage container" @scroll="onScroll">
        <h1 class="title mt-8 mb-25">О бренде</h1>
        <BreadCrumbs :path="path" name="О бренде" />
        <div class="brandpage__path-top mb-8">
            <img class="brandpage__path-top-img" src="@/assets/img/brand1.png" alt="">
            <div class="brandpage__path-top-descr">
                <h3 class="brandpage__path-title">Идея и женщина</h3>
                <p class="brandpage__path-text">Womazing была основана в 2010-ом и стала одной из самых успешных компаний
                    нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из
                    членов семьи не является модельером.
                </p>
                <br />
                <p class="brandpage__path-text">
                    Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций.
                    Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества,
                    характерная для ряда итальянских prêt-a-porter компаний. </p>
            </div>
        </div>
        <div class="brandpage__path-bottom">
            <img class="brandpage__path-bottom-img" src="@/assets/img/brand2.png" alt="">
            <div class="brandpage__path-bottom-descr">
                <h3 class="brandpage__path-title">Магия в деталях</h3>
                <p class="brandpage__path-text">Первый магазин Womazing был открыт в маленьком городке на севере страны в
                    2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских
                    моделей.</p>
                    <br />
                    <p class="brandpage__path-text">
                    Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с
                    шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и
                    шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время,
                    когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не
                    существовало. </p>
        </div>
    </div>
    <router-link to="/products" class="button brandpage__button" tag="button">Перейти в магазин</router-link>
    <UpButton />
</main>
<BaseFooter /></template>