<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/productos">Juegos</router-link> |
      <router-link to="/about">Nosotros</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(173, 54, 17);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(69, 24, 10);
}

nav a.router-link-exact-active {
  color: rgb(173, 54, 17);
}
</style>
