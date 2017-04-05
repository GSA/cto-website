# Tech at GSA website

This is the website for the GSA Office of the Chief Technology Officer.

## Architecture

This is a [Jekyll-based](http://jekyllrb.com/) website designed to be published on the
[Federalist](https://federalist.18f.gov/) platform.

The website utilizes the [US Web Design Standards](https://standards.usa.gov/).

## Setup

### Prerequisites

#### Ruby

Since this is a Jekyll-based website, you will need [Ruby](https://www.ruby-lang.org/en/). The best way to get
Ruby is to install it via [rbenv](https://github.com/rbenv/rbenv). See the
[rbenv installation instructions](https://github.com/rbenv/rbenv#installation)
to set it up on your system.

#### Node.js and npm

We use [`npm`](https://www.npmjs.com/) along with [`gulp`](http://gulpjs.com/) to manage front-end dependencies. In order to get `npm`, install [Node.js](https://nodejs.org/). You do not strictly need `npm` to work on the website. You only need it if you plan to update the [vendor assets](/assets/vendor/).

To update the vendor assets, run `npm run assets`.

### Building and Previewing

First, install Ruby gem dependencies:

```
bundle install
```

Then you can run the site locally with live reloading:

```
rake serve
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
5. Push the feature branch to GitHub (preview your changes at `https://federalist.fr.cloud.gov/preview/GSA/cto-website/BRANCH_NAME/`)
6. Open a pull request to merge the feature branch

### Proposing changes and reporting issues

The best way to contact us regarding the CTO Website is to [open an issue on GitHub](https://github.com/GSA/cto-website/issues/new). Please submit a new issue if you need to:

* Report a website bug
* Propose a change to the website content

## Deploying

We make use of Federalist's continuous deployment system, which automatically
deploys branches as soon as it detects a push to GitHub.

### Development

Commits and merges to the `dev` branch will automatically be picked up by
Federalist and deployed to the [development site](https://federalist.fr.cloud.gov/preview/GSA/cto-website/dev/).

#### Feature branches

In addition to the main `dev` branch, you can push a feature branch to GitHub
and Federalist will deploy it to a preview site for you. After pushing your
feature branch to GitHub, you can preview it using this URL format:
`https://federalist.fr.cloud.gov/preview/GSA/cto-website/BRANCH_NAME/`

### Production

The production deployment process is to merge the `dev` branch into `master`.
Federalist will automatically deploy `master` to the [tech.gsa.gov production site](https://tech.gsa.gov/).

## License

As a work of the United States Government, this project is in the public domain
within the United States.
