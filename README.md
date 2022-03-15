# Tech at GSA website

This is the website for the GSA Office of the Chief Technology Officer.


## Architecture

This is a [Jekyll-based](http://jekyllrb.com/) website designed to be published on the
[Federalist](https://federalist.18f.gov/) platform.

The website utilizes the [US Web Design System](https://designsystem.digital.gov/).


## Setup

### Install Prerequisites

Ensure you have the following installed on your local machine:

* Ruby
* Node.js


### Building and previewing the website

First, install `bundler` if you don't already have it:

```
gem install bundler
```

Then install the project's dependencies:

```
bundle install --with=development
npm install
```

Then you can run the site locally with live reloading and local CMS:

```
npm start
```

You should now be able to preview the site on your local machine at [http://localhost:4000/](http://localhost:4000/). The CMS is at [http://localhost:4000/admin/](http://localhost:4000/admin/).


## Development

### Assets

This project uses `gulp` to manage static asset files. It also includes some tasks derived from [uswds-compile](https://github.com/uswds/uswds-compile) to manage USWDS-specific assets.

To update vendor-provided Node modules:

```
npm update
npx gulp copyAssets
```

To update USWDS:

```
npm update uswds
npx gulp updateUswds
```

To update CMS preview templates (in the `_admin` directory) and JSX components (in the `_jsx` directory):

```
npx gulp compileAdminTemplates
npx gulp compileComponents
```

To modify USWDS custom styles, edit these files:

* [_techgsa-custom-settings.scss](/_sass/uswds/_techgsa-custom-settings.scss): overrides settings found in the various USWDS theme files in `_sass/uswds`
* [_uswds-theme-custom-styles.scss](/_sass/uswds/_uswds-theme-custom-styles.scss): contains all website styles

After changing the styles, recompile them with `npx gulp compile`. Or you can automatically compile edited Sass files during development by running: `npx gulp watch` or just `npx gulp`.

Note that when upgrading USWDS, it may be necessary to manually merge the newer files with the customizations in `_uswds-theme-custom-styles.scss`.

## License

As a work of the United States Government, this project is in the public domain
within the United States.
