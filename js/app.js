// const servicesData = {
//   services: [
//     {title: "Powerwashing", description: "We offer porfessional outdoor powerwashing"},
//     {title: "Residential", description: "We offer porfessional outdoor powerwashing"},
//     {title: "Commercial", description: "We offer porfessional outdoor powerwashing"},
//     {title: "Carpet Shampoo", description: "We offer porfessional outdoor powerwashing"}
//   ]
//  }

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
.controller("AboutShowController",[
  "$state",
  "$stateParams",
  AboutShowController
])
.controller("ContactShowController", [
  "$state",
  "$stateParams",
  ContactShowController
])
.controller("ServiceShow2Controller", [
  "$state",
  "$stateParams",
  ServiceShow2Controller
])
.controller("ServiceShow3Controller", [
  "$state",
  "$stateParams",
  ServiceShow3Controller
])
.controller("ServiceShow4Controller", [
  "$state",
  "$stateParams",
  ServiceShow4Controller
])
.controller("ServiceShow5Controller", [
  "$state",
  "$stateParams",
  ServiceShow5Controller
])
.controller("ServiceShow6Controller", [
  "$state",
  "$stateParams",
  ServiceShow6Controller
])
.controller("ServiceShow7Controller", [
  "$state",
  "$stateParams",
  ServiceShow7Controller
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
  .state("servicesShow4", {
    url:"/services/One-time-cleaning",
    templateUrl: "js/ng-views/services/show4.html",
    controller: "ServiceShow4Controller",
    controllerAs: "vm"
  })
  .state("servicesShow5", {
    url:"/services/Repetitive-cleaning",
    templateUrl: "js/ng-views/services/show4.html",
    controller: "ServiceShow5Controller",
    controllerAs: "vm"
  })
  .state("servicesShow6", {
    url:"/services/Garage-cleaning",
    templateUrl: "js/ng-views/services/show4.html",
    controller: "ServiceShow6Controller",
    controllerAs: "vm"
  })
  .state("servicesShow7", {
    url:"/services/window-cleaning",
    templateUrl: "js/ng-views/services/show4.html",
    controller: "ServiceShow7Controller",
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
  // this.services = servicesData.services
}

function ServiceShowController($state, $stateParams) {
  // this.services = servicesData.services
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
function ServiceShow4Controller( $state, $stateParams) {

}
function ServiceShow5Controller( $state, $stateParams) {

}
function ServiceShow6Controller( $state, $stateParams) {

}
function ServiceShow7Controller( $state, $stateParams) {

}
