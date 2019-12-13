<template>
  <section class="text-right">
    <router-link class="boton__enlace" to="/articulos/agregar">
      <b-button variant="primary" class="btn--editar"><b>&#43;</b> Agregar nuevo articulo</b-button>
    </router-link>
    <ul v-if="articulos.length > 0" class="contenedor-objetos">
      <li v-for="(articulo, index) in articulos" v-bind:key="index">
        <Articulo v-on:EliminarArticulo="eliminarArticulo(articulo.id, index)" v-bind:articulo="articulo"></Articulo>
      </li>
    </ul>
    <p v-else>No se encontraron proveedores</p>
  </section>
  
</template>

<script>
import Articulo from '../components/Articulo.vue';
import axios from 'axios';
export default {
  name: 'articulos',
  data: function () {
    return  {
      url: '/articulos',
      articulos: [],
    }
  },
  methods: {
    eliminarArticulo: function (id, index) {
      axios.delete(`${this.url}/${id}`)
      .then(() => {
        //const articuloRequest = response.data;
        //const articuloEliminado = this.proveedores.splice(index, 1);
        this.articulos.splice(index, 1);
      });
      //.catch(e => console.log(e));
    }
  },
  components: {
    Articulo
  },
  created() {
    axios.get(this.url)
    .then(response => this.articulos = response.data);
    //.catch(e => console.log(e));
  }
}
</script>

<style scoped>
li {
  width: 100%;
}
p {
  text-align: center;
}
</style>