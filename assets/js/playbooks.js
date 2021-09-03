// Automatically creates a TOC for playbooks. Requires the jekyll-toc Jekyll plugin.

$(function () {
  // Scroll to section when TOC link clicked
  $(".usa-sidenav a").on('click', function (event) {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 400);
  });

  // Highlight corresponding TOC link when scrolling down
  $(":header").waypoint(function (direction) {
    if (direction === "down") {
      $(".usa-sidenav a").removeClass("usa-current");
      $(".usa-sidenav a[href='#" + this.element.id + "']").addClass("usa-current");
    }
  }, {
    offset: 120
  });

  // Highlight corresponding TOC link when scrolling up
  $(":header").waypoint(function (direction) {
    if (direction === "up") {
      $(".usa-sidenav a").removeClass("usa-current");
      $(".usa-sidenav a[href='#" + this.element.id + "']").addClass("usa-current");
    }
  }, {
    offset: -120
  });

  // Dynamically create "Back to top" links at each heading
  $("#main-content h2, #main-content h3, #main-content h4, #main-content h5").before('<p><small><a href="#">Back to top</a></small></p>');

  // Initially highlight the top level TOC link
  $(".usa-sidenav a:first").addClass("usa-current");
});
