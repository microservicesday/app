angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, agenda, conf, Agenda, Conf, $cordovaSplashscreen) {

  $cordovaSplashscreen.hide();

  $scope.agenda = agenda.data;
  Agenda.set($scope.agenda);

  $scope.conf = conf.data;
  Conf.set($scope.conf);

  // moment(new Date()).isBetween('Sun Jul 5 2015 18:30:00 GMT+0100 (BST)', 'Sun Jul 5 2015 19:00:00 GMT+0100 (BST)');

})

.controller('SessionCtrl', function($scope, $stateParams, Agenda, Conf) {
  $scope.session = Agenda.find(parseInt($stateParams.sessionId, 10));
  $scope.conf = Conf.getCached();
})

.controller('LocationCtrl', function($scope, $stateParams, Conf, $sce) {
  $scope.conf = Conf.getCached();
  $scope.map = { center: { latitude: $scope.conf.conf.location.lat, longitude: $scope.conf.conf.location.lng }, zoom: 14 };
})

.controller('TicketsCtrl', function($scope, Conf, $sce) {
  $scope.conf = Conf.getCached();
  $scope.returned = false;
  var win;

  $scope.openTickets = function() {
    $scope.returned = false;
    win = window.open($scope.conf.conf.tickets, '_blank', 'location=no');
    win.addEventListener('exit', function() {
      $scope.returned = true;
      $scope.$digest();
    });
  }

  $scope.openTickets();
})

.controller('MentionsCtrl', function($scope, Conf, $sce) {
  $scope.conf = Conf.getCached();
  $scope.returned = false;
  var win;

  $scope.openMentions = function() {
    $scope.returned = false;
    win = window.open('https://twitter.com/hashtag/' + $scope.conf.conf.hashtag, '_blank', 'location=no');
    win.addEventListener('exit', function() {
      $scope.returned = true;
      $scope.$digest();
    });
  }

  $scope.openMentions();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
