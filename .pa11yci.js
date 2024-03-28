module.exports = {
  defaults: {
    concurrency: 1,
    // We're ignoring iframe elements because they're not used on the site, yet
    // DAP inserts an iframe into the DOM, and that iframe causes pa11y errors.
    hideElements: "iframe",
    chromeLaunchConfig: {
      args: ["--no-sandbox"]
    },
  },
};
