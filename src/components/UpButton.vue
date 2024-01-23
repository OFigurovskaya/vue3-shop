<script>
export default {
    name: 'UpButton',
    methods: {
        handleScroll(id) {
            const elem = document.getElementById(id);
            elem.scrollIntoView();
        }
    }
}
</script>

<template>
    <button class="upbutton upbutton_none" @click="handleScroll('ancor'), handleScroll('ancor2')" >
        <img src="../assets/img/arrowUp.png" alt="">
    </button>
</template>