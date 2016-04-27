app.controller("mainController", function($scope, $routeParams, $http) {
  $scope.toggleHex = function() {
    this.showme = !this.showme;
  }
});
