var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope) {
  $scope.randOne = Math.floor((Math.random() * 10) + 1);
  $scope.randTwo = Math.floor((Math.random() * 10) + 1);
});

app2.controller('ctrl2', function($scope) {
  var badFeeling = ["Disregarded", "Unimportant", "Rejected", "Powerless"];
  $scope.bad = badFeeling[Math.floor((Math.random() * 4))];
});

app2.controller('ctrl3', function($scope) {
  var goodFeeling = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];
  $scope.good = goodFeeling[Math.floor((Math.random() * 4))];
});
