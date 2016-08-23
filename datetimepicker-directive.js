angular.module('DateTimePicker')
      .directive('datetimePicker', function(){
      		return {
      			require: '?ngModel',
      			restrict: 'AE',
      			link: function(scope, elem, attr, ngModel){
      				
      				elem.datetimepicker(scope.$eval(attr.dateTimePicker)).on('dp.change', function(){
      					ngModel.$setViewValue(this.value); 
      				});
      				
  		        scope.$watch(attr.ngModel, function(newValue){
        		        	if(newValue) 
        		        		elem.data("DateTimePicker").date(new moment(newValue) ) ;
  		        	
  		                  });
      			}
      
      		};
      	});
