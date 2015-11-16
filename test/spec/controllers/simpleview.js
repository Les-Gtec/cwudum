'use strict';

describe('Controller: SimpleviewCtrl', function () {

  // load the controller's module
  beforeEach(module('cwudumApp'));

  var SimpleviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimpleviewCtrl = $controller('SimpleviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
