<script>
import { mapState } from 'vuex'
import axios from 'axios';

export default {
    name: 'BasePagination',
    computed: {
        ...mapState([
            'productList',
            'productsCategory',
            'key',
            'productsBasket',
            'limitPage',
            'page'
        ]),
  },
  methods: {
    
  }

}
</script>

<template>
    <div>
       
        <button class="pagination__elem" >elem</button>
    </div>
</template>