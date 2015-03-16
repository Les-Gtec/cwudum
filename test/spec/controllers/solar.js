'use strict';

describe('Controller: SolarCtrl', function () {

  // load the controller's module
  beforeEach(module('cwudumApp'));

  var SolarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolarCtrl = $controller('SolarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
