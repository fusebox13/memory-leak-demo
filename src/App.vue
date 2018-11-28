<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/mortal">Mortal</router-link> |
      <router-link to="/immortal">Immortal</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,
body {
  background: black;
}

button {
  background: #660000;
  color: gray;
  font-weight: 800;
  border: none;
  margin: 1em;
  padding: 1em;

  &:hover {
    background: black;
    color: #660000;
    border: 1px solid #660000;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  color: white;
  padding: 30px;
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
