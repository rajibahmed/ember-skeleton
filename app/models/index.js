/**
 * @file        Models
 * @author      Vish Vishvanath
 * @version     0.1.0
 * @overview    Ember Models
 * @copyright   Vish Vishvanath 2013
 */

'use strict';

var App = require('app');

App.Story = DS.Model.extend({
  title: DS.attr('string'),
  photos: DS.hasMany('App.Photo')
});

App.Photo = DS.Model.extend({
  caption: DS.attr('string'),
  url: DS.attr('string')
});
