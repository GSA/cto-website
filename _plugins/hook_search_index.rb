# Find search metadata in each page/document, then generate a pages.json
# file based on that metadata.

require "nokogiri"

module SearchIndex
  # Only process pages with these extensions
  INCLUDE_EXTENSIONS = %w(.html .md .markdown).to_set

  # Exclude pages with these names
  EXCLUDE_FILENAMES = %w(search.html).to_set

  @@entries = []

  def self.cleanup_whitespace(doc)
    doc.gsub(/\n/, " ").squeeze(" ")
  end

  # Pull metadata from each searchable page/document
  Jekyll::Hooks.register [:documents, :pages], :post_render do |page|
    next unless INCLUDE_EXTENSIONS.include?(File.extname(page.path))
    next if EXCLUDE_FILENAMES.include?(File.basename(page.path))

    doc = Nokogiri::HTML(page.content)
    doc.xpath("//script").remove
    text = cleanup_whitespace(doc.text)

    if page.data["excerpt"].to_s.empty?
      excerpt = text.split[0...40].join(" ") + " ..."
    else
      excerpt = cleanup_whitespace(Nokogiri::HTML(page.data["excerpt"].to_s).text)
    end

    @@entries << {
      title: page.data["title"],
      collection: page.respond_to?("collection") ? page.collection.label : nil,
      category: page.data["category"],
      url: page.url,
      search_excerpt: excerpt,
      search_text: text
    }
  end

  # Generate a pages.json after all pages/documents have been rendered
  Jekyll::Hooks.register :site, :post_render do |site, payload|
    page = Jekyll::PageWithoutAFile.new(site, __dir__, "", "pages.json")
    page.data["layout"] = nil
    page.output = @@entries.to_json
    site.pages << page
    Jekyll::Renderer.new(site, page, payload).run()
  end
end
