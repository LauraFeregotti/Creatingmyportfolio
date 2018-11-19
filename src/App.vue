<template>
  <div id="app">
    <div class="row">
      <div class="col-lg-offset-1 col-lg-1 font navtext">
        <span>about</span>
      
      </div>
      <div class=" col-lg-1 font navtext">
        <span>work</span>
        
      </div>
      <div class="col-lg-2 col-lg-offset-1 navlogo">
        <img class="imagenlogo " src="images/titulo.png" alt="titulo">
      </div>
      <div class=" col-lg-1 col-lg-offset-3 font navtext">
        <span>contact</span>
      </div>
    </div>
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
</style>
