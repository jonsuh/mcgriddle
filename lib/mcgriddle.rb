dir = File.dirname(__FILE__)
$LOAD_PATH.unshift dir unless $LOAD_PATH.include?(dir)

unless defined?(Sass)
  require 'sass'
end

module McGriddle
  if defined?(Rails) && defined?(Rails::Engine)
    class Engine < ::Rails::Engine

    end
  end

  mcgriddle_path = File.expand_path("../../_sass/mcgriddle", __FILE__)
  ENV["SASS_PATH"] = [ENV["SASS_PATH"], mcgriddle_path].compact.join(File::PATH_SEPARATOR)
end
