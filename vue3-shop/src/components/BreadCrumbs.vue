<script>
export default {
    name: 'BreadCrumbs',
    props: ['path'],
    data() {
        return {
            
        }
    }
}
</script>

<template>
<div class="breadcrumbs mb-8">
            <router-link to="/" class="breadcrumbs__main">Главная</router-link>
            <span> — </span>
            <router-link :to=this.path class="breadcrumbs__products">Магазин</router-link>
        </div>
</template>