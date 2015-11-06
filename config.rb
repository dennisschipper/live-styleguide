# Build a helper to open template files
helpers do
  def include(path)
    file = File.open(Dir.pwd + "/source/" + path).read
    return file
  end
end

# Livereload
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Build-specific configuration
configure :build do

end
