<template>
  <b-form v-on:submit="guardar" class="formulario-proveedor">
    <b-form-group label="Clave del proveedor" 
    label-for="clave">
      <b-form-input id="clave"
      name="clave"
      v-model="proveedor.clave"
      required="required"
      type="text"
      placeholder="Clave del proveedor">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Nombre del proveedor" 
    label-for="nombre">
      <b-form-input id="nombre"
      name="nombre"
      v-model="proveedor.nombre"
      required="required"
      type="text"
      placeholder="Nombre del proveedor">
      </b-form-input>
    </b-form-group>

    <b-form-group label="E-mail de contacto" 
    label-for="emailContacto">
      <b-form-input id="emailContacto"
      name="emailContacto"
      v-model="proveedor.emailContacto"
      required="required"
      type="email"
      placeholder="E-mail de contacto">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Cantidad de productos" 
    label-for="cantidadProductos">
      <b-form-input id="cantidadProductos"
      name="cantidadProductos"
      v-model="proveedor.cantidadProductos"
      type="number"
      placeholder="Cantidad de productos">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Cantidad de productos viejos" 
    label-for="cantidadProductosViejos">
      <b-form-input id="cantidadProductosViejos"
      name="cantidadProductosViejos"
      v-model="proveedor.cantidadProductosViejos"
      type="number"
      placeholder="Cantidad de productos viejos">
      </b-form-input>
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
      url: 'http://localhost:3000/proveedores/',
      esNuevoProveedor: true,
      proveedor: {
        cantidadProductos: '',
        cantidadProductosViejos: '',
        clave: '',
        emailContacto: '',
        nombre: ''
      },
    };
  },
  methods: {
    obtenerProveedor: function () {
      axios.get(this.url)
      .then(response => this.proveedor = response.data)
      .catch(e => console.log(e));
    },
    guardar: function (ev) {
      ev.preventDefault();
      if (this.esNuevoProveedor) {
        axios.post(this.url, this.proveedor)
        .then(() => {
          //console.log(response.data);
          this.regresar();
        })
        .catch(e => console.log(e));
      }
      else {
        axios.put(this.url, this.proveedor)
        .then(() => {
          //console.log(response.data);
          this.regresar();
        })
        .catch(e => console.log(e));
      }
    },
    regresar: function () {
      this.$router.go(-1);
    }
  },
  created() {
    const clave = this.$route.params.id;
    if (clave !== 'agregar') {
      this.url = `${this.url}${clave}`;
      this.proveedor.clave = clave;
      this.obtenerProveedor();
      this.esNuevoProveedor = false;
    }
  }
}
</script>

<style>
.formulario-proveedor {
  background: #f1f7ee;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
  padding: 1rem;
  text-align: left;
}
.contenedor-botones--formulario {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.formulario__btn--editar {
  justify-self: right;
}

.formulario__btn--cancelar {
  justify-self: left;
}
</style>