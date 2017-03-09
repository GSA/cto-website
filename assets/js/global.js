(function () {
  // Handle the nav toggle button click event.
  var $navToggleButton = document.getElementById("nav-toggle-button");
  $navToggleButton.addEventListener("click", function () {
    document.getElementsByClassName("nav-list")[0].classList.toggle("nav-revealed");
  });

  // Trigger point at which to perform dynamic effects on the nav bar
  var triggerPoint = 60;

  var $navPrimary = document.getElementById("nav-primary");
  var $bannerButton = document.querySelector("button.usa-banner-button");

  if (document.body.classList.contains("front")) {

    // Initially set the nav to transparent.
    $navPrimary.classList.add("nav-transparent");

    // Remove transparency when scrolling down.
    window.addEventListener("scroll", function () {
      var bannerExpanded = $bannerButton.getAttribute("aria-expanded") === "true";
      if (window.pageYOffset > triggerPoint) {
        $navPrimary.classList.remove("nav-transparent");
      } else if (!bannerExpanded) {
        $navPrimary.classList.add("nav-transparent");
      }
    });

    // Give the nav a background if the usa-banner is expanded. Otherwise,
    // the nav text may overlay the page content when the usa-banner pushes
    // it down.
    $bannerButton.addEventListener("click", function () {
      var bannerExpanded = $bannerButton.getAttribute("aria-expanded") === "true";
      if (!bannerExpanded) {
        $navPrimary.classList.remove("nav-transparent");
      } else {
        $navPrimary.classList.add("nav-transparent");
      }
    });
  }

  // Shrink the nav bar upon page scroll.
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > triggerPoint) {
      $navPrimary.classList.add("scrolled");
    } else {
      $navPrimary.classList.remove("scrolled");
    }
  });
})();
