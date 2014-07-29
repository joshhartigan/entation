$(function() {
  var SLIDE_COUNT = $(".slide").length;

  var PREVIOUS_KEYCODES = [112];

  var currentSlide = 1;

  for (var slide = 2; slide <= SLIDE_COUNT; slide++) {
    $(".slide." + slide).hide();
  }

  $(document).keypress(function(event) {

    if (!$.inArray(event.which, PREVIOUS_KEYCODES)) {
      if (currentSlide > 1) {
        $(".slide." + currentSlide).hide();
        currentSlide--;
        $(".slide." + currentSlide).fadeIn('fast');
      }
    } else {
      if (currentSlide < SLIDE_COUNT) {
        $(".slide." + currentSlide).hide();
        currentSlide++;
        $(".slide." + currentSlide).fadeIn('fast');
      }
    }
  });
});
