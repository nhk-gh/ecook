'use strict';

describe('Directive: intOnlyDirective', function () {

  // load the directive's module
  beforeEach(module('ecookingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<int-only-directive></int-only-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the intOnlyDirective directive');
  }));
});