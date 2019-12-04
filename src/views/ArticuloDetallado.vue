<template>
  <b-form v-on:submit="guardar" class="formulario">
    <b-form-group label="Nombre del articulo" 
    label-for="nombre">
      <b-form-input id="nombre"
      name="nombre"
      v-model="articulo.nombre"
      required="required"
      type="text"
      placeholder="Nombre del articulo">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Descripción del articulo" 
    label-for="descripcion">
      <b-form-input id="descripcion"
      name="descripcion"
      v-model="articulo.descripcion"
      type="text"
      placeholder="Descripción del articulo">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Precio del articulo" 
    label-for="precio">
      <b-form-input id="precio"
      name="precio"
      step="0.01"
      min="0"
      v-model="articulo.precio"
      type="number"
      required="required">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Estatus del articulo" 
    label-for="estatus">
      <b-form-input id="precio"
      name="estatus"
      v-model="articulo.estatus"
      type="text"
      maxlength="1">
      </b-form-input>
    </b-form-group>
    
    <b-form-group label="Fecha de registro"
    label-for="fechaRegistro">
      <b-form-input
      type="date"
      id="fechaRegistro"
      v-model="articulo.fechaRegistro"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Proveedor"
    label-for="proveedor">
      <b-form-select v-model="articulo.proveedor.clave" id="proveedor">
        <option :value="null">Escoja un proveedor</option>
        <option v-for="(proveedor, index) in proveedores" v-bind:key="index" v-bind:value="proveedor.clave">{{ proveedor.nombre }}</option>
      </b-form-select>
    </b-form-group>
    
    <section class="contenedor-botones--formulario">
      <b-button type="submit" variant="primary" class="formulario__btn--editar btn--editar">Guardar</b-button>
      <b-button v-on:click="regresar" type="button" variant="secondary" class="formulario__btn--cancelar btn--cancelar">Cancelar</b-button>
    </section>
  </b-form>
</template>

<script>
import axios from 'axios';
export default {
  data: function () {
    return {
      url: 'http://localhost:3000/articulos/',
      urlProveedores: 'http://localhost:3000/proveedores',
      esNuevoArticulo: true,
      articulo: {
        nombre: '',
        descripcion: '',
        precio: 0.0,
        estatus: '',
        proveedor: {
          clave: null
        }
      },
      proveedores: []
    }
  },
  methods: {
    guardar: function (ev) {
      ev.preventDefault();
      if (this.esNuevoArticulo) {
        axios.post(this.url, this.articulo)
        .then(() => {
          this.regresar();
        })
        .catch(e => console.log(e));
      } else {
          axios.put(this.url, this.articulo)
          .then(() => {
            this.regresar();
          })
          .catch(e => console.log(e));
      }
    },
    regresar: function () {
      this.$router.go(-1);
    },
    obtenerArticulo: function () {
      axios.get(this.url)
      .then(response => {
          this.articulo = response.data;
          /*this.articulo.proveedor = {};
          this.articulo.proveedor.clave = response.data.proveedor.clave;*/
      })
      .catch(e => console.log(e));
    }
  },
  created: function () {
    axios.get(this.urlProveedores)
    .then(response => this.proveedores = response.data)
    .catch(e => console.log(e));
    const id = this.$route.params.id;
    if (id !== 'agregar') {
      this.url = `${this.url}${id}`;
      this.articulo.id = id;
      this.obtenerArticulo();
      this.esNuevoArticulo = false;
    }
  }
}
</script>

<style>

</style>