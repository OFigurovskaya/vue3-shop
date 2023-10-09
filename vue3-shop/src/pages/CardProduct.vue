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
            currentSizes: 0,
            isLoading: false,
        }
    },
    components: {
        Header,
        Footer,
        BreadCrumbsCard
    },
    mounted() {
        this.isLoading = true;
        setTimeout(() => {
        axios
            .get('https://vue-moire.skillbox.cc/api/products/' + this.$route.params.id)
            .then(response => this.productData = response.data)
            .catch(error => console.log(error.message))
            this.isLoading = false;
        }, 2000);
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

    <div class="load mb-25" v-if="this.isLoading">
            <img src="../assets/img/spiral.gif" alt="" class="blockCenter">
        </div>

    <main class="cardproduct container"  v-if="!this.isLoading">
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
                <div class="cardproduct__filter mb-25">
                    <h4 class="cardproduct__descr-title mb-25"> Выберите цвет:</h4>
                    <div class="filter-wrapper">
                        <div class="cardproduct__filter-color" v-for="elem in productData.colors">
                            <label class="cardproduct__filter-colorlabel">
                                <input class="cardproduct__filter-colorradio sr-only" type="radio" name="color-item"
                                    :value="elem.id" v-model="currentColor" >
                                <span class="cardproduct__filter-colorvalue"
                                    :style="`background-color: ${elem.color.code}`"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="cardproduct__descr ">
                    <div class="cardproduct__filter mb-25">
                        <h4 class="cardproduct__descr-title mb-25"> Выберите размер::</h4>
                        <div class="filter-wrapper">
                            <div class="cardproduct__filter-sizes" v-for="elem in productData.sizes">
                                <label class="cardproduct__filter-sizeslabel">
                                    <input class="cardproduct__filter-sizesradio sr-only" type="radio" name="sizes-item"
                                        :value="elem.id" v-model="currentSizes">
                                    <span class="cardproduct__filter-sizesvalue">{{ elem.title }}
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h4 class="cardproduct__descr-title"> Сезоны:</h4>
                    <div class="cardproduct__descr-wrapper mb-25">
                        <div class="cardproduct__descr-seasons" v-for="elem in productData.seasons">{{ elem.title }}</div>
                    </div>
                    <h4 class="cardproduct__descr-title"> Материал:</h4>
                    <div class="cardproduct__descr-wrapper">
                        <div class="cardproduct__descr-materials" v-for="elem in productData.materials">{{ elem.title }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <Footer />
</template>

