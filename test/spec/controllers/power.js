'use strict';

describe('Controller: PowerCtrl', function () {

  // load the controller's module
  beforeEach(module('cwudumApp'));

  var PowerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PowerCtrl = $controller('PowerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
