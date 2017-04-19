


// create the different character, crisis points, and solutions
var TrumpGame = function(options){
  this.secondsIncrement = 1;
  this.secondsLeft = 60;
  // this.difficult = options.difficulty;
  this.situation = options.crisis;
  // this.solution1 = options.crisis.wrongAnswers;
  // this.solution2 = options.crisis.wrongAnswers;
  // this.solution3 = options.crisis.correctAnswer;
  this.journalist = options.journalist;
  // this.started = false;
  this.options = options;
};


//returns a random integer value for the crisis

TrumpGame.prototype._getRandomCrisis = function(){

  var crisisIndex = Math.floor(Math.random()* (this.options.crisis.length));
  return this.options.crisis[crisisIndex];

};


//select the randomly generated situation
TrumpGame.prototype.getCrisis = function(){

  var selectedCrisis = this._getRandomCrisis();

  return selectedCrisis;

};
