/**
 * @file        Fixtures
 * @author      Vish Vishvanath
 * @version     0.1.0
 * @overview    Mock data for Ember-Data
 * @copyright   Vish Vishvanath 2013
 */

'use strict';

var App = require('app');

App.Story.FIXTURES = [{
  id: 1,
  title: 'First Story',
  photos: [1, 2, 3, 4, 5]
}, {
  id: 2,
  title: 'Second Story',
  photos: [5, 4, 3, 2, 1]
}, {
  id: 3,
  title: 'Third Story',
  photos: [4, 5, 2, 3, 1]
}, {
  id: 4,
  title: 'Fourth Story',
  photos: [3, 4, 1, 2, 5]
}, {
  id: 5,
  title: 'Fifth Story',
  photos: [2, 1, 5, 4, 3]
}, {
  id: 6,
  title: 'Sixth Story',
  photos: [1, 5, 4, 3, 2]
}];


App.Photo.FIXTURES = [{
  id: 1,
  caption: 'Young boxers await their bouts.',
  url: 'http://photos.vishvish.com/photos/703/703_small.jpg'
}, {
  id: 2,
  caption: 'The selection draw.',
  url: 'http://photos.vishvish.com/photos/704/704_small.jpg'
}, {
  id: 3,
  caption: 'Singing the national anthem.',
  url: 'http://photos.vishvish.com/photos/705/705_small.jpg'
}, {
  id: 4,
  caption: 'Enthusiastic younger brother of one of the boxers is slightly too young to start boxing, but it doesn\'t stop him.',
  url: 'http://photos.vishvish.com/photos/706/706_small.jpg'
}, {
  id: 5,
  caption: 'Pre-fight, clad in favourite 101 Dalmatians gear.',
  url: 'http://photos.vishvish.com/photos/707/707_small.jpg'
}];
