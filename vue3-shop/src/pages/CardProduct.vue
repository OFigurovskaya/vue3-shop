<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BreadCrumbsCard from '../components/BreadCrumbsCard.vue';

export default {
    name: 'CardProductPage',
    data() {
        return {
            productData: [],
            path: '/products',
            currentColor: 0,
            photos: [],
            currentSizes: 0
        }
    },
    components: {
        Header,
        Footer,
        BreadCrumbsCard
    },
    mounted() {
        axios
            .get('https://vue-moire.skillbox.cc/api/products/' + this.$route.params.id)
            .then(response => this.productData = response.data)
    },
    computed: {
        sale() {
            return this.productData.price - Math.round(this.productData.price * 10 / 100)
        },
        photo1() {
            for (let elem in this.productData.colors) {
                this.photos.push(this.productData.colors[elem].gallery[0].file.url)
            }
            for (let i = 0; i < this.photos.length; i++) {
                return this.photos[0]
            }
        }
    },


}
</script>

<template>
    <Header />
    <main class="cardproduct container">
        <h1 class="cardproduct title mt-8 mb-25">{{ productData.title }}</h1>

        <BreadCrumbsCard :path="path" :name="productData.title" />

        <div class="cardproduct-wrapper">

            <div class="cardproduct__leftBlock">
                <template v-for="elem in productData.colors">
                    <img :src="elem.gallery[0].file.url" :alt="productData.title" class="cardproduct__img"
                        v-show="currentColor === elem.id">
                </template>
                <img :src="photo1" :alt="productData.title" class="cardproduct__img" v-show="this.currentColor === 0">
            </div>

            <div class="cardproduct__rightBlock">
                <div class="cardproduct__price mb-25">
                    <p class="cardproduct__priceNow">{{ sale }} ₽</p>
                    <p class="cardproduct__priceBefore priceBefore">{{ productData.price }} ₽</p>
                </div>
                <div class="cardproduct__filter">
                    <h4 class="cardproduct__descr-title mb-25"> Выберите цвет:</h4>
                    <div class="filter-wrapper">
                        <div class="cardproduct__filter-color" v-for="elem in productData.colors">
                            <label class="cardproduct__filter-colorlabel">
                                <span class="cardproduct__filter-colorvalue"
                                    :style="`background-color: ${elem.color.code}`"></span>
                                <input class="cardproduct__filter-colorradio sr-only" type="radio" name="color-item"
                                    :value="elem.id" v-model="currentColor">
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cardproduct__descr">
                    <h4 class="cardproduct__descr-title"> Выберите размер::</h4>
                    <div class="cardproduct__filter-sizes" v-for="elem in productData.sizes">
                        <label class="cardproduct__filter-sizeslabel">
                            <input class="cardproduct__filter-sizesradio sr-only" type="radio" name="sizes-item"
                                :value="elem.id" v-model="currentSizes">
                            <span class="cardproduct__filter-sizesvalue">{{ elem.title }}
                            </span>
                        </label>
                    </div>
                    <h3 class="cardproduct__descr-title3"> Описание товара</h3>
                    <h4 class="cardproduct__descr-title"> Сезоны:</h4>
                    <div class="cardproduct__descr-seasons" v-for="elem in productData.seasons">{{ elem.title }}</div>
                    <h4 class="cardproduct__descr-title"> Материал:</h4>
                    <div class="cardproduct__descr-materials" v-for="elem in productData.materials">{{ elem.title }}</div>

                </div>
            </div>

        </div>
    </main>

    <Footer />
</template>

