


// create the different character, crisis points, and solutions
var TrumpGame = function(options){
  this.secondsIncrement = 1;
  this.secondsLeft = 60;
  this.difficult = options.difficulty;
  this.situation = options.crisis;
  this.solution1 = options.crisis.wrongAnswers;
  this.solution2 = options.crisis.wrongAnswers;
  this.solution3 = options.crisis.correctAnswer;
  this.started = false;
  this.options = options;
};


//returns a random integer value for the crisis

TrumpGame.prototype._getRandomCrisis = function(){

  var crisisIndex = Math.floor(Math.random()* this.options.crisis.length);
  return this.options.crisis[crisisIndex];

};


//select the randomly generated situation
TrumpGame.prototype.getCrisis = function(){

  var selectedCrisis = this._getRandomCrisis();


  var getSolutionsArray = [];
  var selectedSolutionsArray = [];

  for (var i =0; i < selectedCrisis.wrongAnswers.length; i++){
  var wrongAnswersIndex = Math.floor(Math.random()* selectedCrisis.wrongAnswers.length);
  getSolutionsArray.push(selectedCrisis.wrongAnswers[wrongAnswersIndex]);
  }
  getSolutionsArray.push(selectedCrisis.correctAnswer);

  var solutionOneIndex = Math.floor(Math.random()* getSolutionsArray.length);
  this.solution1 = selectedSolutionsArray.push(getSolutionsArray[solutionOneIndex]);

  var solutionTwoIndex = Math.floor(Math.random()* getSolutionsArray.length);
  this.solution2 = selectedSolutionsArray.push(getSolutionsArray[solutionTwoIndex]);

  var solutionThreeIndex = Math.floor(Math.random()* getSolutionsArray.length);
  this.solution3 = selectedSolutionsArray.push(getSolutionsArray[solutionTwoIndex]);
  return selectedCrisis;

};

TrumpGame.prototype.getSolutions = function(){



};
