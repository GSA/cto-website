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

Then install the project's Ruby dependencies:

```
bundle install --with=development
```

Then you can run the site locally with live reloading and local CMS:

```
npm start
```

You should now be able to preview the site on your local machine at [http://localhost:4000/](http://localhost:4000/). The CMS is at [http://localhost:4000/admin/](http://localhost:4000/admin/).



## Development

### Assets

This project uses `gulp` to manage static asset files. It also includes some tasks derived from [uswds-gulp](https://github.com/uswds/uswds-gulp) to manage USWDS-specific assets.

To update vendor-provided Node modules:

```
npm update
gulp copy-assets
```

To update USWDS:

```
gulp copy-uswds-fonts
gulp copy-uswds-images
gulp copy-uswds-js
gulp build-sass
```

To modify USWDS custom styles, edit the files in [_sass/uswds](/_sass/uswds), particularly [_uswds-theme-custom-styles.scss](/_sass/uswds/_uswds-theme-custom-styles.scss). You can automatically compile edited Sass files during development by running:

```
gulp watch
```

Note that when upgrading USWDS, you may have to copy new USWDS SASS files over and it may be necessary to manually merge the newer files with the customizations in [_sass/uswds](/_sass/uswds).

## License

As a work of the United States Government, this project is in the public domain
within the United States.
