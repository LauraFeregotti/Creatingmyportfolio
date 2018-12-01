<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class=" col-lg-1 col-md-2 font navtext hidden-md hidden-sm hidden-xs">
          <router-link
            to="/about"
            class="link"
          >about</router-link>
        </div>
        <div class=" col-lg-1 font navtext hidden-md hidden-sm hidden-xs">
          <router-link
            to="/"
            class="link"
          >work</router-link>
        </div>
        <div class="col-lg-offset-1 col-lg-6 col-lg-offset-1  navlogo hidden-md hidden-sm hidden-xs">
          <router-link
            to="/"
            class="link titulodescripcion"
          ><img
              class="image-logo  center-block "
              src="@/assets/images/titulo2.png"
              alt="titulo"
            ></router-link>
        </div>
        <div class=" col-lg-offset-2 col-lg-1  font navtext hidden-md hidden-sm hidden-xs">
          <router-link
            to="/contact"
            class="link"
          >contact</router-link>
        </div>
      </div>
       <div class="row">
      <div class="col-xs-offset-9 col-xs-3 hamburgermenu">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navCollapse">
          <img src="@/assets/images/icons/menu.png" alt="menu" class="menuicono" >
        </button>
      </div>
    </div>

           <div class="collapse navbar-collapse" id="navCollapse">
      <div class="row ">
        <div class=" col-lg-1 col-md-1 col-sm-2 font navtext hidden-lg visible-md visible-sm visible-xs linkcollapsehamburgermenu">
          <router-link
            to="/about"
            class="link"
          >about</router-link>
        </div>
        <div class=" col-lg-1 col-md-2 col-sm-2 font navtext hidden-lg visible-md visible-sm visible-xs">
          <router-link
            to="/"
            class="link"
          >work</router-link>
        </div>
        <div class=" col-lg-offset-2 col-lg-1 col-md-offset-7 col-md-2 col-sm-offset-6 col-sm-2 font navtext hidden-lg visible-md visible-sm visible-xs">
          <router-link
            to="/contact"
            class="link"
          >contact</router-link>
        </div>
      </div>
      </div>
      <div class="row">
        <div class="col-lg-offset-2 col-lg-8 col-lg-offset-2  navlogo hidden-lg hidden-xs visible-md visible-sm ">
          <router-link
            to="/"
            class="link titulodescripcion"
          ><img
              class="image-logo  center-block "
              src="@/assets/images/titulo2.png"
              alt="titulo"
            ></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-offset-2 col-lg-8 col-lg-offset-2  navlogo hidden-lg hidden-md hidden-sm visible-xs ">
          <router-link
            to="/"
            class="link titulodescripcion"
          ><img
              class="image-logo  center-block smalltitlelogo"
              src="@/assets/images/titulo2.png"
              alt="titulo"
            ></router-link>
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
          <span>© 2018 - Laura Feregotti</span>
        </div>
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
body {
  border: 1rem solid rgb(195, 225, 234);
  background: #f9f6e1;
}
a:hover {
  text-decoration: none;
}

a:link {
  text-decoration: none;
}
@font-face {
  font-family: "abeer";
  src: url("assets/fonts/AbeerDemo.ttf");
}
</style>

<style scoped>
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

.link {
  color: #aeb4a9;
}
.copyright {
  margin-top: 66px;
  padding: 44px;
  background-color: rgba(195, 225, 234);
  text-align: center;
  font-family: "abeer";
  color: #f9f6e1;
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
.menuicono{
  width: 27.6px;
  height: 27.6px;
  margin-top: 33px;
}
.smalltitlelogo{
width: 327px;
height: 277.799px;
}

</style>
