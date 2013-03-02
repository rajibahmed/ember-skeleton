/**
 * @file        Routes
 * @author      Vish Vishvanath
 * @version     0.1.0
 * @overview    Ember Routes
 * @copyright   Vish Vishvanath 2013
 */

'use strict';

var App = require('app');

require('routes/map');

// This code simply reroutes the home page to the stories page. Uncomment if you like.
// App.IndexRoute = Ember.Route.extend({
//   redirect : function () {
//     this.transitionTo('stories');
//   }
// });

App.ApplicationRoute = Ember.Route.extend({
  setupController: function () {
    this.controllerFor('photo')
      .set('model', App.Photo.find());
  }
});

App.StoriesRoute = Ember.Route.extend({
  model: function () {
    return App.Story.find();
  }
});
