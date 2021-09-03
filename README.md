# Tech at GSA website

This is the website for the GSA Office of the Chief Technology Officer.


## Architecture

This is a [Jekyll-based](http://jekyllrb.com/) website designed to be published on the
[Federalist](https://federalist.18f.gov/) platform.

The website utilizes the [US Web Design System](https://designsystem.digital.gov/).


## Setup

There are two ways you can set up your development environment:

* [**Method 1:** Install all tools and dependencies on your local machine (Ruby, Node.js, etc)](#method-1-local-development-environment)
* [**Method 2:** Use Docker to maintain all tools and dependencies inside a container](#method-2-containerized-development-environment-using-docker)


### Method 1: Local development environment

This method explains how to set up a local development environment by installing all necessary tools and dependencies.


#### Install Ruby

Since this is a Jekyll-based website, you will need [Ruby](https://www.ruby-lang.org/en/). The best way to get Ruby is to install it via [rbenv](https://github.com/rbenv/rbenv). See the [rbenv installation instructions](https://github.com/rbenv/rbenv#installation) to set it up on your system.


#### Install Node.js and npm

We use [`npm`](https://www.npmjs.com/) along with [`gulp`](http://gulpjs.com/) to manage front-end dependencies. In order to get `npm`, install [Node.js](https://nodejs.org/). You do not strictly need `npm` to work on the website content. You only need it if you plan to update the [vendor assets](/assets/vendor/).


#### Building and previewing the website

First, install `bundler` if you don't already have it:

```
gem install bundler
```

Then install the project's Ruby dependencies:

```
bundle install --with=development
```

Then you can run the site locally with live reloading:

```
bundle exec rake serve
```

You should now be able to preview the site on your local machine at [http://localhost:4000/](http://localhost:4000/).


### Method 2: Containerized development environment using Docker

This method explains how to set up a containerized development environment by using Docker. Using this method, you shouldn't need to install anything other than Docker on your local machine.


#### Install Docker

[Install Docker](https://docs.docker.com/install/) on your development machine and ensure the Docker daemon is successfully running.


#### Build the Docker container

```
docker build -t cto-website .
```


#### Building and previewing the website

Run the site locally with live reloading:

```
./docker-run.sh rake serve
```

You should now be able to preview the site on your local machine at [http://localhost:4000/](http://localhost:4000/).


## Development

### Assets

This project uses `gulp` to manage static asset files. It also incorporates [uswds-gulp](https://github.com/uswds/uswds-gulp) tasks to manage USWDS-specific assets.

To update vendor-provided Node modules, including USWDS:
```
npm update
gulp copy-assets
gulp copy-uswds-fonts
gulp copy-uswds-images
gulp copy-uswds-js
gulp build-sass
```

To modify USWDS custom styles, edit the files in [_sass/uswds](/_sass/uswds), particularly [_uswds-theme-custom-styles.scss](/_sass/uswds/_uswds-theme-custom-styles.scss). You can automatically compile edited Sass files during development by running:
```
gulp watch
```


## License

As a work of the United States Government, this project is in the public domain
within the United States.
