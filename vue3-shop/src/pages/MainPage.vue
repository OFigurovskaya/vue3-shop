<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'MainPage',
    data() {
        return {

        }
    },
    components: {
        Header,
        Footer
    },
    mounted: {

    }
}
</script>

<template>
    <Header />
    <div class="mainPage container">
        <div class="mainPage__receipt">
            <div class="mainPage__receiptLeft">
                <h1 class="mainPage__title title">Новые поступления
                    в этом сезоне</h1>
                <p class="mainPage__descr">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                <router-link to="/products" tag="button" class="button mainPage__button">Открыть магазин</router-link>
            </div>
            <div class="mainPage__receiptRight">
                <img src="@/assets/img/mainSlideBig.png" alt="" class="mainPage__photoBig">
                <img src="@/assets/img/mainSlide1.png" alt="" class="mainPage__photoMiddle">
                <img src="@/assets/img/mainSlide2.png" alt="" class="mainPage__photoLittle">
            </div>
        </div>

        <div class="mainPage__collection">
            <ul class="mainPage__sliderList">
                <li class="mainPage__item">
                    <img src="" alt="" class="mainPage__listImg">
                    <h5 class="mainPage__listTitle"></h5>
                    <div class="mainPage__price"></div>
                </li>
                <li class="mainPage__item">
                    <img src="" alt="" class="mainPage__listImg">
                    <h5 class="mainPage__listTitle"></h5>
                    <div class="mainPage__price"></div>
                </li>
                <li class="mainPage__item">
                    <img src="" alt="" class="mainPage__listImg">
                    <h5 class="mainPage__listTitle"></h5>
                    <div class="mainPage__price"></div>
                </li>
            </ul>
        </div>

        <div class="mainPage__important"></div>

        <div class="mainPage__team"></div>
    </div>
    <Footer />
</template>