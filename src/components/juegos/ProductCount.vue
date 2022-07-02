<template>
    <h2> Juegos: {{countJuegos}}</h2>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'product-count',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters (['countJuegos'])
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
     h2{
    font-size: 40px;
    color: rgb(173, 54, 17);
  }
</style>