<script>
import axios from 'axios';
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbsCard from '../components/BreadCrumbsCard.vue';
import { mapState } from 'vuex';
import BasePreloader from '../components/BasePreloader.vue'

export default {
    name: 'CardProductPage',
    data() {
        return {
            productData: [],
            productBasket: [],
            path: '/products',
            currentColor: 0,
            photos: [],
            currentSizes: 0,
            isLoading: false,
            currentQuantity: 1,
            colorId: [],
            isLoadingAdd: false,
            indexPage: 2
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbsCard,
        BasePreloader
    },

    computed: {
        ...mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
        ]),
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
        },
        getKey() {
            this.key = key
        }
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

    methods: {
        add(productId, colorId, sizeId, quantity, key) {
            this.isLoadingAdd = true;
            if (localStorage.getItem('key')) {
                key = localStorage.getItem('key')
            } else {
                key = this.$store.getters.KEY;
            }
            setTimeout(() => {
                this.$store.dispatch('addBasket', { productId, colorId, sizeId, quantity, key })
                this.isLoadingAdd = false;
            }, 2000)
        },
        quantityPlus() {
            this.currentQuantity++;
        },
        quantityMinus() {
            if (this.currentQuantity > 0) {
                this.currentQuantity--;
            }
        },

    }

}
</script>

<template>
    <BaseHeader :indexPage="indexPage"/>

    <BasePreloader />

    <main class="cardproduct container" v-if="!this.isLoading">
        <h1 class="cardproduct title mt-8 mb-25">{{ productData.title }}</h1>

        <BreadCrumbsCard :path="path" :name="productData.title" />

        <div class="cardproduct-wrapper">
            <div class="cardproduct__leftBlock">
                <template v-for="elem in productData.colors">
                    <div>
                        <img :src="elem.gallery[0].file.url" :alt="productData.title" class="cardproduct__img"
                            v-show="currentColor === elem.color.id">
                    </div>
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
                                    :value="elem.color.id" v-model="currentColor">
                                <span class="cardproduct__filter-colorvalue"
                                    :style="`background-color: ${elem.color.code}`"></span>
                            </label>

                        </div>


                    </div>
                </div>
                <div class="cardproduct__descr mb-25">
                    <div class="cardproduct__filter mb-25">
                        <h4 class="cardproduct__descr-title mb-25"> Выберите размер:</h4>
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


                <div class="cardproduct__add ">
                    <div class="cardproduct__quantity mb-25">
                        <button type="button" aria-label="Убрать один товар" class="cardproduct__quantity-minus button"
                            @click="quantityMinus">-</button>
                        <input class="cardproduct__quantity-input" type="text" name="quantity"
                            v-model="this.currentQuantity">
                        <button type="button" aria-label="Добавить один товар" class="cardproduct__quantity-plus button"
                            @click="quantityPlus">+</button>
                    </div>

                    <button class="cardproduct__add-button addButton button"
                        @click.prevent="add(this.productData.id, this.currentColor, this.currentSizes, this.currentQuantity)"
                        :disabled="isLoadingAdd">
                        В корзину
                    </button>
                    <div class="loadAdd mb-25">
                        <p class="blockCenter" v-if="this.isLoadingAdd">Товар добавляется в корзину...</p>
                        <p class="errorText" ></p>
                        <p class="okText"></p>
                    </div>

                </div>
            </div>

        </div>

    </main>

    <BaseFooter />
</template>

