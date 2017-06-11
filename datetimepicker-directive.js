angular.module('DateTimePicker',[])
      .directive('datetimepicker', function(){
      		return {
      			require: '?ngModel',
      			restrict: 'AE',
      			link: function(scope, elem, attr, ngModel){
      				
      				elem.datetimepicker(scope.$eval(attr.datetimepicker)).on('dp.change', function(){
      					ngModel.$setViewValue(this.value); 
      				});
      				
	  		         
	  		        ngModel.$render = function(){
	  		        	elem.data("DateTimePicker").date(new moment(ngModel.$viewValue) ) ;
	  		        }
      			}


      
      		};
      	});
