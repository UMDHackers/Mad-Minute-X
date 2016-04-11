var problems = [];
var testApp = angular.module('testApp', []);
testApp.controller('ProblemsListCtrl', function($scope, $location){
  var path = $location.path().split("/");
  console.log(path);
  var sec = "add";
  var lev = "easy";
  create_problems(sec, lev);

  $scope.problems = problems;
  console.log($scope.problems);
});
function create_problems(section, level) {
  var second = 0;
  var first = 0;
  var soul = 0;
  var x = 0;
  if(section == "add") {
    if(level == "easy") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 10);
        second = Math.floor(Math.random() * 10);
        soul = first + second;
        //problems[x] = {'first': first, 'second': second, 'soul': soul};
        problems[x] = [first, second, soul];
      }
    } else if (level == "medium") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 100);
        soul = first + second;
        problems[x] = [first, second, soul];
      }
    } else if (level == "hard"){
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 1000);
        second = Math.floor(Math.random() * 1000);
        soul = first + second;
        problems[x] = [first, second, soul];
      }
    }
  } else if(section == "subtract") {
    if(level == "easy") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 10);
        second = Math.floor(Math.random() * 10);
        soul = first - second;
        problems[x] = [first, second, soul];
      }
    } else if (level == "medium") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 100);
        soul = first - second;
        problems[x] = [first, second, soul];
      }
    } else if (level == "hard"){
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 1000);
        second = Math.floor(Math.random() * 1000);
        soul = first - second;
        problems[x] = [first, second, soul];
      }
    }
  } else if(section == "mulitplication") {
    if(level == "easy") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 10);
        second = Math.floor(Math.random() * 10);
        soul = first * second;
        problems[x] = [first, second, soul];
      }
    } else if (level == "medium") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 100);
        soul = first * second;
        problems[x] = [first, second, soul];
      }
    } else if (level == "hard"){
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 1000);
        second = Math.floor(Math.random() * 1000);
        soul = first * second;
        problems[x] = [first, second, soul];
      }
    }
  } else if(section == "divison") {
    if(level == "easy") {
      for(x = 0; x < 60; x++) {
        first = Math.floor((Math.random() * 10) + 1);
        second = Math.floor((Math.random() * 10) + 1);
        soul = first * second;
        problems[x] = [soul, first, second];
      }
    } else if (level == "medium") {
      for(x = 0; x < 60; x++) {
        first = Math.floor((Math.random() * 100) + 1);
        second = Math.floor((Math.random() * 100) + 1);
        soul = first * second;
        problems[x] = [soul, first, second];
      }
    } else if (level == "hard"){
      for(x = 0; x < 60; x++) {
        first = Math.floor((Math.random() * 1000) + 1);
        second = Math.floor((Math.random() * 1000) + 1);
        soul = first * second;
        problems[x] = [soul, first, second];
      }
    }
  }

}
