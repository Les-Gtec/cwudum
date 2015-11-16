'use strict';

/**
 * @ngdoc function
 * @name cwudumApp.controller:WaterCtrl
 * @description
 * # WaterCtrl
 * Controller of the cwudumApp
 */
angular.module('cwudumApp')
  .controller('WaterCtrl', function ($scope, $http, $filter) {
  	$scope.errMessage = '';
  	$scope.getCounts = function(){
  		var d1 = new Date().getTime();
      	var timestamp = $filter('date')(d1, 'EEE dd MMM yy HH:mm:ss');
      	$scope.errMessage = 'Last read: ' + timestamp;
    	$http.get('https://api.spark.io/v1/devices/53ff6d066667574842581667/count1?access_token=841366f542924b56adc642168174836b7aa485e4').
		    success(function(data1, status, headers, config) {
		      $scope.glanWater1 = data1;
		      $scope.glanWater1.litres = data1.result * 10;
		      
		    }).
		    error(function(data1, status, headers, config) {
		      $scope.errMessage = 'Error reading Meter 1';
		});

		$http.get('https://api.spark.io/v1/devices/53ff6d066667574842581667/count2?access_token=841366f542924b56adc642168174836b7aa485e4').
		    success(function(data2, status, headers, config) {
		      $scope.glanWater2 = data2;
		      $scope.glanWater2.litres = data2.result * 10;
		    }).
		    error(function(data2, status, headers, config) {
		      $scope.errMessage = 'Error reading Meter 2';
	    });
    }



    
    $scope.getCounts();

 //    $http.get('https://api.spark.io/v1/devices/53ff6d066667574842581667/count1?access_token=841366f542924b56adc642168174836b7aa485e4').
	//     success(function(data1, status, headers, config) {
	//       $scope.glanWater1 = data1;
	//       $scope.glanWater1.litres = data1.result * 10;
	      
	//     }).
	//     error(function(data1, status, headers, config) {
	//       $scope.errMessage = 'Error reading Meter 1';
	// });

	// $http.get('https://api.spark.io/v1/devices/53ff6d066667574842581667/count2?access_token=841366f542924b56adc642168174836b7aa485e4').
	//     success(function(data2, status, headers, config) {
	//       $scope.glanWater2 = data2;
	//       $scope.glanWater2.litres = data2.result * 10;
	//     }).
	//     error(function(data2, status, headers, config) {
	//       $scope.errMessage = 'Error reading Meter 2';
 //    });
    
    

    $scope.resetCount = function(){
    	$http({
            url: 'https://api.spark.io/v1/devices/53ff6d066667574842581667/resetCount?access_token=841366f542924b56adc642168174836b7aa485e4',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        	}).success(function (data, status, headers, config) {
                var d1 = new Date().getTime();
      			var timestamp = $filter('date')(d1, 'EEE dd MMM yy HH:mm:ss');
      			$scope.getCounts();
      			$scope.errMessage = 'RESET: ' + timestamp;

            }).error(function (data, status, headers, config) {
                $scope.errMessage = 'Error on Reset';
            });
    }

    
  });
