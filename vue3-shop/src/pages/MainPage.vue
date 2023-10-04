<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';

export default {
    name: 'MainPage',
    data() {
        return {
            product1: [],
            product2: [],
            product3: [],
            photo1: null,
            photo2: null,
            photo3: null,
        }
    },
    components: {
        Header,
        Footer
    },
    mounted() {
        axios
            .get('https://vue-moire.skillbox.cc/api/products')
            .then((response) => {
                this.product1 = response.data.items[0];
                this.product2 = response.data.items[1];
                this.product3 = response.data.items[2];
                this.photo1 = response.data.items[0].colors[0].gallery[0].file.url;
                this.photo2 = response.data.items[1].colors[0].gallery[0].file.url;
                this.photo3 = response.data.items[2].colors[0].gallery[0].file.url
            })
    },
    computed: {
        sale1() {
            return this.product1.price - Math.round(this.product1.price * 10 / 100);
        },
        sale2() {
            return this.product2.price - Math.round(this.product2.price * 10 / 100);
        },
        sale3() {
            return this.product3.price - Math.round(this.product3.price * 10 / 100);
        },
    }
}
</script>

<template>
    <Header />
    <main class="mainPage container">
        <div class="mainPage__receipt">
            <div class="mainPage__receiptLeft">
                <h1 class="mainPage__title title">Новые поступления
                    в этом сезоне</h1>
                <p class="mainPage__descr">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
                    Время исследовать.</p>
                <router-link to="/products" tag="button" class="button mainPage__button">Открыть магазин</router-link>
            </div>
            <div class="mainPage__receiptRight">
                <img src="@/assets/img/mainSlideBig.png" alt="" class="mainPage__photoBig">
                <img src="@/assets/img/mainSlide1.png" alt="" class="mainPage__photoMiddle">
                <img src="@/assets/img/mainSlide2.png" alt="" class="mainPage__photoLittle">
            </div>
        </div>

        <div class="mainPage__collection">
            <h2 class="titleTwo mb-8">Новая коллекция</h2>
            <ul class="mainPage__sliderList">
                <li class="mainPage__item">
                    <img :src="photo1" :alt="`${product1.title}`" class="mainPage__listImg">
                    <h4 class="mainPage__listTitle">{{ product1.title }}</h4>
                    <div class="mainPage__price">
                        <p class="priceBefore">{{ product1.price }} ₽</p>
                        <p class="pricenow">{{ sale1 }} ₽</p>
                    </div>
                </li>
                <li class="mainPage__item">
                    <img :src="photo2" :alt="`${product2.title}`" class="mainPage__listImg">
                    <h4 class="mainPage__listTitle">{{ product2.title }}</h4>
                    <div class="mainPage__price">
                        <p class="priceBefore">{{ product2.price }} ₽</p>
                        <p class="pricenow">{{ sale2 }} ₽</p>
                    </div>
                </li>
                <li class="mainPage__item">
                    <img :src="photo3" :alt="`${product3.title}`" class="mainPage__listImg">
                    <h4 class="mainPage__listTitle">{{ product3.title }}</h4>
                    <div class="mainPage__price">
                        <p class="priceBefore">{{ product3.price }} ₽</p>
                        <p class="pricenow">{{ sale3 }} ₽</p>
                    </div>
                </li>
            </ul>
            <router-link to="/products" tag="button" class="button ">Открыть магазин</router-link>
        </div>

        <div class="mainPage__important">
            <h2 class="titleTwo mb-8">Что для нас важно</h2>
            <ul class="mainPage__important-list">
                <li class="mainPage__important-items">
                    <img src="@/assets/img/mainIcon1.svg" alt="icon" class="mainPage__important-img">
                    <h3 class="titleThree mb-25">Качество</h3>
                    <p class="mainPage__important-descr">Наши профессионалы работают на лучшем оборудовании для пошива
                        одежды беспрецедентного качества</p>
                </li>
                <li class="mainPage__important-items">
                    <img src="@/assets/img/mainIcon2.svg" alt="icon" class="mainPage__important-img">
                    <h3 class="titleThree mb-25">Скорость</h3>
                    <p class="mainPage__important-descr">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
                        единиц продукции в наших собственных цехах</p>
                </li>
                <li class="mainPage__important-items">
                    <img src="@/assets/img/mainIcon3.svg" alt="icon" class="mainPage__important-img">
                    <h3 class="titleThree mb-25">Ответственность</h3>
                    <p class="mainPage__important-descr">Мы заботимся о людях и планете. Безотходное производство и
                        комфортные условия труда - все это Womazing</p>
                </li>
            </ul>
        </div>

        <div class="mainPage__team">
            <h2 class="titleTwo mb-8">Команда мечты Womazing</h2>
            <div class="mainPage__teamWrapper">
                <img src="../assets/img/girls.png" alt="" class="mainPage__teamWrapperPhoto">
                <div class="mainPage__teamWrapperDescr">
                    <h3 class="titleThree mb-25">Для каждой</h3>
                    <p class="mainPage__teamWrapperText">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                    <br />
                    <p class="mainPage__teamWrapperText mb-25">
                        Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой
                        девушки.
                    </p>
                    <router-link to="/brand" class="mainPage__href">Подробнее о бренде</router-link>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>