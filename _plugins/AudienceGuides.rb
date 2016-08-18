require 'pp'
module CTO

  class AudienceGuidesPage < Jekyll::Page
    def initialize(site, base, dir, audience)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'guide_audience_index.html')
      self.data['audience_name'] = audience['name']
      self.data['audience_slug'] = audience['slug']

      audience_title_prefix = site.config['audience_title_prefix'] || 'Guides for '
      self.data['title'] = "#{audience_title_prefix}#{audience['name']}"
    end
  end

  class AudienceGuidesPageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      if site.layouts.key? 'guide'
        dir = site.config['audience_dir'] || 'guides'
        site.data['guides']['audiences'].each do |audience|
          site.pages << AudienceGuidesPage.new(site, site.source, File.join(dir, audience['slug']), audience)
        end
      end
    end
  end

end
