<template>
  <div>

    <div class="row">

      <div class="col-lg-2">

        <h3>My Work</h3>

      </div>

    </div>

    <div class="row">

      <div class="col-lg-6">
        <div class="image-frame">

          <router-link to="/ElPalacioSalon"
            class="title-description"
          > <img
              src="@/assets/images/ElPalacioSalon/chanel.jpg"
              class="img-responsive images border"
              alt="ElPalacioSalon"
            >
            El Palacio Salón - Website redesign
          </router-link>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="image-frame ">
          <router-link
            to="/Photographyexercise"
            class="link title-description"
          > <img
              src="@/assets/images/Photographyexercise/_DSF2402.jpg"
              class="img-responsive images border"
              alt="Photographyexercise"
            >

            Photography exercise</router-link>
        </div>
      </div>

    </div>

    <div class="row">

      <div class="col-lg-6   images">
        <div class="image-frame">
          <router-link to="/ArgyrosaurusInfographic"
            class="title-description"
          > <img
              src="@/assets/images/infographic-Argy/info3.jpg"
              class="img-responsive  images border"
              alt="infographic-Argy"
            >

            Argyrosaurus Superbus infographic </router-link>
        </div>
      </div>

      <div class=" col-lg-6   images">
        <div class="image-frame">
          <router-link to="/TekeTeke"
            class="title-description"
          > <img
              src="@/assets/images/Shortfilm/teketeke.png"
              class="img-responsive  images border"
              alt="Shortfilm"
            >

            Teke Teke - Short Film</router-link>
        </div>
      </div>

    </div>

    <div class="row">

      <div class="col-lg-6">
        <div class="image-frame">
          <router-link to="/WoodyAllen"
            class="title-description"
          > <img
              src="@/assets/images/WoodyAllen/woody.png"
              class="img-responsive  images border"
              alt="WoodyAllen"
            >

            Woody Allen - Infography</router-link>
        </div>
      </div>

      <div class="col-lg-6 ">
        <div class="image-frame">
          <router-link to="/ParaTiApp"
            href="https://marvelapp.com/934ej5e/screen/29922205"
            class="title-description"
          > <img
              src="@/assets/images/ParaTi-App/2pantalla.jpg"
              class="img-responsive  images border"
              alt="ParaTi-App"
            >

            Para Ti - Application</router-link>
        </div>
      </div>

    </div>

    <div class="row">

      <div class="col-lg-6">
        <div class="image-frame">
          <router-link to="/ParaTiWebSite"
            href="https://lauraferegotti.github.io/parati/"
            class="title-description"
          > <img
              src="@/assets/images/ParaTi-Web/1.jpg"
              class="img-responsive  images border"
              alt="ParaTi-Web"
            >

            Para Ti - Website</router-link>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="image-frame">
          <router-link to="/PUKE"
            href="https://www.facebook.com/puke.game/"
            class="title-description"
          > <img
              src="@/assets/images/PUKE/puke.jpg"
              class="img-responsive  images border"
              alt="PUKE"
            >

            PUKE - Video Game</router-link>
        </div>
      </div>

    </div>

    <div class="row">

      <div class=" col-lg-6">
        <div class="image-frame">
          <router-link
            to="/CrockeryAttack"
            class="link title-description"
          > <img
              src="@/assets/images/CrockeryAttack/Kitchen-background-1.jpg"
              class="img-responsive  images border"
              alt="CrockeryAttack"
            >

            CrockeryAttack - Video Game Art</router-link>
        </div>
      </div>

      <div class="col-lg-6 ">
        <div class=" image-frame">
          <router-link to="/ProcessingVideoGame"
            href="https://github.com/LauraFeregotti/Catch-the-Apples"
            class="title-description"
          > <img
              src="@/assets/images/Videogame-Processing/menu7.jpg"
              class="img-responsive  images border"
              alt="Videogame-Processing"
            >
            Processing - Video Game</router-link>

        </div>
      </div>

    </div>

    <div class="row">

      <div class=" col-lg-6">
        <div class="image-frame">
          <router-link
            to="/NEXO"
            class="link title-description"
          ><img
              src="@/assets/images/NEXO/creartransmision.jpg"
              class="img-responsive  images border"
              alt="NEXO"
            >
            NEXO - Web Application for esoteric writers</router-link>

        </div>
      </div>

      <div class="col-lg-6">
        <div class="image-frame">
          <router-link
            to="/VisualLanguage"
            class="link title-description"
          > <img
              src="@/assets/images/VisualLanguage/Ulay_Abramovic-AAAAAA.jpg"
              class="img-responsive  images border"
              alt="VisualLanguage"
            >
            Visual Language work</router-link>

        </div>
      </div>

    </div>

    <div class="row">

      <div class=" col-lg-6">
        <div class="image-frame">
          <router-link
            to="/ArtPieces"
            class="link title-description"
          > <img
              src="@/assets/images/ArtPieces/Tiger_3.jpg"
              class="img-responsive  images border"
              alt="ArtPieces"
            >
            Art Pieces</router-link>

        </div>
      </div>

      <div class="col-lg-6">

      </div>

    </div>

  </div>
</template>

<style scoped>
h3 {
  margin-top: 45px;
  font-family: "abeer";
  color: #aeb4a9;
  text-align: center;
}

.image-frame {
  background: #f7b69f;

  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 12px;
  margin-top: 15px;
  text-align: center;
  box-shadow: 0px 0px 33px -4px rgba(0, 0, 0, 0.34);
}
.title-description {
  font-family: "abeer";
  font-size: 22px;
  color: #f9f6e1;
}
.images {
  margin-bottom: 12px;
}

.border {
  border: 0.5rem solid rgb(249, 246, 225);
}
.repository{
  color:   #aeb4a9;
}
</style>
<script>

export default {
  data () {
    return {
      images: [{}]
    }
  }
}
</script>
