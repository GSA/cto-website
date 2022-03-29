/** @jsx createElement
 *
 * components.jsx: Custom elements to insert USWDS components
 *
 * Simplifies insertion of some common USWDS components when writing Markdown
 * or using the Netlify CMS editor.
 *
**/
(function () {
  //
  // Handler to convert JSX to JS. Called by Babel while compiling this file
  // whenever it encounters any JSX below.
  //
  const createElement = function (tag, attributes = {}, ...children) {
    if (tag === null) {
      console.log("null");
      return;
    }

    const element = Object.assign(document.createElement(tag), attributes);

    for (const child of children) {
      element.append(child);
    }

    return element;
  }; //
  // techgsa-alert: Build an USWDS Alert component
  // See: https://designsystem.digital.gov/components/alert/
  //
  // Designate the area where you want the alert by placing a custom element
  // named <techgsa-alert>. This element has some optional attributes:
  //
  // type: One of "info", "warning", "error", or "success". Default: "info"
  //
  // heading: Text for the alert heading. Default: ""
  //
  // --------------- HTML example ---------------
  // <techgsa-alert type="warning" heading"Hello">Hello, world!</techgsa-alert>
  // --------------------------------------------
  //


  $("techgsa-alert").each(function () {
    const type = $(this).attr("type") || "info";
    const bodyText = $(this).text();
    const headingText = $(this).attr("heading");
    const alert = createElement("div", {
      className: `usa-alert usa-alert--${type}`
    }, createElement("div", {
      className: "usa-alert__body"
    }, headingText ? createElement("h4", {
      className: "usa-alert__heading"
    }, headingText) : "", createElement("p", {
      className: "usa-alert__text"
    }, bodyText)));
    $(this).replaceWith(alert);
  });
})();