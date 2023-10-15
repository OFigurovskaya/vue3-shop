<script>
export default {
    name: 'CardCount',
    props: ['productsBasket', 'currentQuantity'],
    methods: {
        addItem(id, num) {
            this.currentQuantity++;
            this.$store.commit('loadPlus')
            console.log(this.$store.commit('loadPlus', { id: this.$route.params.id, num: this.currentQuantity }));
        }
    },
    computed: {
        getId() {
            console.log(target);
        },
        plus() {
            for (let elem of this.productsBasket) {
                if (elem.id === getId) {
                    return '!'
                }
            }
        }
    }
}
</script>


<template>
    <div class="cardCount">
        Количество:
        <button type="button" aria-label="Убрать один товар">-</button>
        <input type="text" name="quantity" v-model="this.currentQuantity">
        <button type="button" aria-label="Добавить один товар" @click="getId">+</button>
    </div>

    <p>сумма с учетом скидки 10%:</p>

    {{ }} ₽
</template>