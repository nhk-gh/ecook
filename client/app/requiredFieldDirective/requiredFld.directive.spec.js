'use strict';

describe('Directive: requiredFld', function () {

  // load the directive's module
  beforeEach(module('ecookingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<required-fld></required-fld>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the requiredFieldDirective directive');
  }));
});