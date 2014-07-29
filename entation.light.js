window.onload = function() {
  var SLIDE_COUNT = document.getElementsByClassName("slide").length;
  var PREVIOUS_KEYCODES = [80];
  var currentSlide = 1;

  for (var e = 0; e < document.getElementsByClassName("entation"); e++) {
    document.getElementsByClassName("entation")[e].style.position = "relative";
  }

  for (var slide = 0; slide <= SLIDE_COUNT - 1; slide++) {
    document.getElementsByClassName("slide")[slide].style.position = "absolute";
    document.getElementsByClassName("slide")[slide].style.top = "5px";
    if (slide >= 1) {
      document.getElementsByClassName("slide")[slide].style.visibility = "hidden";
    }
  }

  window.onkeydown = function(event) {
    if (PREVIOUS_KEYCODES.indexOf(event.which) != 0) {
      if (currentSlide < SLIDE_COUNT) {
        document.getElementsByClassName("slide")[currentSlide - 1].style.visibility = "hidden";
        currentSlide++;
        document.getElementsByClassName("slide")[currentSlide - 1].style.visibility = "visible";
      }
    } else { // if the key is in PREVIOUS_KEYCODES
      if (currentSlide > 1) {
        document.getElementsByClassName("slide")[currentSlide - 1].style.visibility = "hidden";
        currentSlide--;
        document.getElementsByClassName("slide")[currentSlide - 1].style.visibility = "visible";
      }
    }
  };
};

