<template>
  <article class="proveedor">
    <ul class="proveedor__detalles">
      <li class="proveedor__detalle"><b>Clave:</b> {{ proveedor.clave }}</li>
      <li class="proveedor__detalle"><b>Nombre:</b> {{ proveedor.nombre }}</li>
      <li class="proveedor__detalle"><b>Email de contacto:</b> {{ proveedor.emailContacto }}</li>
      <li class="proveedor__detalle"><b>Cantidad de productos:</b> {{ proveedor.cantidadProductos }}</li>
      <li class="proveedor__detalle"><b>Cantidad de productos viejos:</b> {{ proveedor.cantidadProductosViejos }}</li>
      <li class="proveedor__detalle proveedor__opciones">
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
  name: 'Proveedor',
  props: {
    proveedor: {},
  },
  computed: {
    obtenerEnlace: function () {
      return `/proveedores/${this.proveedor.clave}`;
    }
  },
  methods: {
    eliminar: function () {
      this.$emit('EliminarProveedor');
    }
  }
}
</script>

<style>
.proveedor {
  background: #f1f7ed;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
  display: flex;
  height: 100%;
  padding: 1rem;
  text-align: left;
}

.proveedor__detalles {
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-rows: max-content max-content max-content max-content max-content 1fr;
}

.proveedor__opciones {
  align-items: flex-end;
  display: flex;
  grid-row: 6;
  margin-top: 1rem;
  justify-content: space-between;
}
</style>
