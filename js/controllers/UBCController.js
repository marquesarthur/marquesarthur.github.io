var ubcModule = angular.module('ubc');
ubcModule.controller('UBCController', function($window, $route, $routeParams, $location, $state, UBCService) {
    var self = this;
    this.produtos = [];

    this.publications = UBCService.publications;

    this.links = UBCService.links;

    var cvUrl = "https://drive.google.com/file/d/0B3lLOi7usMD8a3VxMHN0RmhISVE/view?usp=sharing";

    this.goTo = function(path){
    	$location.path(path);
    };

    this.getCV = function() {
		$window.open(cvUrl, '_blank');
    };
});