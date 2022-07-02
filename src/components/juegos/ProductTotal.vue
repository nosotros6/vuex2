<template>
    <div class="container">
        Total: ${{Number(totalJuegos).toLocaleString('es-CL')}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'product-total',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['totalJuegos'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.container{
    font-size: 25px;
    background-color: rgb(173, 54, 17);
    color: aliceblue;
    padding-top: 10px;
    width: 90%;
    margin: 0 auto;
    font-weight: 500;
    padding: 10px;
}
    
</style>