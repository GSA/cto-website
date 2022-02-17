require "html-proofer"

namespace :test do
  namespace :htmlproofer do
    desc "Run HTML Proofer on internal links"
    task :internal_links do
      puts "Building the website..."
      sh "bundle exec jekyll build --trace -q -d _test", verbose: false
      puts "Running HTML Proofer on internal links..."
      options = {
        allow_hash_href: true,
        check_html: true,
        empty_alt_ignore: true,
        disable_external: true
      }
      HTMLProofer.check_directory("./_test", options).run
    end

    desc "Run HTML Proofer on all links"
    task :all_links do
      puts "Building the website..."
      sh "bundle exec jekyll build --trace -q -d _test", verbose: false
      puts "Running HTML Proofer on all links..."
      options = {
        allow_hash_href: true,
        check_html: true,
        empty_alt_ignore: true,
        url_ignore: [/docs.google.com/, /ea.gsa.gov/]
      }
      HTMLProofer.check_directory("./_test", options).run
    end
  end
end

task test: ["test:htmlproofer:internal_links"]

task default: :test
