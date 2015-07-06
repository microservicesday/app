angular.module('starter.services', [])

.factory('Agenda', function($http, $q) {

  var AGENDA;

  return {

    get: function() {
      return $http.get('http://crossorigin.me/http://microservicesday.com/data/agenda.json');
    },
    set: function(agenda) {
      AGENDA = agenda;
    },
    find: function(index) {
      return (AGENDA[index]) ? AGENDA[index] : null;
    }

  };

})
.factory('Conf', function($http) {

  var CONF;

  return {

    get: function() {
      return $http.get('http://crossorigin.me/http://microservicesday.com/data/metadata.json');
    },
    set: function(conf) {
      CONF = conf;
    },
    getCached: function() {
      return CONF;
    }

  };

});
