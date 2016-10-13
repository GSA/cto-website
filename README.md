# CTO Website

This is the website for the GSA Office of the Chief Technology Officer.

## Architecture

This is a [Jekyll-based](http://jekyllrb.com/) website designed to be published on the
[Federalist](https://federalist.18f.gov/) platform.

The website utilizes the [US Web Design Standards](https://standards.usa.gov/).

## Setup

### Prerequisites

Since this is a Jekyll-based website, you will need [Ruby](https://www.ruby-lang.org/en/). The best way to get
Ruby is to install it via [rbenv](https://github.com/rbenv/rbenv). See the
[rbenv installation instructions](https://github.com/rbenv/rbenv#installation)
to set it up on your system.

### Building and Previewing

This project makes use of 18F's [./go script](https://github.com/18F/go_script)
to manage the local development environment.

The `./go` script will automatically install all dependencies for you as needed.

After cloning this project from GitHub, run `./go serve` to see the website on
your local machine at [http://localhost:4000/](http://localhost:4000/).

## Contributing

### Contributing content and code

1. Fork the repository (or clone it if you have commit access)
2. Create a feature branch
3. Make your changes in the feature branch
4. Commit the feature branch
5. Push the feature branch to GitHub
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
Federalist and deployed to the [development site](https://federalist.18f.gov/preview/GSA/cto-website/dev/).

#### Feature branches

In addition to the main `dev` branch, you can push a feature branch to GitHub
and Federalist will deploy it to a preview site for you. After pushing your
feature branch to GitHub, you can preview it using this URL format:
`https://federalist.18f.gov/preview/GSA/cto-website/BRANCH_NAME/`

### Production

The website is not yet in production. The tentative production deployment
process is to merge the `dev` branch into `master`. Federalist will
automatically deploy `master` to the production site.

## License

As a work of the United States Government, this project is in the public domain
within the United States.
