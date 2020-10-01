# Tech at GSA website

This is a website for the GSA Office of the Chief Technology Officer.

## Architecture

This is a [Jekyll-based](http://jekyllrb.com/) website designed to be published on the
[Federalist](https://federalist.18f.gov/) platform.

The website utilizes the [US Web Design Standards](https://standards.usa.gov/).

## Setup

There are two ways you can set up your development environment:

* [**Method 1:** Install all tools and dependencies on your local machine (Ruby, Node.js, etc)](#method-1-local-development-environment)
* [**Method 2:** Use Docker to maintain all tools and dependencies inside a container](#method-2-containerized-development-environment-using-docker)

### Method 1: Local development environment

This method explains how to set up a local development environment by installing all necessary tools and dependencies.

#### Install Ruby

Since this is a Jekyll-based website, you will need [Ruby](https://www.ruby-lang.org/en/). The best way to get Ruby is to install it via [rbenv](https://github.com/rbenv/rbenv). See the [rbenv installation instructions](https://github.com/rbenv/rbenv#installation) to set it up on your system.

#### Install Node.js and npm

We use [`npm`](https://www.npmjs.com/) along with [`gulp`](http://gulpjs.com/) to manage the front-end dependencies. In order to get `npm`, install [Node.js](https://nodejs.org/). You do not strictly need `npm` to work on the website. You need it only if you plan to update the [vendor assets](/assets/vendor/).

To update the vendor assets, run `npm run assets`.

#### Building and previewing the website

-> First, install `bundler` if you don't already have it:

  ```
  gem install bundler
  ```

-> Then install the project's Ruby dependencies:

  ```
  bundle install --with=development
  ```

-> Then you can run the site locally with live reloading:

  ```
  rake serve
  ```

You should now be able to preview the site on your local machine at [http://localhost:4000/](http://localhost:4000/).

### Method 2: Containerized development environment using Docker

This method explains how to set up a containerized development environment by using Docker. Using this method, you wouldn't need to install anything other than Docker on your local machine.

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

## Contributing

### Testing

Please run `rake test` locally before pushing new content or code. This runs a JavaScript linter and HTML proofer.

### Contributing content and code

1. Fork the repository (or clone it if you have commit access)
2. Create a feature branch
3. Make your changes in the feature branch
4. Commit the feature branch
5. Push the feature branch to GitHub (preview your changes at `https://federalist.18f.gov/preview/gsa/cto-website/BRANCH_NAME/`)
6. Open a pull request to merge the feature branch

### Proposing changes and reporting issues

The best way to contact us regarding the CTO Website is to [open an issue on GitHub](https://github.com/GSA/cto-website/issues/new). Please submit a new issue if you need to:

* Report a website bug
* Propose a change to the website content

## Deploying

We make use of Federalist's continuous deployment system, which automatically deploys branches as soon as it detects a push to GitHub. Therefore, as soon as your pull request is accepted into the `master` branch, it goes to production.

## License

As a work of the United States Government, this project is in the public domain
within the United States.
