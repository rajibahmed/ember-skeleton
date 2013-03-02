# Ember Skeleton V8

This is a brunch-built Ember project that uses Handlebars, of course, Ember-Data, 
and some of my own photo story images to get a quickstart project going.

## Run

This assumes you have Node.js 0.8.x installed plus NPM.

  npm install -g brunch

  git clone git://github.com/impartial/ember-skeleton.git

  cd ember-skeleton

  npm install 

That prepares the skeleton. To build the project, run `brunch build` in the root 
directory, which builds to the `public` directory. Running `brunch watch` will 
monitor most files for changes and recompile as required. Start a development server
on port 2112 by running `brunch watch --server`

I use [Pow](http://pow.cx) instead of the brunch server. Simply install Pow and execute
the following:

  cd ~/.pow

  ln -s <project root> <alias>

e.g. `ln -s ~/projects/ember-skeleton skeleton`

Which will give you a running application at

  http://skeleton.dev

## Customizing Skeleton

No doubt you'll need to modify directory structures, move files around, add stylesheets, javascript libraries, SASS/Stylus/Compass, etc, and your best bet is to learn how the Brunch configuration, `config.coffee`, works.

[Brunch.io](http://brunch.io/) is the place to start. And here's a [direct link](https://github.com/brunch/brunch/blob/master/docs/config.md) to the instructions for the configuration file.

## Notes and Troubleshooting

Don't forget to restart the brunch watcher if you change the html file in assets.

Don't forget to order your CSS and JS properly.

Don't forget to add templates to the `template-list.js` file. It's called that, and in plain sight, for a reason.

Be careful when updating Ember - ALWAYS READ the release notes for changes.

## Libraries Used

Twitter Bootstrap
EmberJS
Ember-Data
Handlebars
Brunch
NodeJS

## Tools Used

Homebrew OS X
Vim
