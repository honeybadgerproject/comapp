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

.controller('SurveyCtrl', function($scope, $state, Api, QuestionArray) {
  
  $scope.survey = new Array();

  $scope.questionArray = new Array();
  $scope.answerArray = new Array();
  $scope.typeAnswer = '';


  $scope.returnToHome = function() {
    $state.go('services');
  };

  $scope.returnToSurvey = function() {
    console.log("to survey");
    $state.go('survey');
  };

  $scope.returnToQuestionList = function() {
    console.log("to question list");
    $state.go('questionlist');
  };


  $scope.goToSurveQuestion = function(questionarray) {
    QuestionArray.value = questionarray;
    console.log(QuestionArray.value);
    $state.go('questionlist');
  };

  $scope.printValue = function() {
    $scope.questionArray = QuestionArray.value;
    console.log(QuestionArray.value);
  };

  $scope.printAnswer = function() {
    $scope.answerArray = QuestionArray.answer;
    $scope.typeAnswer =  QuestionArray.type;
    console.log(QuestionArray.answer);
  }

  $scope.goToQuestion = function(answer, typeanswer) {
    QuestionArray.answer = answer;
    QuestionArray.type = typeanswer;
    console.log(QuestionArray.answer);
    $state.go('question');
  };

  var apiParams = "/survey/1";
  Api.getApiData(apiParams)
  .then(function(result) {
    
    console.log(result);

    $scope.survey = result.sections;
    console.log($scope.survey);


  })

  

})

.controller('QuestionListCtrl', function($scope, $state, Api) {
  
})

.controller('LoginCtrl', function($scope, $state) {
  $scope.goToListServicesView = function() {
    console.log("pressed");
    $state.go('services');


  };
});