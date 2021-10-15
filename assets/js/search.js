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
      this.field("excerpt");
      this.field("fulltext");
      for (var index in pages) {
        this.add({
          id: index,
          title: pages[index].title,
          excerpt: pages[index].excerpt,
          fulltext: pages[index].fulltext
        });
      }
    });
    var matches = lunrIndex.search(searchTerm);
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
      var output = '<ul class="usa-list usa-list--unstyled search-results-list">';
      for (var index in matches) {
        var page = pages[matches[index].ref];
        var tags = page.collection ? `<span class="usa-tag font-body-3xs">${page.collection}</span>` : '';
        var path = page.url.replace(/\/$/, '').split('/').join(' › ');
        output += `
          <li>
            <h3><a href="${baseurl}${page.url}">${page.title}</a></h3>
            <p class="search-results-list__path">${tags} <a href="${page.url}">${path}</a></p>
            <p>${page.excerpt}</p>
          </li>
        `;
      }
      output += "</ul>";
      $results.innerHTML = output;
    } else {
      $results.innerHTML = "<p>No results found.</p>";
    }
  }

  initSearchPage();

})(window.baseurl);
