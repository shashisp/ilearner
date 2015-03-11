'use strict';

describe('Controller: FibCtrl', function () {

  // load the controller's module
  beforeEach(module('ilearnerApp'));

  var FibCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FibCtrl = $controller('FibCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
