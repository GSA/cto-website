# Generate a title for team member documents.

Jekyll::Hooks.register :documents, :pre_render do |page|
  collection = page.respond_to?(:collection) ? page.collection.label : nil
  if collection == "team"
    page.data["title"] = page.data["firstname"] + " " + page.data["lastname"]
  end
end
