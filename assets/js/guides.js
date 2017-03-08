(function() {
  function getFilterValues(selector, checked) {
    var modifier = checked ? ":checked" : ":not(:checked)";
    var $selectedInputs = document.querySelectorAll(selector + modifier);
    var matches = [];
    $selectedInputs.forEach(function (input) {
      matches.push(input.value);
    });
    return matches;
  }

  function hasIntersection(array1, array2) {
    var intersection = array1.filter(function (element) {
      return array2.includes(element);
    });
    return (intersection.length > 0);
  }

  function refresh() {
    var selectedAudiences = getFilterValues(".guides-filter-audience", true);
    var selectedCategories = getFilterValues(".guides-filter-category", true);
    sessionStorage.setItem("selectedAudiences", selectedAudiences);
    sessionStorage.setItem("selectedCategories", selectedCategories);
    var $guideTableRows = document.querySelectorAll(".guides-table-row");
    $guideTableRows.forEach(function (row) {
      if (selectedCategories.includes(row.dataset.category) && hasIntersection(selectedAudiences, row.dataset.audiences.split(","))) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  function init() {
    var $allInputs = document.querySelectorAll(".guides-filter");
    var $audienceInputs = document.querySelectorAll(".guides-filter-audience");
    var $categoryInputs = document.querySelectorAll(".guides-filter-category");

    $allInputs.forEach(function (input) {
      input.addEventListener("change", refresh);
    });

    var selectedAudiences = sessionStorage.getItem("selectedAudiences");
    var selectedCategories = sessionStorage.getItem("selectedCategories");

    if (selectedAudiences !== null) {
      $audienceInputs.forEach(function (input) {
        input.checked = selectedAudiences.includes(input.value);
      });
    }

    if (selectedCategories !== null) {
      $categoryInputs.forEach(function (input) {
        input.checked = selectedCategories.includes(input.value);
      });
    }

    refresh();
  }

  init();
})();
