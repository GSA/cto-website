require "eslintrb"
require "html-proofer"

desc "Serve the site with live reload for development"
task :serve do
  sh "bundle exec jekyll liveserve"
end

desc "Run ESLint"
task :eslint do
  puts "Running ESLint..."
  puts Eslintrb.report(Dir.glob("assets/js/**/*.js"), :eslintrc)
end

desc "Run HTML Proofer"
task :htmlproofer do
  puts "Running HTML Proofer..."
  options = {
    url_ignore: [/^\#$/]  # Allow href="#"
  }
  sh "bundle exec jekyll build -q"
  HTMLProofer.check_directory("./_site", options).run
end

desc "Run all tests"
task test: [:eslint, :htmlproofer]

task default: :test
