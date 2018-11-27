<template>
  <div>

    <div class="row">

      <div class=" col-lg-2">

        <h3>My Work</h3>

      </div>

    </div>
    <div class="container">
      <div class="row">

        <div class="col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/ElPalacioSalon/chanel.jpg"
              class="img-responsive images"
              alt="ElPalacioSalon"
            >

            <a
              href="https://lauraferegotti.github.io/elpalaciosalon/"
              class="title-description"
            >El Palacio Salón - Website redesign</a>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="image-frame ">
            <img
              src="/assets/images/Photographyexercise/_DSF2402.jpg"
              class="img-responsive images"
              alt="Photographyexercise"
            >

            <router-link
              to="/Photographyexercise"
              class="link title-description"
            >Photography exercise</router-link>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-lg-6   images">
          <div class="image-frame">
            <img
              src="/assets/images/infographic-Argy/info3.jpg"
              class="img-responsive  images"
              alt="infographic-Argy"
            >

            <a
              href="https://lauraferegotti.github.io/infography/"
              class="title-description"
            >Argyrosaurus Superbus infographic</a>
          </div>
        </div>

        <div class=" col-lg-6   images">
          <div class="image-frame">
            <img
              src="/assets/images/Shortfilm/teketeke.png"
              class="img-responsive  images"
              alt="Shortfilm"
            >

            <a
              href="https://www.youtube.com/watch?v=5xReLzeFhV4"
              class="title-description"
            >Teke Teke - Short Film</a>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/WoodyAllen/woody.png"
              class="img-responsive  images"
              alt="WoodyAllen"
            >

            <a
              href="https://lauraferegotti.github.io/WoodyAllen/index.html"
              class="title-description"
            >Woody Allen - Infography</a>
          </div>
        </div>

        <div class="col-lg-6 ">
          <div class="image-frame">
            <img
              src="/assets/images/ParaTi-App/2pantalla.jpg"
              class="img-responsive  images"
              alt="ParaTi-App"
            >

            <a
              href="https://marvelapp.com/934ej5e/screen/29922205"
              class="title-description"
            >Para Ti - Application</a>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/ParaTi-Web/1.jpg"
              class="img-responsive  images"
              alt="ParaTi-Web"
            >

            <a
              href="https://lauraferegotti.github.io/parati/"
              class="title-description"
            >Para Ti - Website</a>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/PUKE/puke.jpg"
              class="img-responsive  images"
              alt="PUKE"
            >

            <a
              href="https://www.facebook.com/puke.game/"
              class="title-description"
            >PUKE - Video Game</a>
          </div>
        </div>

      </div>

      <div class="row">

        <div class=" col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/CrockeryAttack/Kitchen-background-1.jpg"
              class="img-responsive  images"
              alt="CrockeryAttack"
            >

            <router-link
              to="/CrockeryAttack"
              class="link title-description"
            >CrockeryAttack - Video Game Art</router-link>
          </div>
        </div>

        <div class="col-lg-6 ">
          <div class=" image-frame">
            <img
              src="/assets/images/Videogame-Processing/menu7.jpg"
              class="img-responsive  images"
              alt="Videogame-Processing"
            >
            <a
              href="https://github.com/LauraFeregotti/Catch-the-Apples"
              class="title-description"
            >Processing - Video Game</a>

          </div>
        </div>

      </div>

      <div class="row">

        <div class=" col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/NEXO/creartransmision.jpg"
              class="img-responsive  images"
              alt="NEXO"
            >
            <router-link
              to="/NEXO"
              class="link title-description"
            >NEXO - Web Application for esoteric writers</router-link>

          </div>
        </div>

        <div class="col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/VisualLanguage/Ulay_Abramovic-AAAAAA.jpg"
              class="img-responsive  images"
              alt="VisualLanguage"
            >
            <router-link
              to="/VisualLanguage"
              class="link title-description"
            >Visual Language work</router-link>

          </div>
        </div>

      </div>

      <div class="row">

        <div class=" col-lg-6">
          <div class="image-frame">
            <img
              src="/assets/images/ArtPieces/Tiger_3.jpg"
              class="img-responsive  images"
              alt="ArtPieces"
            >
            <router-link
              to="/ArtPieces"
              class="link title-description"
            >Art Pieces</router-link>

          </div>
        </div>

        <div class="col-lg-6">

        </div>

      </div>
    </div>

  </div>
</template>


<style scoped>
@font-face {
  font-family: "abeer";
  src: url("/assets/fonts/AbeerDemo.ttf");
}

h3 {
  margin-top: 88px;
  font-family: "abeer";
  color: #aeb4a9;
}

.image-frame {
  background: #f59f80;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 12px;
  margin-top: 55px;
  text-align: center;
}
.title-description {
  font-family: "abeer";
  font-size: 22px;
  color: white;
}
.images {
  margin-bottom: 12px;
}
h3 {
  text-align: center;
}
</style>
<script>
export default {

  data() {

    return {

      images: [{}]

    }

  }

}
</script>
