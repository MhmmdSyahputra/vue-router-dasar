<template>
  <div id="container">
    <nav>
      <h1>
        <router-link :to="{name: 'Home'}">Home</router-link> |
        <router-link :to="{name: 'About'}">About</router-link> |
        <router-link to="/User/putra">User</router-link>
      </h1> 
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
