'use strict';

/**
 * @ngdoc function
 * @name cwudumApp.controller:SimpleviewCtrl
 * @description
 * # SimpleviewCtrl
 * Controller of the cwudumApp
 */
angular.module('cwudumApp')
  .controller('SimpleviewCtrl', function ($scope, $http, $filter) {
  	$scope.ErrorMessage = "";
    //get office temp
    $http.get('http://api.thingspeak.com/channels/16469/feed.json?key=IIU5GZ5728MXGSGF&results=1').
	    success(function(data, status, headers, config) {
	      $scope.OfficeTemp = data.feeds[0].field1;
	      $scope.SetTemp = data.feeds[0].field2;
	      var d1 = new Date().getTime();
	      var timestamp = $filter('date')(d1, 'EEE dd MMM yy HH:mm:ss');
	      $scope.statusMessage = 'Last read: ' + timestamp;
	    }).
	    error(function(data, status, headers, config) {
	      $scope.statusMessage = "Office Temp Error"
    });

	//get Water Temp
	$http.get('https://api.thingspeak.com/channels/22064/feed.json?key=U3OI8EDGNDTPLA89&results=1').
	    success(function(data, status, headers, config) {
	      $scope.WaterTemp = Math.round(data.feeds[0].field3 * 100) / 100;
	    }).
	    error(function(data, status, headers, config) {
	      $scope.statusMessage = "Water Temp Error"
    });

	//get Water Usage
	$http.get('https://api.thingspeak.com/channels/22096/feeds.json?key=FFOLG2OKFJB4TWCH&days=2&sum=daily').
	    success(function(data, status, headers, config) {
	      $scope.MainsWater = data.feeds[0].field1;
	      $scope.RainWater = data.feeds[0].field2;
	    }).
	    error(function(data, status, headers, config) {
	      $scope.statusMessage = "Water Usage Error"
    });

	//get Power Usage
	$http.get('https://api.thingspeak.com/channels/52484/feed.json?key=AA0DTXOAOHKI0IXV').
	    success(function(data, status, headers, config) {
	      $scope.HousePower = Math.round(data.feeds[0].field1 * 100) / 100;
	      $scope.OfficePower = Math.round(data.feeds[0].field2 * 100) / 100;
	    }).
	    error(function(data, status, headers, config) {
	      $scope.statusMessage = "Power Usage Error"
    });

  });
