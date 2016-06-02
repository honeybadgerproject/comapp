angular.module('starter.controllers', [])


.controller('ServicesCtrl', function($scope, $state, Api) {

  $scope.projects = new Array();


  $scope.returnToHome = function() {
    $state.go('services');
  };

  $scope.goToSurvey = function(surveyIndex) {
    $state.go('survey');
  };

  $scope.data = null;
  
  var apiParams = "/survey";
  Api.getApiData(apiParams)
  .then(function(result) {
    $scope.data = result.data;
    console.log(result);

    var log = [];
    angular.forEach(result, function(value, key) {
      var project = { 
        title: value.title,
        description: value.description
      };

      $scope.projects.push(project);
    }, log);

  })
  
})

.controller('SurveyCtrl', function($scope, $state, Api) {
  
  $scope.survey = new Array();

  $scope.returnToHome = function() {
    $state.go('services');
  };

  var apiParams = "/survey/1";
  Api.getApiData(apiParams)
  .then(function(result) {
    
    console.log(result);

    $scope.survey = result.sections;
    console.log($scope.survey);


  })

  

})

.controller('LoginCtrl', function($scope, $state) {
  $scope.goToListServicesView = function() {
    console.log("pressed");
    $state.go('services');


  };
});