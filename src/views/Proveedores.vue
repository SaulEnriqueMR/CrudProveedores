<template>
  <section>
    <ul v-if="proveedores.length > 0" class="contenedor-objetos">
      <li v-for="proveedor in proveedores" v-bind:key="proveedor.id">
        <Proveedor v-bind:proveedor="proveedor"/>
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
  margin: 0;
  padding: 0;
}
</style>