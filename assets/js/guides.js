$(document).ready(function () {
  function hasIntersection(array1, array2) {
    var intersection = array1.filter(function (element) {
      return array2.indexOf(element) !== -1;
    });
    return (intersection.length > 0);
  }

  function filtersUpdated() {
    var selectedAudiences = $(".guides-filter-audience:checked").map(function () { return $(this).val(); }).get();
    var selectedCategories = $(".guides-filter-category:checked").map(function () { return $(this).val(); }).get();
    sessionStorage.setItem("selectedAudiences", JSON.stringify(selectedAudiences));
    sessionStorage.setItem("selectedCategories", JSON.stringify(selectedCategories));
    $(".guides-table-row").each(function () {
      var categorySelected = selectedCategories.indexOf($(this).data("category")) !== -1;
      var audienceSelected = hasIntersection(selectedAudiences, $(this).data("audiences").split(","));
      $(this).toggle(categorySelected && audienceSelected);
    });
  }

  function init() {
    $(".guides-filter").change(filtersUpdated);

    var selectedAudiences = JSON.parse(sessionStorage.getItem("selectedAudiences"));
    var selectedCategories = JSON.parse(sessionStorage.getItem("selectedCategories"));

    if (selectedAudiences !== null) {
      $(".guides-filter-audience").each(function () {
        var audienceSelected = selectedAudiences.indexOf($(this).val()) !== -1;
        $(this).prop("checked", audienceSelected);
      });
    }

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
