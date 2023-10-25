<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'NotFoundPage',
    components: {
        Header,
        Footer,
    },
}
</script>

<template>
    <Header />
    <main class="notpage container">
        <h1 class="notpage__title title mt-8 mb-25">Страница не найдена :(</h1>
        <router-link to="/" tag="button" class="button notpage__href" >Венуться на главную страницу</router-link>
    </main>
    <Footer />
</template>