const servicesData = {
  services: [
    {title: "Powerwashing", description: "We offer porfessional outdoor powerwashing"},
    {title: "Residential", description: "We offer porfessional outdoor powerwashing"},
    {title: "Commercial", description: "We offer porfessional outdoor powerwashing"},
    {title: "Carpet Shampoo", description: "We offer porfessional outdoor powerwashing"}
  ]
 }

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
.controller("ServiceShowController",[
  "$state",
  "$stateParams",
  ServiceShowController
])
.controller("ServiceShow1Controller", [
  "$state",
  "$stateParams",
  ServiceShow1Controller
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
  .state("servicesShow", {
    url:"/services/residential",
    templateUrl: "js/ng-views/services/show.html",
    controller: "ServiceShowController",
    controllerAs: "vm"
  })
  .state("servicesShow1", {
    url:"/services/powerwashing",
    templateUrl: "js/ng-views/services/show1.html",
    controller: "ServiceShow1Controller",
    controllersAs: "vm"
  })
  .state("servicesShow2", {
    url:"/services/commercial",
    templateUrl: "js/ng-views/services/show2.html",
    controller: "ServiceShow2Controller",
    controllersAs: "vm"
  })
  .state("servicesShow3", {
    url:"/services/carpet-shampoo",
    templateUrl: "js/ng-views/services/show3.html",
    controller: "ServiceShow3Controller",
    controllersAs: "vm"
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
  this.services = servicesData.services
}

function ServiceShowController($state, $stateParams) {
  this.services = servicesData.services
}

function AboutShowController($state, $stateParams) {

}

function ContactShowController($state, $statParams) {

}

function ServiceShow1Controller( $state, $stateParams) {

}
function ServiceShow2Controller( $state, $stateParams) {

}
function ServiceShow3Controller( $state, $stateParams) {

}
