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
  const topLinkSelector = ".techgsa-top-link";

  $(window).on('scroll', function () {
    if (window.scrollY > topLinkThreshold) {
      $(topLinkSelector).fadeIn();
    } else {
      $(topLinkSelector).fadeOut();
    }
  });

  $(topLinkSelector).on('click', function () {
    $("html").animate({
      scrollTop: 0
    }, 200);
  })


  //
  // Guides filtering functionality
  //

  /**
   * @returns {(string|Array)} A list of selected categories from persistence
   */
  function retrieveSelectedCategories() {
    var hash = window.location.hash.substring(1);
    var categories = [];
    if (hash === "") {
      categories = getCategoryList();
    } else {
      categories = deserializeCategories(hash);
    }
    return categories;
  }

  /**
   * @param {(string|Array)} categories - A list of selected categories to persist
   */
  function persistSelectedCategories(categories) {
    history.replaceState(undefined, undefined, "#" + serializeCategories(categories));
  }

  /**
   * @param {(string|Array)} categories - A list of categories
   * @returns {string} Serialized categories
   */
  function serializeCategories(categories) {
    var serialized = "";
    for (var i = 0; i < categories.length; i++) {
      if (i !== 0) {
        serialized += "+";
      }
      serialized += categories[i];
    }
    return serialized;
  }

  /**
   * @param {string} serializedCategories - A string representing a list of categories
   * @returns {(string|Array)} A list of categories
   */
  function deserializeCategories(serializedCategories) {
    return serializedCategories.split("+");
  }

  /**
   * @returns {(string|Array)} A list of all available categories
   */
  function getCategoryList() {
    return $(".guides-filter-category").map(function () { return $(this).val(); }).get();
  }

  /**
   * Event handler for when the user changes filtering options.
   */
  function filtersUpdated() {
    var selectedCategories = $(".guides-filter-category:checked").map(function () { return $(this).val(); }).get();
    persistSelectedCategories(selectedCategories);
    $(".guides-category").each(function () {
      var categorySelected = selectedCategories.indexOf($(this).data("category")) !== -1;
      $(this).toggle(categorySelected);
    });
  }

  function initGuidesFilter() {
    $(".guides-filter").on('change', filtersUpdated);
    var selectedCategories = retrieveSelectedCategories();
    if (selectedCategories !== null) {
      $(".guides-filter-category").each(function () {
        var categorySelected = selectedCategories.indexOf($(this).val()) !== -1;
        $(this).prop("checked", categorySelected);
      });
    }
    filtersUpdated();
  }

  if ($(".guides-filter").length) { initGuidesFilter(); }
})();
