(function(baseurl) {
  if (baseurl === undefined) {
    baseurl = "";
  }

  var audienceInputs = document.getElementsByClassName("guides-filter-audience");
  for (var ai = 0; ai < audienceInputs.length; ai++) {
    audienceInputs[ai].addEventListener("change", function () {
      refresh();
    });
  }

  var categoryInputs = document.getElementsByClassName("guides-filter-category");
  for (var ci = 0; ci < audienceInputs.length; ci++) {
    categoryInputs[ci].addEventListener("change", function () {
      refresh();
    });
  }

  function refresh() {
    
  }
})(window.baseurl);
