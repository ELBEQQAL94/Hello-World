<template>
  <div id="app">
    <NavBar />
    <div class='container'>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/header/NavBar.vue';
import Footer from './components/footer';

// import materialize
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

export default{
  name: 'app',
  components:{
    NavBar,
    Footer
  }
}

</script>

<style>
body{
  height: 1000px;
}
</style>
