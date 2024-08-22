CMS.registerPreviewStyle("../assets/css/styles.css");
CMS.registerPreviewTemplate("emerging-technology", EmergingTechnologyPreview);
CMS.registerPreviewTemplate("guide", GuidePreview);

/**
 *
 * @param {String} shortcode A Hugo shortcode name (e.g., usa-alert)
 * @returns A RegExp object that can be used to match the shortcode, including
 * capture groups for the attributes and body
 *
 */
function patternForShortcode(shortcode) {
  const pattern = `{{<(?: *?)${shortcode} *(?<attrs>.*?)(?: *?)>}}(?<body>.*?){{<(?: *?)\/${shortcode}(?: *?)>}}`;
  const regex = RegExp(pattern, "ms");
  return regex;
}

/**
 *
 * @param {String} attrString A string of HTML attributes (e.g., color="red" size="13")
 * @returns Parsed attributes structured as an object
 *
 */
function parseAttributes(attrString) {
  // Create a temporary element to do attribute parsing for us
  const el = document.createElement("div");
  el.innerHTML = `<div ${attrString}>`;
  const child = el.childNodes[0];

  const attributes = {}
  for (const attribute of child.attributes) {
    let val = attribute.value;
    // Convert String to Boolean if necessary
    if (val.toLowerCase() === "true" || val.toLowerCase() === "false") {
      val = (String(val.toLowerCase()) === "true");
    }
    attributes[attribute.name] = val;
  }

  return attributes;
}

/**
 *
 * @param {*} match The result of passing the shortcode through the regex
 * @param {*} defaults Object containing default attribute values
 * @returns Object containing the shortcode's content
 */
function parseWithDefaults(match, defaults) {
  const attrs = match.groups["attrs"];
  const body = match.groups["body"];

  return {
    body: body,
    ...defaults,
    ...parseAttributes(attrs)
  }
}

/**
 *
 * @param {String} markdown Markdown content
 * @returns HTML String consisting of the rendered Markdown content
 *
 */
function renderMarkdown(markdown) {
  return window.markdownit().render(markdown);
}

/* CMS component for the usa-alert shortcode */
CMS.registerEditorComponent({
  id: "usa-alert",
  label: "Alert",
  fields: [
    {
      name: "type",
      label: "Type",
      widget: "select",
      options: ["none", "info", "warning", "error", "success"],
      default: "none"
    },
    {
      name: "heading",
      label: "Heading",
      widget: "string",
      default: ""
    },
    {
      name: "body",
      label: "Body",
      widget: "markdown",
      default: ""
    },
    {
      name: "slim",
      label: "Slim",
      widget: "boolean",
      default: false
    },
    {
      name: "icon",
      label: "Icon",
      widget: "boolean",
      default: true
    }
  ],
  pattern: patternForShortcode("usa-alert"),
  fromBlock: function (match) {
    const defaults = {
      heading: "",
      type: "",
      slim: false,
      icon: true
    }
    return parseWithDefaults(match, defaults);
  },
  toBlock: function (data) {
    return `{{< usa-alert heading="${data.heading}" type="${data.type}" slim=${data.slim || false} icon=${data.icon || true} >}}${data.body}{{< /usa-alert >}}`;
  },
  toPreview: function (data) {
    let classes = "";
    if (data.type) { classes = `${classes} usa-alert--${data.type}` };
    if (data.slim) { classes = `${classes} usa-alert--slim` };
    if (!data.icon) { classes = `${classes} usa-alert--no-icon` };

    return `
      <div class="usa-alert ${classes}">
        <div class="usa-alert__body">
          <h4 class="usa-alert__heading">${data.heading}</h4>
          <div class="usa-alert__text">
            ${renderMarkdown(data.body)}
          </div>
        </div>
      </div>
    `;
  }
});

/* CMS component for the usa-summary-box shortcode */
CMS.registerEditorComponent({
  id: "usa-summary-box",
  label: "Summary Box",
  fields: [
    {
      name: "heading",
      label: "Heading",
      widget: "string",
      default: ""
    },
    {
      name: "body",
      label: "Body",
      widget: "markdown",
      default: ""
    }
  ],
  pattern: patternForShortcode("usa-summary-box"),
  fromBlock: function (match) {
    const defaults = {
      heading: ""
    }
    return parseWithDefaults(match, defaults);
  },
  toBlock: function (data) {
    return `{{< usa-summary-box heading="${data.heading}" >}}${data.body}{{< /usa-summary-box >}}`;
  },
  toPreview: function (data) {
    const uniqueId = window.performance.now();

    return `
      <div
        class="usa-summary-box"
        role="region"
        aria-labelledby="summary-box-key-information-${uniqueId}"
      >
      <div class="usa-summary-box__body">
        <h3 class="usa-summary-box__heading" id="summary-box-key-information-${uniqueId}">
          ${data.heading}
        </h3>
        <div class="usa-summary-box__text">
          ${renderMarkdown(data.body)}
        </div>
      </div>
    </div>
    `;
  }
});

/* CMS component for the emergent-technology-case-study shortcode */
CMS.registerEditorComponent({
  id: "emergent-technology-case-study",
  label: "Emergent Technology Case Study",
  fields: [
    {
      name: "heading",
      label: "Heading",
      widget: "string",
      default: ""
    },
    {
      name: "body",
      label: "Body",
      widget: "markdown",
      default: ""
    }
  ],
  pattern: patternForShortcode("emergent-technology-case-study"),
  fromBlock: function (match) {
    const defaults = {
      heading: ""
    }
    return parseWithDefaults(match, defaults);
  },
  toBlock: function (data) {
    return `{{< emergent-technology-case-study heading="${data.heading}" >}}${data.body}{{< /emergent-technology-case-study >}}`;
  },
  toPreview: function (data) {
    const uniqueId = window.performance.now();

    return `
      <div
        class="emergent-technology-case-study"
        role="region"
        aria-labelledby="emergent-technology-case-study-key-information-${uniqueId}"
      >
      <div class="emergent-technology-case-study__body">
        <h3 class="emergent-technology-case-study__heading" id="emergent-technology-case-study-key-information-${uniqueId}">
          ${data.heading}
        </h3>
        <div class="emergent-technology-case-study__text">
          ${renderMarkdown(data.body)}
        </div>
      </div>
    </div>
    `;
  }
});
