/**
 * @file        Router
 * @author      Vish Vishvanath
 * @version     0.1.0
 * @overview    Ember Router
 * @copyright   Vish Vishvanath 2013
 */

'use strict';

var App = require('app');

App.Router.map(function () {
  this.resource('stories', function () {
    this.resource('story', {
      path: ':story_id'
    });
  });
});
