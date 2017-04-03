angular
.module("website", [
  "ui.router"
])
.config([
  "stateProvider",
  RouterFunction
])
.controller("WelcomeController",[
  "$state",
  "$stateParams",
  WelcomeController
])
.controller("ServiceController",[
  "$state",
  "$stateParams",
  ServiceIndexController
])
.controller("ServiceController",[
  "$state",
  "StateParams",
  ServiceShowController
])
.controller("AboutController", [
  "$state",
  "$stateParams",
  AboutShowController
])

function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url"/",
    templateUrl:
  })
}
