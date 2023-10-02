# Tech at GSA website

This is the website for the GSA Office of the Chief Technology Officer.


## Architecture

This is a [Hugo-based](https://gohugo.io/) website designed to be published on the
[cloud.gov Pages](https://pages.cloud.gov/) platform.

The website utilizes the [US Web Design System](https://designsystem.digital.gov/).


## Setup

### Install Prerequisites

Ensure you have the following installed on your local machine:

* [Hugo](https://gohugo.io/getting-started/installing/)
* [Node.js](https://nodejs.org/en/)


### Building and previewing the website

First, install the project's dependencies:

```
npm install
```

Then you can run the site locally with live reloading and local CMS:

```
npm start
```

You should now be able to preview the site on your local machine at [http://localhost:1313/](http://localhost:1313/). The CMS is at [http://localhost:1313/admin/](http://localhost:1313/admin/).


## Development

### Assets

This project uses [Hugo Pipes](https://gohugo.io/hugo-pipes/) to manage most static asset files. It also uses [uswds-compile](https://github.com/uswds/uswds-compile) to manage USWDS-specific assets, as well as the site's stylesheet.

To override USWDS settings, edit [assets/sass/uswds-settings.scss](/assets/sass/uswds-settings.scss). We generally prefer to customize these settings rather then create new CSS style declarations when possible.

To edit site styles, use [assets/sass/styles.scss](/assets/sass/styles.scss).

After changing the styles, recompile them with `npx gulp compile`. Or you can automatically compile edited Sass files during development by running: `npx gulp watch` or just `npx gulp`.

Note that when updating USWDS to a newer version, it may be necessary to manually merge the newer files with the customizations to ensure that USWDS is importing the site's custom styles file.

## License

As a work of the United States Government, this project is in the public domain
within the United States.
