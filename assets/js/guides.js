$(document).ready(function () {
  function hasIntersection(array1, array2) {
    var intersection = array1.filter(function (element) {
      return array2.indexOf(element) !== -1;
    });
    return (intersection.length > 0);
  }

  function filtersUpdated() {
    var selectedCategories = $(".guides-filter-category:checked").map(function () { return $(this).val(); }).get();
    sessionStorage.setItem("selectedCategories", JSON.stringify(selectedCategories));
    $(".guides-table-row, .guides-table-category-heading").each(function () {
      var categorySelected = selectedCategories.indexOf($(this).data("category")) !== -1;
      $(this).toggle(categorySelected);
    });
  }

  function init() {
    $(".guides-filter").change(filtersUpdated);
    var selectedCategories = JSON.parse(sessionStorage.getItem("selectedCategories"));
    if (selectedCategories !== null) {
      $(".guides-filter-category").each(function () {
        var categorySelected = selectedCategories.indexOf($(this).val()) !== -1;
        $(this).prop("checked", categorySelected);
      });
    }
    filtersUpdated();
  }

  init();
});
