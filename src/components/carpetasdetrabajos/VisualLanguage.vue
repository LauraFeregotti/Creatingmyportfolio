<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-offset-2 col-lg-3">
          <h3>Art Pieces</h3>
        </div>
      </div>
       <div class="row">
        <div class="col-lg-offset-3 col-lg-6 col-lg-offset-3 explanation">
          <p>Work made for the subject "Visual Language" </p>
        </div>
      </div>

      <div class="row">

        <div class=" col-lg-offset-2 col-lg-8">
          <div class="image-frame">
            <img
              src="@/assets/images/VisualLanguage/colorsaturation.jpg"
              class="img-responsive images border"
              alt="colorsaturation"
            >
              <p class="title-description">Color saturation</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class=" col-lg-offset-2 col-lg-8">
          <div class="image-frame" >
            <img
              src="@/assets/images/VisualLanguage/graffiti-mirror.jpg"
              class="img-responsive images border"
              alt="graffiti-mirror"
            >
              <p class="title-description">Graffiti in a mirror</p>
          </div>
        </div>
      </div>
<div class="row">
        <div class=" col-lg-offset-2 col-lg-8">
          <div class="image-frame ">
            <img
              src="@/assets/images/VisualLanguage/graffiti-mirror2.jpg"
              class="img-responsive images border"
              alt="graffiti-mirror2"
            >
            <p class="title-description">Graffiti in a mirror</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class=" col-lg-offset-2 col-lg-8">
          <div class="image-frame ">
            <img
              src="@/assets/images/VisualLanguage/Polymerclay-cookies.jpg"
              class="img-responsive images border"
              alt="Polymerclay-cookies"
            >
              <p class="title-description">Polymerclay cookies</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class=" col-lg-offset-2 col-lg-8">
          <div class="image-frame ">
            <img
              src="@/assets/images/VisualLanguage/Ulay_Abramovic-AAAAAA.jpg"
              class="img-responsive images border"
              alt="Ulay_Abramovic-AAAAAA"
            >
              <p class="title-description">Ulay and Abramovic - AAA AAA</p>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>
<style>

.image-frame {
  background: #f7b69f;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
  text-align: center;
  box-shadow: 0px 0px 33px -4px rgba(0,0,0,0.34);
}
.images {
  margin-bottom: 12px;
}
.border {
  border: 0.5rem solid rgb(249, 246, 225);
}
h3 {
  margin-top: 45px;
  font-family: "abeer";
 color: #aeb4a9;
 text-align: center;
}
.rotation{
transform:rotate(90deg);
margin-top: 111px;
margin-bottom: 111px;

}
.title-description{
  font-family: "abeer";
  font-size: 22px;
  color: #f9f6e1;
}
.explanation{
  margin-top: 22px;
   font-family: "abeer";
   color: #aeb4a9;
  text-align: center;
    font-size: 19px;
}

</style>
