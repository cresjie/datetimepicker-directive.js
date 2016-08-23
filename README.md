# datetimepicker-directive.js
datetimepicker angular directive wrapper

# REQUIREMENTS

* [Angular.js][angularjs]
* [Bootstrap-datetimepicker.js][bootstrap-datetimepicker.min.js]

[angularjs]: http://angularjs.org/
[bootstrap-datetimepicker.min.js]: https://eonasdan.github.io/bootstrap-datetimepicker/

BASIC USAGE
-------------

```html
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    
    <script src="https://code.jquery.com/jquery-3.1.0.min.js"   integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="   crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
    <script src="datetimepicker-directive.js"></script>
  </head>
  <body ng-app="App" ng-controller="MainController">
    <input type="text" class="form-control" ng-model="date1" datetime-picker="{format: 'MMM-DD-YYY' }">
    <input type="text" class="form-control" ng-model="date2" datetime-picker="pickerOptions">
  </body>
</html>


```javascript
  angular.module('App',[])
        .controller('MainController', function($scope){
          $scope.pickerOptions = {
            format: 'DD/MM/YYYY'
          };
        });          
```
