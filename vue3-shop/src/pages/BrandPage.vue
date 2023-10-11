<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BreadCrumbsCard from '../components/BreadCrumbsCard.vue';

export default {
    name: 'BrandPage',
    data() {
        return {
            path: '/products',
        }
    },
    components: {
        Header,
        Footer,
        BreadCrumbsCard
    }
}
</script>

<template>
    <Header />
    <main class="brandpage container">
        <h1 class="title mt-8 mb-25">О бренде</h1>
        <BreadCrumbsCard :path="path" name="О бренде" />
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
    <router-link to="/products" class="brandpage__button button" tag="button">Перейти в магазин</router-link>
</main>
<Footer /></template>