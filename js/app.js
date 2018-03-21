angular
  .module("myApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./js/home/homeTmpl.html"
      })
      .state("settings", {
        url: "/settings",
        templateUrl: "./js/settings/settingsTmpl.html"
      })
      .state("products", {
        url: "/products/:id",
        templateUrl: "./js/products/productsTmpl.html",
        controller: "productsCtrl"
      });
  });
