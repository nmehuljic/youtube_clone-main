"use strict";
let $menuSideButton = document.getElementById("btnNavLogo");
let $sideBarDiv = document.getElementById("siderLeft");
let $iconsSidebar = document.getElementById("miniIconSider");

///// LIJEVI SIDEBAR
$(document).ready(function () {
  $($menuSideButton).click(function () {
    $($iconsSidebar).toggle(10);
    $($sideBarDiv).toggle(10);
  });

  //CLICK ON PRIJAVI SE
  $(document.getElementsByClassName("prijaviSe")).on("click", function () {
    window.location =
      "https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dhr%26next%3D%252Fwatch%253Fv%253DW1vzZXQGpeM&hl=hr&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
  });
});

// window.addEventListener("DOMContentLoaded", function () {
//   let setingsMenu1 = document.querySelector(
//     "body > nav > div > div.col-sm-2.d-flex.text-end > div > div.dropdown-center.dropstart.me-2 > ul > li:nth-child(1) > a"
//   );
//   setingsMenu1.addEventListener("click", function () {
//     alert("tete");
//   });
//   console.log(setingsMenu1);
// });
