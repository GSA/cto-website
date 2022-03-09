/*
 * tocomatic.js
 *
 * Automatically build an USWDS side nav based on heading elements present on
 * the page.
 *
 * Designate the area where you want the side nav placing a custom element
 * named <techgsa-toc>. This element has some optional attributes:
 *
 * target: The target selector where we should look for headings. Default: ""
 * (meaning search the entire page for headings)
 *
 * min: The minimum heading level this script should look at when generating
 * the side nav. Default: 2 (meaning <H2>)
 *
 * max: The maximum heading level this script should look at when generating
 * the side nav. Default: 3 (meaning <H3>)
 *
 * --------------- HTML example ---------------
 *
 * <techgsa-toc target="#content" min="2" max="4"></techgsa-toc>
 *
 * --------------------------------------------
 *
**/

(function () {
  // Defaults in case attributes are not given in the <techgsa-toc> element.
  const defaultMinLevel = 2;
  const defaultMaxLevel = 3;
  const defaultTarget = "";

  // Build an USWDS side nav item given a heading
  function buildItem(heading, currentLevel, maxLevel) {
    if (currentLevel > maxLevel) { return; }

    const item = $('<li class="usa-sidenav__item"></li>');
    const link = $(`<a href="#${heading.attr("id")}">${heading.text()}</a>`);
    item.append(link);

    if (!(currentLevel + 1 > maxLevel)) {
      const sublist = buildSublist(heading, currentLevel, maxLevel);
      item.append(sublist);
    }

    return item;
  }

  // Build an USWDS side nav sublist given a parent heading
  function buildSublist(parentHeading, currentLevel, maxLevel) {
    const subheadings = parentHeading.nextUntil(`h${currentLevel}`, `h${currentLevel + 1}`)
    if (subheadings.length === 0) { return; }

    const sublist = $('<ul class="usa-sidenav__sublist"></ul>');

    subheadings.each(function () {
      const item = buildItem($(this), currentLevel + 1, maxLevel);
      sublist.append(item);
    });

    return sublist;
  }

  // Build a CSS selector describing all qualifying headings.
  function headingSelector(target, min, max) {
    let selector = [];

    for (let i = min; i <= max; i++) {
      selector.push(`${target} h${i}`);
    }

    return selector.join(",");
  }

  if ($("techgsa-toc").length > 0) {
    $("techgsa-toc").each(function () {
      const minLevel = parseInt($(this).attr("min")) || defaultMinLevel;
      const maxLevel = parseInt($(this).attr("max")) || defaultMaxLevel;
      const target = $(this).attr("target") || defaultTarget;

      const $sideNav = $('<nav aria-label="Table of contents"></nav>');
      const $topLevel = $('<ul class="usa-sidenav"></ul>')
      $(this).append($sideNav);
      $sideNav.append($topLevel);

      $(`${target} h${minLevel}`).each(function () {
        const topLevelitem = buildItem($(this), minLevel, maxLevel);
        $topLevel.append(topLevelitem);
      });

      // Scroll to section when TOC link clicked
      $("techgsa-toc .usa-sidenav a").on('click', function () {
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 400);
      });

      // Highlight corresponding TOC link when scrolling down
      $(headingSelector(target, minLevel, maxLevel)).waypoint(function (direction) {
        if (direction === "down") {
          $("techgsa-toc .usa-sidenav a").removeClass("usa-current");
          $("techgsa-toc .usa-sidenav a[href='#" + this.element.id + "']").addClass("usa-current");
        }
      }, {
        offset: 120
      });

      // Highlight corresponding TOC link when scrolling up
      $(headingSelector(target, minLevel, maxLevel)).waypoint(function (direction) {
        if (direction === "up") {
          $("techgsa-toc .usa-sidenav a").removeClass("usa-current");
          $("techgsa-toc .usa-sidenav a[href='#" + this.element.id + "']").addClass("usa-current");
        }
      }, {
        offset: -120
      });
    });

    // Initially highlight the top level TOC link
    $("techgsa-toc .usa-sidenav a:first").addClass("usa-current");
  }

})();
