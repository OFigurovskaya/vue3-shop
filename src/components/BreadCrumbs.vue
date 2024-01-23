<script>
export default {
    name: 'BreadCrumbs',
    props: ['path', 'name'],
    
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
            <router-link :to=this.path class="breadcrumbs__products">{{this.name}}</router-link>
        </div>
</template>