const MAXTRUMPTIMEVALUE = 60;

var sliderVal = MAXTRUMPTIMEVALUE;
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
      tweet: "grab-kitty.jpg"}
  ],


};

 var journalist = [
 {question: "Does the White House have any statement concerning recent allegations of collusion between Michael Flynn and Russian officials?", imgName: "megyn-kelly.jpg",
  wrongAnswers: ["We are currently looking into it", "We take this matter very seriously and are cooperating with authorities"],
  correctAnswer: "MICROWAVES!"},

  {question: "How does the president intend to make Mexico pay for the wall?", imgName: "jake-tapper.jpg",
   wrongAnswers: ["Uh, taxes on tequila and oversized hats", "Ransom illegal immigrants to their families, of course"],
   correctAnswer: "The president never said that he would make Mexico build the wall"}
 //  {question:
 //   wrongAnswers:
 //   correctAnswer:}
  ];

var notifications = ["Coal regulations rolled back. Miners can work again!", "Dakota pipeline complete! Indian tears fuel job growth", "Climate change officially doesn't exist!", "Border wall built on credit!", "We locked her up!", "Consumers goods only increased 20% after import tax!" ];

var game;


window.onload = function(){

  // $('.audio').append('<audio autoplay><source src="images/03 America, F__k Yeah.mp3"></audio>');
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
    gameConditions();

  }); //  $('.btn-primary').click(function()


  $('btn-new-game').click(function(){
    var twitterPage = $('#twitter-page');
    if (twitterPage.is(':visible')){
      twitterPage.is(':hidden');
    }    $('.main-container').toggle();
    gameConditions();
  });

//************************** creating game conditions****************************

function gameConditions(){
  createInstance();
  $('#slider').val(MAXTRUMPTIMEVALUE);
  $('#points').val(0);


  setInterval(gameTimeCounter,1000);
  setInterval(trumpMeterTimer,1000);
  setInterval(approvalRating, 1000);
  setTimeout(journalistTimer, 1000* (Math.floor(Math.random()*60)));
  setInterval(noteAdder, 20000);
}

//************************* Selecting (in)correct answer ******************

  $('.Option').click(function(){
    var selectOption = $(this).text();

  if (selectOption == correct){ //correct is from createInstance()
    $('#situation-image').empty();
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

//************************** creating notifications *******************************

function noteAdder(){

  var noteIndex = Math.floor(Math.random()*notifications.length);
  var Note = notifications.splice(noteIndex,1);

  $('#notifications').append('<div class="notes"><h4>' + Note + '</h4></div>');
}
//*****************************  Countup Timer ************************************
  function gameTimeCounter(){
      var currentTime = $('#time').text();

      currentTime++;
      $('#time').text(currentTime);

    }// gameTimeCounter


//***************************** Approval Rating **************************

function approvalRating(){



}

//******************* journalist Timer ***********************************************


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
        countDownTimer = parseInt($('#slider').val());
        var finalRating = 0;
        var currentRating = 0;

        if(currentRating <= 0){
          currentRating = 0;
          currentRating = $('#points').text();
        } else {
          currentRating = $('#points').text();
        }


        if (penalty === 0){
          countDownTimer--;

          if (countDownTimer > (MAXTRUMPTIMEVALUE * 0.80)){
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/happy-trump.jpg" class="img-circle"/>');
            currentRating++;
            $('#points').text(currentRating);
          }

          else if (countDownTimer > (MAXTRUMPTIMEVALUE * 0.50) && countDownTimer < MAXTRUMPTIMEVALUE * 0.80){
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/unhappy-trump.jpg" class="img-circle"/>');
            currentRating++;
            $('#points').text(currentRating);
          }


          else if (countDownTimer >(MAXTRUMPTIMEVALUE * 0.20) && countDownTimer <= (MAXTRUMPTIMEVALUE * 0.50)){
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/annoyed-trump.jpg" class="img-circle"/>');
            currentRating--;

            if (currentRating <=0){
              currentRating =0;
              $('#points').text(currentRating);
            } else {
              $('#points').text(currentRating);
            }
          }

          else if (countDownTimer <= (MAXTRUMPTIMEVALUE * 0.20)){
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/furious-trump.jpg" class="img-circle"/>');

          }

          else if (countDownTimer === (MAXTRUMPTIMEVALUE * 0)){
            finalRating = parseInt($('#points').text(currentRating));
          }
        } else {
          countDownTimer -= penalty;
          penalty = 0;

        } //end if (penalty === 0)


  //***************** resets the clock **************************
        if (countDownTimer > MAXTRUMPTIMEVALUE){
          countDownTimer = MAXTRUMPTIMEVALUE;
        }

  //***************** makes sure the slider's value equals the timer's *********
        if (countDownTimer > 0){

          $('#slider').val(String(countDownTimer));

        } else {

          $('.main-container').remove();
          $('#approval-rating').text(finalRating);
          $('#twitter-page').css("visibility", "visible");
        }

      } //end function timeTrumpMeter()



//************************ creates a new instance of the game *******************

  function createInstance(){

    game =  new TrumpGame(options);
    $('#twitter-image').empty();
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






}; //windows.onload
