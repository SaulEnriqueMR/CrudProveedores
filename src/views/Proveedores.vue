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
      url: 'http://localhost:3000/proveedores',
      proveedores: [],
    }
  },
  components: {
    Proveedor
  },
  created() {
    axios.get(this.url)
    .then(response => this.proveedores = response.data)
    .catch(e => console.log(e));
  },
  methods: {
    eliminarProveedor: function (clave, index) {
      console.log(`${this.url}/${clave}`);
      axios.delete(`${this.url}/${clave}`)
      .then(response => {
        const proveedorRequest = response.data;
        const proveedorEliminado = this.proveedores.splice(index, 1);
        console.log(proveedorRequest, proveedorEliminado);
      })
      .catch(e => console.log(e));
    }
  }
}
</script>

<style>
.contenedor-objetos {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  list-style: none;
  margin: 1rem 0 0 0;
  padding: 0;
}
</style>