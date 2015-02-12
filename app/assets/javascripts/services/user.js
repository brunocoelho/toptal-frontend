'use strict';

angular.module('toptalApp')
  .factory('User', ['$filter', function($filter) {
    var profile = {
      amazingProject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      availability: 'Full-time',
      city: 'Los Angeles',
      clients: 'In clients I look for...',
      codeSample: "var foo = 'bar';",
      displaySkills: function() {
        var skillsName = [],
            skills = $filter('skillsFilter')(this.skills).slice(0, 3);

        for (var i = 0; i < skills.length; i++) {
          skillsName.push(skills[i].name);
        }

        return skillsName.join(', ');
      },
      experience: [
        { tech: 'Ruby', years: 3 },
        { tech: 'JavaScript', years: 3 },
        { tech: 'Python', years: 1 },
        { tech: 'Java', years: 2 }
      ],
      firstName: function() {
        return this.name.split(' ')[0];
      },
      image: 'assets/user_picture.png',
      language: 'English, French, German',
      location: 'Recife - State of Pernambuco, Brazil',
      map: {
        details: {
          geometry: {
            location: {
              lat: function() {
                return -8.0578381;
              },
              lng: function() {
                return -34.88289689999999;
              }
            }
          }
        }
      },
      name: 'John Galt',
      note: {
        from: 'Breanden Beneschott, Toptal',
        message: 'John is the best engineer I\'ve ever worked with.'
      },
      portfolio: [
        { projectName: 'M2S', skills: 'C#' },
        { projectName: 'Bemind', skills: 'Ruby' },
        { projectName: 'Elife', skills: 'AngularJs' },
        { projectName: 'Liferay', skills: 'JavaScript' },
        { projectName: '', skills: '' },
        { projectName: '', skills: '' },
        { projectName: '', skills: '' }
      ],
      preferredEnvironment: 'Git, Github, Mac OSX, Linux, Vim, Atom',
      skills: [
        {
          level: 'advanced-level',
          name: 'AngularJs'
        },
        {
          level: 'intermediate-level',
          name: 'Ruby'
        },
        {
          level: 'advanced-level',
          name: 'JavaScript'
        },
        {
          level: 'basic-level',
          name: 'Java'
        },
      ]
    };

    return {
      getProfile: function() {
        return profile;
      }
    };
  }]);
