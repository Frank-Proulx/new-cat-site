$(document).ready(function() {

  const buttonMode = document.getElementById("button-mode");


  $("button").click(function() {
    $("body").toggleClass("dark");
    if (buttonMode.textContent === "Click here for Dark Mode") {
      buttonMode.textContent = "Click here for Light Mode";
    } else {
      buttonMode.textContent = "Click here for Dark Mode";
    }
  });

  $("p").click(function() {
    $("p").removeClass();
    $(this).toggleClass("highlight");
  });









});