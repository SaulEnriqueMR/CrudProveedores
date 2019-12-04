<template>
  <article class="articulo">
    <ul class="articulo__detalles">
      <li class="articulo__detalle">Nombre: {{ articulo.nombre }}</li>
      <li class="articulo__detalle">Descripción: {{ articulo.descripcion }}</li>
      <li class="articulo__detalle">Precio: ${{ articulo.precio }}</li>
      <li class="articulo__detalle">Estatus: {{ articulo.estatus }}</li>
      <li class="articulo__detalle">Fecha de registro: {{ articulo.fechaRegistro }}</li>
      <li class="articulo__detalle" v-if="articulo.proveedor">Proveedor: {{ articulo.proveedor.nombre }}</li>
      <li class="articulo__detalle articulo__opciones">
        <router-link class="boton__enlace" v-bind:to="obtenerEnlace">
          <b-button variant="primary" class="btn--editar">Editar</b-button>
        </router-link>
        <b-button v-on:click="eliminar" variant="danger">Eliminar</b-button>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Articulo',
  props: {
    articulo: {}
  },
  computed: {
    obtenerEnlace: function () {
      return `/articulos/${this.articulo.id}`;
    }
  },
  methods: {
    eliminar: function () {
      this.$emit('EliminarArticulo');
    }
  }
}
</script>

<style>
.articulo {
  background: #f1f7ed;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
  display: flex;
  height: 100%;
  padding: 1rem;
  text-align: left;
}

.articulo__detalles {
  display: grid;
  grid-template-rows: max-content max-content max-content max-content max-content max-content 1fr;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.articulo__opciones {
  align-items: flex-end;
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
}
</style>