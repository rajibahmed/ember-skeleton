####
 # @file        Brunch configuration file
 # @author      Vish Vishvanath
 # @version     0.1.0
 # @overview    Build script
 # @copyright   Vish Vishvanath 2013
####

fs = require 'fs'
sysPath= require 'path'

exports.config =
  modules:
    addSourceURLs: true

  files:
    javascripts:
      defaultExtension: 'js',
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/

      order:
        before: [
          'vendor/scripts/handlebars-1.0.0-rc.3.js'
          'vendor/scripts/ember-1.0.0-rc.1.js'
          'vendor/scripts/ember-data.js'
          'vendor/scripts/bootstrap-2.3.1.js'
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css':/(app|assets|css)/
        'stylesheets/vendor.css': /^(app|vendor)/
      order:
        before: [
          'vendor/css/bootstrap-2.3.1.css'
          'vendor/css/bootstrap-mods.css'
        ]
        after: [
          'vendor/css/bootstrap-responsive-2.3.1.css'
        ]

    templates:
      precompile: true
      root: 'templates/'
      defaultExtension: 'hbs'
      joinTo:
        'javascripts/app.js': /^app(\/|\\)templates/
  
  optimize: true

  # allow _ prefixed templates so partials work
  conventions:
    ignored: (path) ->
      startsWith = (string, substring) ->
        string.indexOf(substring, 0) is 0
      sep = sysPath.sep
      if path.indexOf("app#{sep}templates#{sep}") is 0
        false
      else
        startsWith sysPath.basename(path), '_'

  server:
    port: 2112
    base: '/'
    run: no

  jshint:
    pattern: /^(app)\/(?!vendor\/).*\.js$/
    options:
      bitwise: true
      camelcase: true
      curly: true
      eqeqeq: true
      forin: true
      immed: true
      indent: 2
      latedef: true
      newcap: true
      noarg: true
      noempty: true
      nonew: true
      plusplus: true
      quotmark: true
      regexp: true
      undef: true
      unused: false
      strict: true
      trailing: true
      browser: true
      es5: true
      jquery: true
      node: true
    globals:
      describe: false
      chai: false
      DS: false
      Em: false
      Ember: false
      it: false
      jQuery: false
      $: false
