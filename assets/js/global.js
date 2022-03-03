Mousetrap.bind('/', function () {
  var searchField = document.getElementById('search-field-en-small');
  searchField.focus();
  return false;
});

(function () {
  //
  // Add figure/figcaption elements to images that have a title attribute, using the title as the caption.
  //

  $("img[title]").each(function () {
    $(this)
      .wrap("<figure>")
      .after(`<figcaption>${$(this).attr("title")}</figcaption>`);
  });


  //
  // Show a "Return to the top of this page" button after the user scrolls down
  //

  // How far the user scrolls before the button appears
  const topLinkThreshold = 300;

  $(window).on('scroll', function () {
    if (window.scrollY > topLinkThreshold) {
      $(".top-link").fadeIn();
    } else {
      $(".top-link").fadeOut();
    }
  });

  $(".top-link").on('click', function () {
    $("html").animate({
      scrollTop: 0
    }, 200);
  })
})();
