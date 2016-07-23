var lojaModule = angular.module('ubc');

lojaModule.directive('menu', function() {
  return {
	restrict: 'A',
    templateUrl: 'js/directives/menu.html',
  };
});