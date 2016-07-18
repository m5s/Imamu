(function() {

  var HomeController = function($scope) {

     $scope.userAction = userAction
     $scope.trackEvent = trackEvent
     $scope.path = window.location.pathname
     $scope.pathArray = window.location.hash.split( '/' );

     function init() {

     }

     init();

     function userAction(user, action) {
      if (!localStorage.imamuUser) {
        var distinctId = mixpanel.get_distinct_id()
        mixpanel.identify(distinctId)
        mixpanel.people.set({
            "$email": user.email
        });
        localStorage.imamuUser = true
      }
      user_hash = {email: user.email, name: user.name}
      trackEvent(action, user_hash)
      pageSpecificActions()
     }

     function trackEvent(action, info) {
        mixpanel.track(action, info)
     }

     function pageSpecificActions(){
        page = $scope.pathArray[$scope.pathArray.length - 1]
        if (page == "seller" ){
          $scope.user.name = null
        }
        $scope.user.email = null
     }

  };

  HomeController.$inject = ['$scope'];

  angular.module('imamuApp')
    .controller('HomeController', HomeController);

}());

