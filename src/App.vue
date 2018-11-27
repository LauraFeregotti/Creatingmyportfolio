<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class=" col-lg-1 font navtext">
          <router-link
            to="/about"
            class="link"
          >about</router-link>
        </div>
        <div class=" col-lg-1 font navtext">
          <router-link
            to="/"
            class="link"
          >work</router-link>
        </div>
        <div class="col-lg-offset-1 col-lg-6 col-lg-offset-1  navlogo">
          <router-link
            to="/"
            class="link titulodescripcion"
          ><img
              class="image-logo  center-block "
              src="/assets/images/titulo2.png"
              alt="titulo"
            ></router-link>
        </div>
        <div class=" col-lg-1 col-lg-offset-1 font navtext">
          <router-link
            to="/contact"
            class="link"
          >contact</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <footer class="page-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col">

          </div>
        </div>
      </div>
    </footer>
    <div class="footer-copyright copyright container-fluid">
      <div class="row">
        <div class="col-lg-offset-4 col-lg-4 col-lg-offset-4 ">
          <p>
            Laura Feregotti</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "abeer";
  src: url("/assets/fonts/AbeerDemo.ttf");
}
.image-logo {
  width: 338pt;
  height: 277.541pt;
}
.font {
  font-family: "abeer";
  font-size: 17pt;
  color: #aeb4a9;
}
.navlogo {
  margin-top: 31px;
}
.navtext {
  margin-top: 111px;
}
body {
  border: 1rem solid rgb(195, 225, 234, 0.6);
  background: #f9f6e1;
}
.link {
  color: #aeb4a9;
}
.copyright {
  margin-top: 66px;
  padding: 44px;
  background-color: rgb(195, 225, 234, 0.6);
  text-align: center;
  font-family: "abeer";
  font-size: 17pt;
}
.router-link:active {
  color: #f59f80;
}
a:active,
a:focus,
a:hover {
  color: #f59f80;
}
</style>
