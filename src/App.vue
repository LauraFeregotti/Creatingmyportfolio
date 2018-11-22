<template>
  <div id="app">
    <div class="row">
      <div class="col-lg-offset-1 col-lg-1 font navtext">
      <router-link to="/about" class="link">about</router-link>
      </div>
      <div class=" col-lg-1 font navtext">
        <router-link to="/" class="link">work</router-link>
      </div>
      <div class="col-lg-2 col-lg-offset-1 navlogo">
        <img class="imagenlogo " src="images/titulo.png" alt="titulo">
      </div>
      <div class=" col-lg-1 col-lg-offset-3 font navtext">
     <router-link to="/contact" class="link">contact</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'abeer';
    src: url("/fonts/AbeerDemo.ttf");
}
.imagenlogo{
  width: 338pt;
  height: 277.541pt;

}
.font{
font-family: 'abeer';
font-size: 17pt;
color: #AEB4A9;
}

.navlogo{
  margin-top: 31px;
}
.navtext{
margin-top: 111px;
}
body{
  border: 1rem solid rgb(216, 218, 240, .6);

}
.link{
  color: #AEB4A9;;
}

</style>
