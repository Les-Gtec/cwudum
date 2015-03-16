'use strict';

/**
 * @ngdoc function
 * @name cwudumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cwudumApp
 */
angular.module('cwudumApp')
  .controller('MainCtrl', function ($scope, $http, $filter) {

    $http.get('http://api.thingspeak.com/channels/16469/feed.json?key=IIU5GZ5728MXGSGF&results=1').
    success(function(data, status, headers, config) {
      $scope.glanThermo = data;
      var d1 = new Date().getTime();
      var timestamp = $filter('date')(d1, 'EEE dd MMM yy HH:mm:ss');
      $scope.statusMessage = 'Last read: ' + timestamp;
    }).
    error(function(data, status, headers, config) {
      //console.log('Error');
    });

    $scope.inRoom = false;

    $scope.changePresence = function(index) {
      var URLToSend = '';
      if(index==0){
        //$http.get('http://api.thingspeak.com/apps/thinghttp/send_request?api_key=5IB6IHG8MK3N7FRF').
        URLToSend = 'http://api.thingspeak.com/update?key=7GH25707INIBKFUB&field2=12&field1='+$scope.glanThermo.feeds[0].field1;
        //console.log('URL: ' + URLToSend); 
      };
      if(index==1){
        //$http.get('http://api.thingspeak.com/apps/thinghttp/send_request?api_key=YQHS1ZBDOU1ZOXLI').
        URLToSend = 'http://api.thingspeak.com/update?key=7GH25707INIBKFUB&field2=18&field1='+$scope.glanThermo.feeds[0].field1;
        //console.log('URL: ' + URLToSend); 
      };

      $http.get(URLToSend).
      success(function(data, status, headers, config) {
        if (data=="0"){
          $scope.statusMessage = "Set FAIL";
        } else {
          if(index==0){
            //$scope.inRoom = false;  
          }
          if(index==1){
            //$scope.inRoom = true;
          };
          $scope.refreshTempData();
        }

        $scope.statusDetail = data;
      }).
      error(function(data, status, headers, config) {
        //console.log('Error');
      });

    };

    $scope.changeSetTemp = function (desiredTemp) {
      var URLToSend = "";
      var sendUpdate = true;
            
      URLToSend = 'http://api.thingspeak.com/update?key=7GH25707INIBKFUB&field2='+desiredTemp+'&field1='+$scope.glanThermo.feeds[0].field1;


      // //If + and at set then set + 1
      // if(index==0){
      //   if($scope.glanThermo.feeds[0].field1 < $scope.glanThermo.feeds[0].field2) {
      //     // ignore update
      //     sendUpdate = false;
      //   } else {
      //     newTemp = +$scope.glanThermo.feeds[0].field2;
      //     newTemp ++;
      //     //console.log('New Temp up: ' + newTemp );
      //     URLToSend = 'http://api.thingspeak.com/update?key=7GH25707INIBKFUB&field2='+newTemp+'&field1='+$scope.glanThermo.feeds[0].field1;
      //     //console.log('URL: ' + URLToSend); 
      //   }
      // }
      // //If - set -1
      // if (index==1){
      //   newTemp = +$scope.glanThermo.feeds[0].field2;
      //   newTemp --;
      //   //console.log('New Temp down: ' + newTemp );
      //   URLToSend = 'http://api.thingspeak.com/update?key=7GH25707INIBKFUB&field2='+newTemp+'&field1='+$scope.glanThermo.feeds[0].field1;
      //   //console.log('URL: ' + URLToSend);
      // };

      if(sendUpdate){
        $http.get(URLToSend).
        success(function(data, status, headers, config) {
          if (data=="0"){
            $scope.statusMessage = "Set FAIL";
          } else {
            $scope.statusMessage = "Set to: " + desiredTemp; 
             $scope.refreshTempData(); 
          };
            
          $scope.statusDetail = data;
        }).
        error(function(data, status, headers, config) {
          //console.log('Error');
        });
      };

    };

    

    $scope.refreshTempData = function(){
      $http.get('http://api.thingspeak.com/channels/16469/feed.json?key=IIU5GZ5728MXGSGF&results=1').
      success(function(data, status, headers, config) {
       $scope.glanThermo = data;
       var d1 = new Date().getTime();
       var timestamp = $filter('date')(d1, 'EEE dd MMM yy HH:mm:ss');
       $scope.statusMessage = 'Last read: ' + timestamp;

     }).
      error(function(data, status, headers, config) {
        //console.log('Error');
        $scope.statusMessage = "Read FAIL";
      });
    };
  });
