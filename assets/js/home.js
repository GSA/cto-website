(function () {

  /* Equalize heights of the vision elements on the home page */
  function equalizeVisionElements() {
    var elements = document.getElementsByClassName("vision-element");
    var tallest = 0;
    var i = 0;
    for (i = 0; i < elements.length; i++) {
      if (elements[i].offsetHeight > tallest) {
        elements[i].style.height = "auto";
        tallest = elements[i].offsetHeight;
      }
    }
    for (i = 0; i < elements.length; i++) {
      elements[i].style.height = tallest + "px";
    }
  }

  equalizeVisionElements();

  /* Prevent the equalize function from continuously firing upon resize */
  var resizeTimeout;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(equalizeVisionElements, 10);
  });

})();
