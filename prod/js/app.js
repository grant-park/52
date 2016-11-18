(function(){
"use strict";
angular.module('Life_Calendar_App', [])
        .controller('Life_Calendar_Ctrl',['$scope',function($scope){
            var input = new Date("1995-12-02");
            var num_weeks = Math.round((Date.now()-input)/604800000);
            $scope.years = [];
            var counter = 0;
            for (var i=0;i<90;i++) {
                var temp = [];
                for (var j=0;j<52;j++) {
                    var filled = false;
                    if (counter <= num_weeks) {
                        filled = true;
                        counter++;
                    }
                    temp.push({
                        filled: filled
                    });
                }
                $scope.years.push({
                    weeks: temp
                });
            }
        }]);
})();
