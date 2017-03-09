$(document).ready(function () {
  function getFilterValues(selector, checked) {
    var modifier = checked ? ":checked" : ":not(:checked)";
    var $selectedInputs = $(selector + modifier);
    var matches = [];
    $selectedInputs.each(function () {
      matches.push($(this).val());
    });
    return matches;
  }

  function hasIntersection(array1, array2) {
    var intersection = array1.filter(function (element) {
      return array2.includes(element);
    });
    return (intersection.length > 0);
  }

  function filtersUpdated() {
    var selectedAudiences = getFilterValues(".guides-filter-audience", true);
    var selectedCategories = getFilterValues(".guides-filter-category", true);
    sessionStorage.setItem("selectedAudiences", JSON.stringify(selectedAudiences));
    sessionStorage.setItem("selectedCategories", JSON.stringify(selectedCategories));
    $(".guides-table-row").each(function () {
      var categorySelected = selectedCategories.includes($(this).data("category"));
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
        $(this).prop("checked", selectedAudiences.includes($(this).val()));
      });
    }

    if (selectedCategories !== null) {
      $(".guides-filter-category").each(function () {
        $(this).prop("checked", selectedCategories.includes($(this).val()));
      });
    }

    filtersUpdated();
  }

  init();
});
