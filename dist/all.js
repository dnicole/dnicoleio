var app = angular.module('dnicole', [
        'ngAria',
        'ngMaterial'
    ])
.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';
        console.log($scope.test);
}]);
