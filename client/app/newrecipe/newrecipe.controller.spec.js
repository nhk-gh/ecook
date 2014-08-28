'use strict';

describe('Controller: AddrecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('ecookingApp'));

  var AddrecipeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddrecipeCtrl = $controller('AddrecipeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
