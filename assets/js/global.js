Mousetrap.bind('/', function () {
  var searchField = document.getElementById('basic-search-field-small');
  searchField.focus();
  return false;
});

(function () {
  // Add figure/figcaption elements to images that have a title attribute, using the title as the caption.
  $("img[title]").each(function () {
    $(this)
      .wrap("<figure>")
      .after(`<figcaption>${$(this).attr("title")}</figcaption>`);
  });
})();
