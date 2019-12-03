<template>
  <section class="app">
    <b-navbar class="nav">
      <router-link class="nav__enlace" to="/proveedores">Proveedores</router-link>|
      <router-link class="nav__enlace" to="/articulos">Articulos</router-link>
    </b-navbar>
    <main class="container main">
      <router-view/>
    </main>
    <footer class="footer">
      <section class="container">
        Laboratorio Nacional de Informática Avanzada | Saúl Enrique Melchor Ramírez
      </section>
    </footer>
  </section>
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
}

.app {
  background: #e2efde;
  display: grid;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  gap: 1rem;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  overflow: auto;
  text-align: center;
  color: #2c3e50;
}

.nav {
  background: #2b4162;
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
  color: #e2efde;
  justify-content: center;
  padding: 2rem;
}

.nav a {
  margin: 0 1rem;
  font-weight: bold;
  color: #e2efde;
  text-decoration: none;
}

.nav a.router-link-exact-active,
.nav a.router-link-active {
  color: #fa9f42;
  text-decoration: none;
}

.nav__enlace {
  position: relative;
}

.nav__enlace::after {
  margin-bottom: -3px;
  content: '';
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  background: #e2efde;
  transition: 0.2s;
}

.nav__enlace:hover::after,
.router-link-exact-active::after,
.router-link-active::after {
    width: 100%;
}

.nav__enlace.router-link-exact-active::after,
.nav__enlace.router-link-active::after {
  background: #fa9f42;
}

.footer {
  background: #2b4162;
  box-shadow: 0 -2px 4px rgba(0,0,0,.5);
  color: #e2efde;
  text-align: right;
  padding: 2rem;
}

/*https://coolors.co/2b4162-fa9f42-e2efde-32292f-6e7dab*/
</style>
