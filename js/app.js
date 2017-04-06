const servicesData = [
  {
    title: "Powerwashing",
    discription: "We offer porfessional outdoor powerwashing",
    // imgurl: url("")
  }
]

angular
.module("website", [
  "ui.router",
  "ngResource"
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("WelcomeController",[
  "$state",
  "$stateParams",
  WelcomeController
])
.controller("ServiceIndexController",[
  "$state",
  "$stateParams",
  ServiceIndexController
])
.controller("ServiceController",[
  "$state",
  "StateParams",
  ServiceShowController
])
.controller("AboutController",[
  "$state",
  "$stateParams",
  AboutShowController
])
.controller("ContactController", [
  "$state",
  "$stateParams",
  ContactShowController
])

//Routes
function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html",
    controller: "WelcomeController",
    controllerAs: "vm"
  })
  .state("servicesIndex", {
    url:"/servicesIndex",
    templateUrl:"js/ng-views/services/index.html",
    controller: "ServiceIndexController",
    controllerAs: "vm"
  })
  .state("services", {
    url:"/services/:id",
    templateUrl: "js/ng-views/services/show.html",
    controller: "ServiceShowController",
    controllerAs: "vm"
  })
  .state("contact", {
    url:"/contact",
    templateUrl:"js/ng-views/contact/show.html",
    controller: "ContactShowController",
    ControllerAs: "vm"
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
  this.services = servicesData
}

function ServiceShowController($state, $stateParams) {

}

function AboutShowController($state, $stateParams) {

}

function ContactShowController($state, $statParams) {

}
