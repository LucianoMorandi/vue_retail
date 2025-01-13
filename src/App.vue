<template>
  <div id="app">
    <h1>My Vue.js App</h1>
    <nav>
      <router-link to="/products">Product List</router-link>
      <router-link to="/orders">Order List</router-link>
      <router-link to="/create-order">Create Order</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  nav a {
    margin: 0 10px;
  }
</style>
