!function(){"use strict";angular.module("Life_Calendar_App",[]).controller("Life_Calendar_Ctrl",["$scope",function(e){var r=new Date("1995-12-02"),a=Math.round((Date.now()-r)/6048e5);e.years=[];for(var n=0,o=0;o<90;o++){for(var l=[],t=0;t<52;t++){var s=!1;n<=a&&(s=!0,n++),l.push({filled:s})}e.years.push({weeks:l})}}])}();