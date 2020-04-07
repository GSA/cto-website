$(document).ready(function () {
  $(".usa-sidenav-list a").click(function (event) {
    var target = $(this).attr("href")
    $("html, body").animate({
      scrollTop: $(target).offset().top - $("#nav-primary").height() - 20
    }, 400)
  })

  $(":header").waypoint(function (direction) {
    if (direction === "down") {
      $(".usa-sidenav-list a").removeClass("usa-current")
      $(".usa-sidenav-list a[href='#" + this.element.id + "']").addClass("usa-current")
    }
  }, {
    offset: $("#nav-primary").height()
  })

  $(":header").waypoint(function (direction) {
    if (direction === "up") {
      $(".usa-sidenav-list a").removeClass("usa-current")
      $(".usa-sidenav-list a[href='#" + this.element.id + "']").addClass("usa-current")
    }
  }, {
    offset: 0
  })

  $("#main-content h2, #main-content h3, #main-content h4, #main-content h5").before('<p><small><a href="#">Back to top</a></small></p>')
})
