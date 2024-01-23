<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
export default {
    name: 'NotFoundPage',
    components: {
        BaseHeader,
        BaseFooter,
    },
}
</script>

<template>
    <BaseHeader />
    <main class="notpage container">
        <h1 class="notpage__title title mt-8 mb-25">Страница не найдена :(</h1>
        <router-link to="/" tag="button" class="button notpage__href" >Венуться на главную страницу</router-link>
    </main>
    <BaseFooter />
</template>