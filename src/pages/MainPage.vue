<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import { mapState } from 'vuex'
import UpButton from '../components/UpButton.vue'

export default {
    name: 'MainPage',
    data() {
        return {
            indexPage: 1,
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
        UpButton
    },
    mounted() {
        this.$store.dispatch('initList'); 
        window.addEventListener('scroll', this.onScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
        this.$store.dispatch('initList'); 
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
    computed:
        mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'totalPrice',
            'isLoading',

        ]),
}
</script>

<template >
    <BaseHeader  :indexPage="indexPage"/>
    <main class="mainPage container" @scroll="onScroll">
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
                <li v-for="product in productList.slice(0, 3)" class="mainPage__item">
                    <img :src="product.colors[0].gallery[0].file.url" :alt="product.title" class="mainPage__listImg">
                    <h4 class="mainPage__listTitle">{{ product.title }}</h4>
                    <div class="mainPage__price">
                        <p class="priceBefore">{{ product.price }} ₽</p>
                        <p class="pricenow">{{ product.price - Math.round(product.price * 10 / 100) }} ₽</p>
                    </div>
                </li>
            </ul>
            <router-link to="/products" tag="button" class="button mainPage__button">Открыть магазин</router-link>
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
        <UpButton />
    </main>
  
    <BaseFooter />
</template>

<style>
.displayNone {
    display: none;
}
</style>