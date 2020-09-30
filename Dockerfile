FROM jekyll/jekyll


COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN ["bundle", "install", "with=development"]

CMD ["rake", "build"]
