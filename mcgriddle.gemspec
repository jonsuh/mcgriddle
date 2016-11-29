$:.push File.expand_path("../lib", __FILE__)
require "mcgriddle/version"

Gem::Specification.new do |spec|
  spec.name        = "mcgriddle"
  spec.version     = McGriddle::VERSION
  spec.platform    = Gem::Platform::RUBY
  spec.authors     = ["Jonathan Suh"]
  spec.email       = ["hello@jonsuh.com"]
  spec.homepage    = "https://jonsuh.com/mcgriddle"
  spec.summary     = "A get-out-of-your-way Sass grid library. Supports flexbox."
  spec.description = "A get-out-of-your-way Sass library designed to help you build based a grid system. Supports flexbox."
  spec.license     = "MIT"

  spec.files         = `git ls-files`.split("\n")
  spec.require_paths = ["lib"]
end
