(function(baseurl = "") {

  function initSearchPage() {
    var searchTerm = getSearchQuery();
    if (searchTerm) {
      var url = baseurl + "/api/v1/pages.json";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var pagesData = JSON.parse(xhr.responseText);
            search(pagesData.entries, searchTerm);
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
      xhr.send(null);
    }
  }

  function search(pages, searchTerm) {
    document.getElementById("search-field").setAttribute("value", searchTerm);
    var lunrIndex = lunr(function () {
      this.field("id");
      this.field("title", { boost: 10 });
      this.field("body");
    });
    for (var index in pages) {
      lunrIndex.add({
        id: index,
        title: pages[index].title,
        body: pages[index].body
      });
    }
    var results = lunrIndex.search(searchTerm);
    displayResults(results, pages);
  }

  function getSearchQuery() {
    var rawParams = window.location.search.replace(/^\?/, "");
    params = rawParams.split("&");
    for (var index in params) {
      var keyValuePair = params[index].split("=");
      var key = keyValuePair[0];
      var value = keyValuePair[1];
      if (key === "search") {
        return decodeURIComponent(value.replace(/\+/g, " "));
      }
    }
  }

  function displayResults(results, data) {
    var $results = document.getElementById("search-results");
    if (results.length > 0) {
      var output = '<ul class="usa-unstyled-list">';
      for (var index in results) {
        var itemData = data[results[index].ref];
        output += '<li><a href="' + itemData.url + '"><h3>' + itemData.title + '</h3></a><p>' + itemData.body.substring(0, 200) + ' ...</p></li>';
      }
      output += "</ul>";
      $results.innerHTML = output;
    } else {
      $results.innerHTML = "<p>No results found.</p>";
    }
  }

  initSearchPage();

})(window.baseurl);
