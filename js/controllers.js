app.controller("mainController", function($scope, $routeParams, $http) {
  $scope.toggleHex = function() {
    this.showme = !this.showme;
  }

  $scope.toggleHex2 = function() {
    this.showme2 = !this.showme2;
  }

  $scope.toggleHex3 = function() {
    this.showme3 = !this.showme3;
  }

  $scope.toggleHex4 = function() {
    this.showme4 = !this.showme4;
  }

  $scope.toggleHex5 = function() {
    this.showme5 = !this.showme5;
  }

  $scope.toggleHex6 = function() {
    this.showme6 = !this.showme6;
  }

  $scope.toggleHex7 = function() {
    this.showme7 = !this.showme7;
  }

  $scope.toggleHex8 = function() {
    this.showme8 = !this.showme8;
  }

  $scope.toggleHex9 = function() {
    this.showme9 = !this.showme9;
  }

  $scope.toggleHex10 = function() {
    this.showme10 = !this.showme10;
  }

  $scope.toggleHex11 = function() {
    this.showme11 = !this.showme11;
  }

  $scope.toggleHex12 = function() {
    this.showme12 = !this.showme12;
  }

  $scope.toggleHex13 = function() {
    this.showme13 = !this.showme13;
  }

  $("#mainArrow").click(function() {
  $('html, body').animate({
    scrollTop: $("#one").offset().top
  }, 500);
  });

  $("#oneDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#two").offset().top
  }, 500);
  });

  $("#twoDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#three").offset().top
  }, 500);
  });

  $("#threeDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#four").offset().top
  }, 500);
  });

  $("#fourDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#five").offset().top
  }, 500);
  });

  $("#fiveDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#six").offset().top
  }, 500);
  });

  $("#sixDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#seven").offset().top
  }, 500);
  });

  $("#sevenDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#eight").offset().top
  }, 500);
  });

  $("#eightDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#nine").offset().top
  }, 500);
  });

  $("#nineDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#ten").offset().top
  }, 500);
  });

  $("#tenDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#eleven").offset().top
  }, 500);
  });

  $("#elevenDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#twelve").offset().top
  }, 500);
  });

  $("#twelveDown").click(function() {
  $('html, body').animate({
    scrollTop: $("#thirteen").offset().top
  }, 500);
  });

  $("#thirteenUp").click(function() {
  $('html, body').animate({
    scrollTop: $("#one").offset().top
  }, 500);
  });

});
