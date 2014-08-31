'use strict';

describe('Directive: gradientratingDirective', function () {

  // load the directive's module and view
  beforeEach(module('ecookingApp'));
  beforeEach(module('app/gradientratingDirective/gradientRating.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gradient-rating-directive></gradient-rating-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gradientratingDirective directive');
  }));
});