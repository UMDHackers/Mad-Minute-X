var problems = [];
var soultions = [];
var testApplication = angular.module('testApp', []);

testApp.controllers('ProblemsListCtrl', function($scope){
  var path = $location.path().split("/");
  console.log(path);
  var sec = path[2];
  var lev = path[1];
  create_problems(sec, lev);

  $scope.problems = problems;
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
  } else if(section == "subtract") {
    if(level == "easy") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 10);
        second = Math.floor(Math.random() * 10);
        soul = first * second;
        problems[x] = [soul, first, second];
      }
    } else if (level == "medium") {
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 100);
        second = Math.floor(Math.random() * 100);
        soul = first * second;
        problems[x] = [soul, first, second];
      }
    } else if (level == "hard"){
      for(x = 0; x < 60; x++) {
        first = Math.floor(Math.random() * 1000);
        second = Math.floor(Math.random() * 1000);
        soul = first * second;
        problems[x] = [soul, first, second];
      }
    }
  }

}
