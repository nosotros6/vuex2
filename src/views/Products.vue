<template>
<div>
    <h1>Tienda 32 bits</h1>
    <hr>
    <products-count></products-count>
    <products-list></products-list>
    <products-total></products-total>

</div>
</template>

<script>
import ProductList from '@/components/juegos/ProductList.vue'
import ProductCount from '@/components/juegos/ProductCount.vue'
import ProductTotal from '@/components/juegos/ProductTotal.vue'
export default {
    name: 'products-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'products-list':ProductList,
        'products-count':ProductCount,
        'products-total':ProductTotal

    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    h1{
    font-family: 'Roboto Mono', monospace;
    font-size: 50px;
    color:rgb(69, 24, 10) ;
    
    }
</style>
