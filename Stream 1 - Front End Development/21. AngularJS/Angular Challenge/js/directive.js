angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'E',    // E -> element
    templateUrl: 'templates/directives/todo-table.html'
  };
});

