/* global lunr */

(function(baseurl) {
  if (baseurl === undefined) {
    baseurl = "";
  }

  function initSearchPage() {
    var searchTerm = getSearchQuery();
    if (searchTerm) {
      var url = baseurl + "/pages.json";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var pagesData = JSON.parse(xhr.responseText);
            search(pagesData.entries, searchTerm);
          } else {
            var $results = document.getElementById("search-results");
            var output = '<p>There was an error while searching. Please try again.</p>';
            output += '<p>' + xhr.statusText + '</p>';
            $results.innerHTML = output;
          }
        }
      };
      xhr.onerror = function () {
        var $results = document.getElementById("search-results");
        var output = '<p>There was an error while searching. Please try again.</p>';
        output += '<p>' + xhr.statusText + '</p>';
        $results.innerHTML = output;
      };
      xhr.send(null);
    }
  }

  function search(pages, searchTerm) {
    document.getElementById("search-field").setAttribute("value", searchTerm);
    var lunrIndex = lunr(function () {
      this.ref("id");
      this.field("title", { boost: 10 });
      this.field("body");
      for (var index in pages) {
        this.add({
          id: index,
          title: pages[index].title,
          body: pages[index].body
        });
      }
    });
    var matches = lunrIndex.search(searchTerm);
    console.log(matches);
    displayResults(matches, pages);
  }

  function getSearchQuery() {
    var rawParams = window.location.search.replace(/^\?/, "");
    var params = rawParams.split("&");
    for (var index in params) {
      var keyValuePair = params[index].split("=");
      var key = keyValuePair[0];
      var value = keyValuePair[1];
      if (key === "search") {
        return decodeURIComponent(value.replace(/\+/g, " "));
      }
    }
  }

  function displayResults(matches, pages) {
    var $results = document.getElementById("search-results");
    if (matches.length > 0) {
      var output = '<ul class="usa-unstyled-list">';
      for (var index in matches) {
        var page = pages[matches[index].ref];
        var pageNote = "";
        output += '<li>';
        output += '<h3><a href="' + page.url + '">' + page.title + '</a> ' + pageNote + '</h3>';
        output += '<p>' + page.body.substring(0, 200) + ' ...</p>';
        output += '</li>';
      }
      output += "</ul>";
      $results.innerHTML = output;
    } else {
      $results.innerHTML = "<p>No results found.</p>";
    }
  }

  initSearchPage();

})(window.baseurl);
