$(document).ready(function () {
  var topOffset = -0.85 * window.innerHeight

  $(":header").each(function (index, header) {
    var sectionWatcher = scrollMonitor.create(header, { top: topOffset })
    sectionWatcher.enterViewport(function () {
      $(".usa-sidenav-list a").removeClass("usa-current")
      $(".usa-sidenav-list a[href='#" + sectionWatcher.watchItem.id + "']").addClass("usa-current")
    })
  })

  $(".usa-sidenav-list a").click(function (event) {
    var target = $(this).attr("href")
    $("html, body").animate({
      scrollTop: $(target).offset().top - $("#nav-primary").height() - 20
    }, 400, null, function () {
      $(".usa-sidenav-list a").removeClass("usa-current")
      $(".usa-sidenav-list a[href='#" + target + "']").addClass("usa-current")
    })
  })

  // dynamically add back to top links?
})
