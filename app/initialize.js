/**
 * @file        Initialize
 * @author      Vish Vishvanath
 * @version     0.1.0
 * @overview    Main entry point for application
 * @copyright   Vish Vishvanath 2013
 */

'use strict';

var App = require('app');

window.App = App;

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

require('template-list');
require('models');
require('fixtures');
require('controllers');
require('views');
require('routes');

console.log('Initializing Application.');
