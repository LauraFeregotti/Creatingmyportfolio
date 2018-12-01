<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-offset-2 col-lg-1 col-md-offset-4 col-md-1 col-sm-offset-4 col-sm-1 col-xs-offset-2 col-xs-3">
          <img
            src="@/assets/images/icons/email.png"
            alt="email"
            class="icon center-block"
          >
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3   sentence-contact">
          <p>laura.feregotti@gmail.com</p>
        </div>
        <div class="col-lg-1 col-md-offset-4 col-md-1  col-sm-offset-4 col-sm-1 col-xs-offset-2 col-xs-3">
          <img
            src="@/assets/images/icons/phone.png"
            alt="phone"
            class="icon center-block"
          >
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-2  sentence-contact">
          <p>+4917674563112</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-offset-2 col-lg-1 col-md-offset-4 col-md-1  col-sm-offset-4 col-sm-1 col-xs-offset-2 col-xs-3">
          <img
            src="@/assets/images/icons/ln.png"
            alt="linkedin"
            class="icon center-block"
          >
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3  col-xs-2  sentence-contact">
         <a href="https://www.linkedin.com/in/laura-feregotti/"  class="link"> <p>https://www.linkedin
            .com/in/laura-feregotti/</p></a>
        </div>
        <div class="col-lg-1 col-md-offset-4 col-md-1 col-sm-offset-4 col-sm-1 col-xs-offset-3 col-xs-3">
          <img
            src="@/assets/images/icons/location.png"
            alt="location"
            class="icon center-block"
          >
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 sentence-contact">
          <p>Stephanstrasse 52, 10559 Berlin, Germany</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.sentence-contact {
  color: #aeb4a9;
  margin-top: 64px;
  font-family: "abeer";
  font-size: 19px;
  padding: 0px;
}
.icon {
  padding: 0px;
  margin-top: 64px;
  width: 27px;
  height: 27px;
  text-align: right;
}
a:active,
a:focus,
a:hover {
  color: #f59f80;
}
.link {
  color: #aeb4a9;
}
</style>
