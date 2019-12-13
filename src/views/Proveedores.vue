<template>
  <section class="text-right">
    <router-link class="boton__enlace" to="/proveedores/agregar">
      <b-button variant="primary" class="btn--editar"><b>&#43;</b> Agregar nuevo proveedor</b-button>
    </router-link>
    <ul v-if="proveedores.length > 0" class="contenedor-objetos">
      <li v-for="(proveedor, index) in proveedores" v-bind:key="index">
        <Proveedor v-on:EliminarProveedor="eliminarProveedor(proveedor.clave, index)" v-bind:proveedor="proveedor"/>
      </li>
    </ul>
    <p v-else>No se encontraron proveedores</p>
  </section>
  
</template>

<script>
import axios from 'axios';
import Proveedor from '../components/Proveedor';
export default {
  name: 'proveedores',
  data: function () {
    return {
      url: '/proveedores',
      proveedores: [],
    }
  },
  components: {
    Proveedor
  },
  created() {
    axios.get(this.url)
    .then(response => this.proveedores = response.data);
    //.catch(e => console.log(e));
  },
  methods: {
    eliminarProveedor: function (clave, index) {
      axios.delete(`${this.url}/${clave}`)
      .then(() => {
        //const proveedorRequest = response.data;
        //const proveedorEliminado = this.proveedores.splice(index, 1);
        this.proveedores.splice(index, 1);
      });
      //.catch(e => console.log(e));
    }
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