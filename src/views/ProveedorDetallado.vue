<template>
  <h1>{{$route.params.id}}</h1>
</template>

<script>
//import axios from 'axios';

export default {
  data: function () {
    return {
      url: '',
      proveedor: {
        
      },
    };
  },
  methods: {
    obtenerProveedor: function () {
      //axios.get()
    }
  },
  created() {
    const clave = this.$route.params.id;
    if (clave !== 'agregar') {
      this.url = `http://localhost:3000/${clave}`;
      this.proveedor.clave = clave;
    }
  }
}
</script>

<style>

</style>