(function() {

  var HomeController = function($scope) {

     $scope.createUser = createUser
     $scope.trackEvent = trackEvent
     $scope.path = window.location.pathname

     function init() {

     }

     init();

     function createUser(user) {
      var distinctId = mixpanel.get_distinct_id()
      mixpanel.identify(distinctId)
      mixpanel.people.set({
          "$email": user.email
      });
     }

     function trackEvent(action, info) {
        mixpanel.track(action, info)
     }

  };

  HomeController.$inject = ['$scope'];

  angular.module('imamuApp')
    .controller('HomeController', HomeController);

}());

