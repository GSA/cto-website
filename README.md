# CTO Website

This is the website for the GSA Office of the Chief Technology Officer.

## Architecture

This is a Jekyll-based website designed to be published on the
[Federalist](https://federalist.18f.gov/) platform.

The website utilizes the [US Web Design Standards](https://standards.usa.gov/).

## Setup

### Prerequisites

Since this is a Jekyll-based website, you will need Ruby. The best way to get
Ruby is to install it via [rbenv](https://github.com/rbenv/rbenv). See the
[rbenv installation instructions](https://github.com/rbenv/rbenv#installation)
to set it up on your system.

### Building and Previewing

This project makes use of 18F's [./go script](https://github.com/18F/go_script)
to manage the local development environment.

After cloning this project from GitHub, run `./go serve` to see the website on
your local machine at http://localhost:4000/.

## Contributing

Steps for those *with* commit access:

1. Clone the repository.
2. Create a feature branch.
3. Make your changes in the feature branch.
4. Commit the feature branch.
5. Open a PR to merge the feature branch into the `master` branch.
6. Resolve any conflicts if necessary, then merge your feature branch.

Steps for those *without* commit access:

1. Fork the repository.
2. Make your changes in your fork.
3. Commit the changes to your fork.
4. Open a PR to merge your fork into the upstream repository.

## Deploying

Commits to the `master` branch will automatically be picked up by Federalist and
deployed to the preview environment.

Developers with commit access to this repo can deploy to GitHub Pages by running
`./go build_github` then `./go deploy_github`

## License

As a work of the United States Government, this project is in the public domain
within the United States.
