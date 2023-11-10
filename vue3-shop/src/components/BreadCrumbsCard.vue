<script>
export default {
    name: 'BreadCrumbsCard',
    props: ['path', 'name'],
    data() {
        return {
            
        }
    }
}
</script>

<template>
<div class="breadcrumbsCard mb-25">
            <router-link to="/" class="breadcrumbs__main">Главная</router-link>
            <span> — </span>
            <router-link :to=this.path class="breadcrumbs__products breadcrumbs__main">Магазин</router-link>
            <span> — </span>
            <p class="breadcrumbs__products">{{ this.name }}</p>
        </div>
</template>