<template>
<div>
    <div class="container">
        <div class="tab">Código</div>
         <div class="tab">Color</div>
        <div class="tab">Nombre</div>
        <div class="tab">Stock</div>
        <div class="tab">Precio</div>
        <div class="tab">Acciones</div>
    </div>
    <div class="container" v-for="juego in juegos" :key="juego.codigo" :style="{color:juego.color}">
        <div class="tab_content">{{juego.codigo}}</div>
        <div class="tab_content">
            <select name="select" v-model="juego.color">
                <option value="red">rojo</option>
                <option value="blue">azul</option>
                <option value="green">verde</option>
                <option value="black">negro</option>
            </select>
        </div>
        <div class="tab_content">{{juego.nombre}}</div>
        <div class="tab_content">{{juego.stock}}</div>
        <div class="tab_content">${{Number(juego.precio).toLocaleString('es-CL')}}</div>
        <div class="tab_content">
            <button @click="juego.stock++">+</button>
            <button @click="juego.stock--">-</button>
        </div>
    </div>
</div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'product-list',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['juegos'])
    },
    //methods: {},
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
        display: grid;
        grid-template-columns: 2fr 3fr 3fr 2fr 2fr 2fr;
        width: 90%;
        margin: auto;
    }
    .tab{
        background-color: rgb(173, 54, 17);
        font-size: 20px;
        color: aliceblue;
        text-align: center;
    }
    .tab_content{
        background-color: rgb(247, 222, 215);
        font-size: 20px;
        text-align: center;
        height: 50px;
        margin-bottom: 5px;
        
    }
    button{
        background-color: rgb(173, 54, 17);
        color: aliceblue;
        font-size: 14px;
        font-weight: 600;
        margin: 2px;
        width: 30px;
        border: 1px solid rgb(173, 54, 17);
    }
    select{
        width: 60px;
        border: 1px solid rgb(173, 54, 17);
    }
</style>