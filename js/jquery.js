const MAXTRUMPTIMEVALUE = 60;

var options = {

  character: ["Kellyanne Conway", "Jared Kushner", "Reince Priebus"],
  numbersOfSolutions: 3,
  crisis: [
    { desc:"Kellyanne Conway mentioned a massacre that didn't happen during an interview on national television", imgName: "conway.jpg",
      wrongAnswers: [ 'Send Jared Kushner off to solve the Israel-Palestine conflict so Trump can have some "father-daughter time"', "Comment on how luscious his hair looks today" ],
      correctAnswer: "Remind him of how it's good PR to have a women around whose pussy he won't try to grab"},


    { desc:'The "golden shower" video tape has been leaked', imgName: "",
      wrongAnswers: ["Suggest sending SEAL Team 6 to eliminate Rosie O'Donnel", 'Fire the last remaining African-American White House employee so that "the staff match the walls"'],
      correctAnswer: "Make up some ridiculous bullshit about wiretapped microwaves and put it on Twitter" },


    { desc: "Press Secretary Sean Spicer claims that Hitler didn't use chemical weapons against innocent civilians in a session with journalists", imgName: "sean-spicer.jpg",
      wrongAnswers: ["Strategically leave Breitbart news articles condemning Muslims around the Oval Office for him to find", "Subtlely suggest to 'Fox and Friends' to do a piece on how Trump's approval rating is higher than leukemia's"],
      correctAnswer: "Order him some Taco Bell"},


    { desc: "Pictures of Trump's holiday with Putin are released by Wikileaks", imgName: "trump&putin.jpg",
      wrongAnswers: ["Go onto primetime television and talk about resurrecting coal jobs", "Arrange for several dozen strippers to come to White House to commemorate International Women's Day"],
      correctAnswer: "Make lemonade out of lemons and comment him on his physique "},


    { desc: "Using satellite imagery, scientists prove that only 40,000 people attended Trump's presidential inauguration", imgName: "inauguration.jpg",
      wrongAnswers: ["Convince Ivanka to give him a back rub", "Remind him of that time he won 306 votes in the electoral college"],
      correctAnswer: "Suggest sending SEAL Team 6 to eliminate Rosie O'Donnel"},

    { desc: 'Mar-a-lago, aka "the southern White House", must be temporarily closed after having been hit with multiple food-safety violations', imgName: "maralago.jpg",
      wrongAnswers: ["Wave shiny objects in front of his face and make cooing noises", "Arrange for several dozen strippers to come to White House to commemorate International Women's Day"],
      correctAnswer: 'Send Jared Kushner off to solve the Israel-Palestine conflict so Trump can have some "father-daughter time" '},

    { desc: "Vladimir Putin didn't return Trump's phone call", imgName: "putinbored.jpg",
      wrongAnswers: ['Fire the last remaining African-American White House employee so that "the staff match the walls"', "Comment on how luscious his hair looks today"],
      correctAnswer:   'Have a four-star general describe the latest weapon designs with "pew-pews" and "bangs"'},

    { desc:"Meliana Trump is only voted the 6th most beautiful First Lady in history in a recent online poll", imgName: "meliana.jpg",
      wrongAnswers: ["Announce a National Men's day and have it held the day before and after International Women's Day", "Have Congress announce an investigation into vote rigging"],
      correctAnswer: "Remind him that there's still time to find a fourth wife"},

    { desc: "Obamacare reform fails to pass Congress after politicians discover people like having healthcare", imgName: "trumpcare.jpg",
      wrongAnswers: ["Toast to all the poor Democrats that will die from vegan-induced anemia", "Buy him a eyebrow comb made of gold"],
      correctAnswer: 'Shrug and say, "meh, just blame it on Paul Ryan"'},

    { desc: "Trump hits 12 above par while playing golf at his Mar-a-largo resort", imgName: "golf.jpeg",
      wrongAnswers: ["Remind him of that time he won 306 votes in the electoral college", "have secret service arrest the resort owner for tampering"],
      correctAnswer: "Propose a first strike of Kim Jong Un's compound"},

    { desc: "Trump discovers his hands are too small to open a jar of queso dip", imgName: "hands.jpg",
      wrongAnswers: ['Assure him that the phrase is "big feet ________"', "Offer to hire an illegal immigrant to open it for him" ],
      correctAnswer: "Arrange for several dozen strippers to come to White House to commemorate International Women's Day"},

    { desc: "Ivanka Trump forgot to close the door while changing", imgName: "ivanka.jpg ",
      wrongAnswer: [],},
  ],


  journalist: [
    {question: "Does the White House have any statement concerning recent allegations of collusion between Michael Flynn and Russian officials?",
     wrongAnswers: ["We are currently looking into it", "We take this matter very seriously and are cooperating with authorities"],
     correctAnswer: "MICROWAVES!"}
  ]
};

var game;


window.onload = function(){


//*****************  move to introduction window ******************************

  $('#btn-start').click(function(){
    $('.start-page').remove();
    $('.intro-page').css("visibility", "visible");
  });

  var penalty = 0;  //time penalty for right or wrong answer
  var correct = 0;  //correct answer of every instance

//***************************  Start the game **********************

  $('.btn-game').click(function(){
    $('.intro-page').remove();
    $('.main-container').css("visibility", "visible");
    createInstance();
    $('#slider').val(String(MAXTRUMPTIMEVALUE));
    setInterval(gameTimeCounter,1000);
    setTimeout(journalistTimer,1000);
    setInterval(trumpMeterTimer,1000);

  }); //  $('.btn-primary').click(function()


//************************* Selecting (in)correct answer ******************

  $('.Option').click(function(){
    var selectOption = $(this).text();

  if (selectOption == correct){ //correct is from createInstance()
      createInstance();
      penalty = -10;
    } else {
      //user clicked on wrong answer
      penalty = 10;
    }

  });

//************************* Selecting Journalist Answers *******************

  $('.Option-journalist').click(function(){
    var selectJournalistOption = $(this).text();

  if (selectJournalistOption == correctJournalistAnswer){ //correct is from createInstance()
    $('#journalist-page').css("visibility", "hidden");
    $('.main-container').css("visibility", "visible");
    journalistTimer();
    }


  });

//*****************************  Countup Timer ****************************
  function gameTimeCounter(){
      var currentTime = $('#time').text();

      currentTime++;
      $('#time').text(currentTime);

    }// gameTimeCounter

//******************* journalist alert code ***********************************************


  var countDownJournalistTimer = 60;

    function journalistTimer(){
      countDownJournalistTimer--;
      if (countDownJournalistTimer !== 0){
        $('#journalist-page').css("visibility", "visible");
        $('.main-container').css("visibility", "hidden");
        getJournalistQuestion();
      }
      //generate random interval for next journalist prompt
      setTimeout(journalistTimer, 1000* (Math.floor(Math.random()*60)));
    } //journalistTimer()


//*************** creates the countdown timer for the Trump Meter *********************

      function trumpMeterTimer(){
        var countDownTimer = $('#slider').val();
        if (penalty === 0){
          countDownTimer--;
        } else {
          countDownTimer -= penalty;
          penalty = 0;
        }

        if (countDownTimer > MAXTRUMPTIMEVALUE){
          countDownTimer = MAXTRUMPTIMEVALUE;
        }

        if (countDownTimer > 0){

          $('#slider').val(String(countDownTimer));

        } else {
          //alert('Trump just nuked North Korea');
        }
      }




//************************ creates a new instance of the game *******************
  function createInstance(){

    $('#situation-image').empty();
    game =  new TrumpGame(options);
    this.situation = game.getCrisis();
    correct = this.situation.correctAnswer;


    //randomly generates the solutions for the selected crisis

    var getSolutionsArray = [];


    for (var i =0; i < this.situation.wrongAnswers.length; i++){
    getSolutionsArray.push(this.situation.wrongAnswers[i]);
    }
    getSolutionsArray.push(this.situation.correctAnswer);


    //randomly assigns a solution for each option button

    var num1 = Math.floor(Math.random()* getSolutionsArray.length);
    this.situation.solution1  = getSolutionsArray.splice(num1,1);


    var num2 = Math.floor(Math.random()* getSolutionsArray.length);
    this.situation.solution2 = getSolutionsArray.splice(num2,1);


    var num3 = Math.floor(Math.random()* getSolutionsArray.length);
    this.situation.solution3  = getSolutionsArray.splice(num3,1);


    $('#situations').html(this.situation.desc);
    $('#situation-image').append('<img  src="images/' + this.situation.imgName + '"/>');
    $('.option-one').html(this.situation.solution1);
    $('.option-two').html(this.situation.solution2);
    $('.option-three').html(this.situation.solution3);

  }//createInstance()


//****************************  Creates a random journalist question ************************

function getJournalistQuestion(){
  //randomly generates the journalist question
  var correctJournalistAnswer = this.journalist.correctAnswer;
  var getJournalistArray = [];


  for (var i =0; i < this.journalist.wrongAnswers.length; i++){
  getJournalistArray.push(this.journalist.wrongAnswers[i]);
  }
  getJournalistArray.push(this.journalist.correctAnswer);


  //randomly assigns a solution for each journalist option button

  var num1 = Math.floor(Math.random()* getJournalistArray.length);
  this.journalist.solution1  = getJournalistArray.splice(num1,1);


  var num2 = Math.floor(Math.random()* getJournalistArray.length);
  this.journalist.solution2 = getJournalistArray.splice(num2,1);


  var num3 = Math.floor(Math.random()* getJournalistArray.length);
  this.journalist.solution3  = getJournalistArray.splice(num3,1);


  $('#journalist-questions').html(this.journalist.question);
  $('#journalist-image').append('<img  src="images/' + this.journalist.imgName + '"/>');
  $('.journalist-option-one').html(this.journalist.solution1);
  $('.journalist-option-two').html(this.journalist.solution2);
  $('.journalist-option-three').html(this.journalist.solution3);
} //getJournalistQuestion



}; //windows.onload
