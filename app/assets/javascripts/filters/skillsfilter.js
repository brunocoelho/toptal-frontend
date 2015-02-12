'use strict';

/**
 * @ngdoc filter
 * @name toptalApp.filter:skillsFilter
 * @function
 * @description
 * # skillsFilter
 * Filter in the toptalApp.
 */
angular.module('toptalApp')
  .filter('skillsFilter', function () {
    return function (skills) {
      var advanced = [],
          basic = [],
          intermediate = [];

      for (var i = 0; i < skills.length; i++) {
        switch(skills[i].level) {
          case 'advanced-level':
            advanced.push(skills[i]);
            break;
          case 'intermediate-level':
            intermediate.push(skills[i]);
            break;
          case 'basic-level':
            basic.push(skills[i]);
            break;
        }
      }
      return advanced.concat(intermediate).concat(basic);
    };
  });
