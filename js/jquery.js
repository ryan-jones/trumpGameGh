const MAXTRUMPTIMEVALUE = 60;

var sliderVal = MAXTRUMPTIMEVALUE
var options = {

  character: ["Kellyanne Conway", "Jared Kushner", "Reince Priebus"],
  numbersOfSolutions: 3,
  crisis: [
    { desc:"Kellyanne Conway mentioned a massacre that didn't happen during an interview on national television", imgName: "conway.jpg",
      wrongAnswers: [ 'Send Jared Kushner off to solve the Israel-Palestine conflict so Trump can have some "father-daughter time"', "Comment on how luscious his hair looks today" ],
      correctAnswer: "Remind him of how it's good PR to have a women around whose pussy he won't try to grab",
      tweet: "autism-tweet.png"},


    { desc:'The "golden shower" video tape has been leaked', imgName: "",
      wrongAnswers: ["Suggest sending SEAL Team 6 to eliminate Rosie O'Donnel", 'Fire the last remaining African-American White House employee so that "the staff match the walls"'],
      correctAnswer: "Make up some ridiculous bullshit about wiretapped microwaves and put it on Twitter",
      tweet: "barneynipples.png"},


    { desc: "Press Secretary Sean Spicer claims that Hitler didn't use chemical weapons against innocent civilians in a session with journalists", imgName: "sean-spicer.jpg",
      wrongAnswers: ["Strategically leave Breitbart news articles condemning Muslims around the Oval Office for him to find", "Subtlely suggest to 'Fox and Friends' to do a piece on how Trump's approval rating is higher than leukemia's"],
      correctAnswer: "Order him some Taco Bell",
      tweet: "climate-tweet.jpg"},


    { desc: "Pictures of Trump's holiday with Putin are released by Wikileaks", imgName: "trump&putin.jpg",
      wrongAnswers: ["Go onto primetime television and talk about resurrecting coal jobs", "Arrange for several dozen strippers to come to White House to commemorate International Women's Day"],
      correctAnswer: "Make lemonade out of lemons and comment him on his physique ",
      tweet: "black-tweet.png"},


    { desc: "Using satellite imagery, scientists prove that only 40,000 people attended Trump's presidential inauguration", imgName: "inauguration.jpg",
      wrongAnswers: ["Convince Ivanka to give him a back rub", "Remind him of that time he won 306 votes in the electoral college"],
      correctAnswer: "Suggest sending SEAL Team 6 to eliminate Rosie O'Donnel",
      tweet: "newyear-tweet.jpg"},

    { desc: 'Mar-a-lago, aka "the southern White House", must be temporarily closed after having been hit with multiple food-safety violations', imgName: "maralago.jpg",
      wrongAnswers: ["Wave shiny objects in front of his face and make cooing noises", "Arrange for several dozen strippers to come to White House to commemorate International Women's Day"],
      correctAnswer: 'Send Jared Kushner off to solve the Israel-Palestine conflict so Trump can have some "father-daughter time" ',
      tweet: "mexicorape-tweet.png"},

    { desc: "Vladimir Putin didn't return Trump's phone call", imgName: "putinbored.jpg",
      wrongAnswers: ['Fire the last remaining African-American White House employee so that "the staff match the walls"', "Comment on how luscious his hair looks today"],
      correctAnswer:   'Have a four-star general describe the latest weapon designs with "pew-pews" and "bangs"',
      tweet: "germanyowes-tweet.png"},

    { desc:"Meliana Trump is only voted the 6th most beautiful First Lady in history in a recent online poll", imgName: "meliana.jpg",
      wrongAnswers: ["Announce a National Men's day and have it held the day before and after International Women's Day", "Have Congress announce an investigation into vote rigging"],
      correctAnswer: "Remind him that there's still time to find a fourth wife",
      tweet: "huffington-tweet.png"},

    { desc: "Obamacare reform fails to pass Congress after politicians discover people like having healthcare", imgName: "trumpcare.jpg",
      wrongAnswers: ["Toast to all the poor Democrats that will die from vegan-induced anemia", "Buy him a eyebrow comb made of gold"],
      correctAnswer: 'Shrug and say, "meh, just blame it on Paul Ryan"',
      tweet: "military-rape.jpg"},

    { desc: "Trump hits 12 above par while playing golf at his Mar-a-largo resort", imgName: "golf.jpeg",
      wrongAnswers: ["Remind him of that time he won 306 votes in the electoral college", "have secret service arrest the resort owner for tampering"],
      correctAnswer: "Propose a first strike of Kim Jong Un's compound",
      tweet: "militarystrike.png"},

    { desc: "Trump discovers his hands are too small to open a jar of queso dip", imgName: "hands.jpg",
      wrongAnswers: ['Assure him that the phrase is "big feet ________"', "Offer to hire an illegal immigrant to open it for him" ],
      correctAnswer: "Arrange for several dozen strippers to come to White House to commemorate International Women's Day",
      tweet: "sleepychucktweet.png"},

    { desc: "Ivanka Trump forgot to close the door while changing", imgName: "ivanka.jpg ",
      wrongAnswer: ["ohshitohshitohshitohshitohshitohshit", "Shoot her! Shoooooooot her!"],
      correctAnswer: "Take a bullet for America and jump in the way",
      tweet: "grab-kitty.jpg"},
  ],


};

 var journalist = [
 {question: "Does the White House have any statement concerning recent allegations of collusion between Michael Flynn and Russian officials?",
  wrongAnswers: ["We are currently looking into it", "We take this matter very seriously and are cooperating with authorities"],
  correctAnswer: "MICROWAVES!"}
 //  {question:
 //   wrongAnswers:
 //   correctAnswer:}
  ];

var game;


window.onload = function(){


//*****************  move to introduction window ******************************

  $('#btn-start').click(function(){
    $('.start-page').remove();
    $('.intro-page').toggle();
  });

  var penalty = 0;  //time penalty for right or wrong answer
  var correct = 0;  //correct answer of every instance
  var correctJournalistAnswer = 0; //correct answer of every journalist
  var countDownTimer = 0;

//***************************  Start the game **********************

  $('.btn-game').click(function(){
    $('.intro-page').remove();
    $('.main-container').toggle();
    createInstance();
    $('#slider').val(String(MAXTRUMPTIMEVALUE));


    setInterval(gameTimeCounter,1000);
    setInterval(trumpMeterTimer,1000);
    setTimeout(journalistTimer, 1000* (Math.floor(Math.random()*60)));



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

  if (selectJournalistOption == correctJournalistAnswer){ //correct is from randomJournalistQuestion()
    $('#journalist-page').toggle();
    $('.main-container').toggle();
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
        if(countDownTimer>0){
        $('#journalist-image').empty();
        $('#journalist-page').toggle();
        $('.main-container').toggle();
        randomJournalistQuestion();
        }
      }
      //generate random interval for next journalist prompt

    } //journalistTimer()


//*************** creates the countdown timer for the Trump Meter *********************

      function trumpMeterTimer(){
        countDownTimer = $('#slider').val();
        if (penalty === 0){
          countDownTimer--;


          if (countDownTimer < (MAXTRUMPTIMEVALUE * 1)){
            
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/happy-trump.jpg" class="img-circle"/>');
          }

          if (countDownTimer < (MAXTRUMPTIMEVALUE * 0.80)){

            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/unhappy-trump.jpg" class="img-circle"/>');
          }

          if (countDownTimer < (MAXTRUMPTIMEVALUE * 0.50)){
            console.log("50",countDownTimer);

            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/annoyed-trump.jpg" class="img-circle"/>');
          }

          if (countDownTimer < (MAXTRUMPTIMEVALUE * 0.20)){
            console.log("20",countDownTimer);

            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/furious-trump.jpg" class="img-circle"/>');
          }
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
          $('.main-container').remove();
          $('#twitter-page').css("visibility", "visible");
        }
      }



//************************ creates a new instance of the game *******************

  function createInstance(){

    $('#situation-image').empty();
    $('#twitter-image').empty();
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
    $('#twitter-image').append('<img  src="images/' + this.situation.tweet + '"/>');

  }//createInstance()


  //************************** get random journalist question *********************

  function getRandomJournalist(){

    var journalistIndex = Math.floor(Math.random()* journalist.length);
    return journalist[journalistIndex];

  }

  //*************************  set random journalist question ************************

  function randomJournalistQuestion(){
    var journalist = getRandomJournalist();
    var getJournalistArray = [];
    correctJournalistAnswer = journalist.correctAnswer;


      for (var i =0; i < journalist.wrongAnswers.length; i++){
      getJournalistArray.push(journalist.wrongAnswers[i]);
      }
      getJournalistArray.push(journalist.correctAnswer);


      //randomly assigns a solution for each journalist option button

      var num1 = Math.floor(Math.random()* getJournalistArray.length);
      journalist.solution1  = getJournalistArray.splice(num1,1);


      var num2 = Math.floor(Math.random()* getJournalistArray.length);
      journalist.solution2 = getJournalistArray.splice(num2,1);


      var num3 = Math.floor(Math.random()* getJournalistArray.length);
      journalist.solution3  = getJournalistArray.splice(num3,1);



      $('#journalist-questions').html(journalist.question);
      $('#journalist-image').append('<img  src="images/' + journalist.imgName + '"/>');
      $('.journalist-option-one').html(journalist.solution1);
      $('.journalist-option-two').html(journalist.solution2);
      $('.journalist-option-three').html(journalist.solution3);


  }
//****************************  Creates a random journalist question ************************

// function askJournalistQuestion(){
//   //randomly generates the journalist question
//   var correctJournalistAnswer = this.journalist.correctAnswer;
//   var getJournalistArray = [];
//
//
//   for (var i =0; i < this.journalist.wrongAnswers.length; i++){
//   getJournalistArray.push(this.journalist.wrongAnswers[i]);
//   }
//   getJournalistArray.push(this.journalist.correctAnswer);
//
//
//   //randomly assigns a solution for each journalist option button
//
//   var num1 = Math.floor(Math.random()* getJournalistArray.length);
//   this.journalist.solution1  = getJournalistArray.splice(num1,1);
//
//
//   var num2 = Math.floor(Math.random()* getJournalistArray.length);
//   this.journalist.solution2 = getJournalistArray.splice(num2,1);
//
//
//   var num3 = Math.floor(Math.random()* getJournalistArray.length);
//   this.journalist.solution3  = getJournalistArray.splice(num3,1);






}; //windows.onload
