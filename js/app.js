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

//Routes
function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url:"/",
    templateUrl: "js/nf-views/welcome.html",
    controller: "WelcomeController",
    controllerAs: "vm"
  })
  .state("services", {
    url:"/services",
    templateUrl:"js/ng-views/services/index.html",
    controller: "ServiceIndexController",
    controllerAs: "vm"
  })
  .state("services", {
    url:"/services:id",
    templateUrl: "js/ng-views/services/show.html",
    controller: "ServiceShowController",
    controllerAs: "vm"
  })
  .state("about", {
    url:"/about",
    templateUrl: "js/ng-views/about/show.html",
    controller: "AboutShowController",
    controllerAs: "vm"
  })
}


function WelcomeController($state, $stateParams) {

}

function ServiceIndexController($state, $stateParams) {

}

function ServiceShowController($state, $stateParams) {

}

function AboutShowController($state, $stateParams) {

}
