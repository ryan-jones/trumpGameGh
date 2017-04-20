const MAXTRUMPTIMEVALUE = 120;

var sliderVal = MAXTRUMPTIMEVALUE;
var options = {


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


    { desc: "Press Secretary Sean Spicer claims that Hitler didn't use chemical weapons against innocent civilians", imgName: "sean-spicer.jpg",
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

    { desc: "Trump hits 12 above par while playing golf at his Mar-a-largo resort", imgName: "resize-golf.png",
      wrongAnswers: ["Remind him of that time he won 306 votes in the electoral college", "have secret service arrest the resort owner for tampering"],
      correctAnswer: "Propose a first strike of Kim Jong Un's compound",
      tweet: "militarystrike.png"},

    { desc:"Trump forgot if a strong dollar is a good or bad thing", imgName: "unhappy-trump.jpg",
      wrongAnswers: [ 'Weak is never good, Mr. President', 'Should we try the Google?' ],
      correctAnswer: "As long as it is stronger than Obama's dollar",
      tweet: "northkorea-tweet.jpg"},

    { desc: "Trump discovers his hands are too small to open a jar of queso dip", imgName: "hands.jpg",
      wrongAnswers: ['Assure him that the phrase is "big feet ________"', "Offer to hire an illegal immigrant to open it for him" ],
      correctAnswer: "Arrange for several dozen strippers to come to White House to commemorate International Women's Day",
      tweet: "sleepychucktweet.png"},

    { desc: 'Ivanka Trump forgot to close the door while changing', imgName: 'ivanka.jpg',
      wrongAnswers: ['ohshitohshitohshitohshitohshitohshit', 'Shoot her! Shoooooooot her!'],
      correctAnswer: 'Take a bullet for America and jump in the way',
      tweet: "grab-kitty.jpg"},

  ],


}; //end crisis object

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

var clearIntervalTimer;
var clearJournalist;
var clearTrumpTimer;
var clearApproval;
var clearGameTime;
var clearKim;
var clearBannon;
var instance;
var ivanka = options.crisis[options.crisis.length-1];


window.onload = function(){

$('.audio').append('<audio autoplay><source src="images/03 America, F__k Yeah.mp3"></audio>');

  $('.myCarousel').slick({
    autoplay: true,
    autoplaySpeed: 3900,
    });

  var endCarousel = function(){
    $('.myCarousel').remove();
  };

  var startNewCarousel = function(){
    $('.wrestle').toggle();
    $('.wrestle').slick({
      autoplay: true,
      autoplaySpeed: 8000
    });
  };

  var slideDownTitle = function(){
    $('#maga').slideDown(1500);
    $('.start-page').css({'margin':'0 10%'});
  };

  var moveStartPage = function(){

    $('.start-page').slideDown(1000);
  };

  var slideDownMaga = function(){
    $('#maga-bar').slideDown(2000);
  };

  var fadeinMagaText = function(){
    $('#start-text').fadeIn(2000);
  };

  setTimeout(endCarousel, 7800);
  setTimeout(startNewCarousel, 7800);
  setTimeout(moveStartPage, 9800);
  setTimeout(slideDownTitle, 2000);
  setTimeout(slideDownMaga, 2000);
  setTimeout(fadeinMagaText, 2000);



//*****************  move to introduction window ******************************

  $('#btn-start').click(function(){
    $('.start-page').remove();
    $('.intro-page').toggle();
    window.scrollTo(0,0);
  });

  var penalty = 0;  //time penalty for right or wrong answer
  var correct = 0;  //correct answer of every instance
  var correctJournalistAnswer = 0; //correct answer of every journalist
  var countDownTimer = 0;



//***************************  Start the game **********************

  $('.btn-game').click(function(){
    $('.audio').remove();
    $('.main-container').append('<audio autoplay><source src="images/dumb.mp3" id="dumb"></audio>');
    $('.intro-page').remove();
    $('.main-container').toggle();
    gameConditions();
    window.scrollTo(0,0);

  }); //  $('.btn-primary').click(function()


  $('.btn-new-game').click(function(){
    $('#twitter-page').remove();
    $('#situation-image').remove();
    $('.main-container').toggle();
    gameConditions();
    window.scrollTo(0,0);
  });

  //************************ creates a new instance of the game *******************

    function createInstance(){

      game =  new TrumpGame(options);
      $('#twitter-image').empty();
      $('#situations').empty();
      $('#situation-image').empty();

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
      $('#situation-image').append('<img  class="img-circle" src="images/' + this.situation.imgName + '"/>');
      $('.option-one').html(this.situation.solution1);
      $('.option-two').html(this.situation.solution2);
      $('.option-three').html(this.situation.solution3);
      $('#twitter-image').append('<img  class="img-responsive "src="images/' + this.situation.tweet + '"/>');

      var thisInstance = this.situation;

      return thisInstance;
    }//createInstance()


    //************************** creating game conditions****************************

    function gameConditions(){

      createInstance();
      $('#slider').val(MAXTRUMPTIMEVALUE);
      $('#points').val(0);


      clearGameTime = setInterval(gameTimeCounter,1000);
      clearTrumpTimer = setInterval(trumpMeterTimer,1000);
      clearApproval = setInterval(approvalRating, 1000);
      clearJournalist = setTimeout(journalistTimer, 1000* (Math.floor(Math.random()*60)));
      clearIntervalTimer = setInterval(noteAdder, 20000);
      clearKim = setTimeout(kimTimer, 1000 * (Math.floor(Math.random()*90)));
      clearBannon = setTimeout(bannonTimer, 1000 * (Math.floor(Math.random()*90)));
    }






//************************* Selecting (in)correct answer ******************

  $('.Option').click(function(){
    var selectOption = $(this).text();

  if (selectOption == correct){ //correct is from createInstance()
    // $('#situation-image').empty();

      createInstance();
      penalty = -10;
    }
    else {
      //user clicked on wrong answer
      penalty = 20;
    }

  });



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


  $('#pop-ups').notify(Note, "success");
  $('#accomplishments').append('<div><h4>' + Note + '</h4></div>');


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



//********* Kim Jong Un Timer ***********************

    var countDownKimTimer = 120;

      function kimTimer(){
        countDownKimTimer--;
        if (countDownKimTimer !== 0){
          if(countDownTimer>0){
          $('#kimjongun').slideDown("1500");
          $('#kimjongun-div').notify('Death to America!', 'warn');
          }
        }
        //generate random interval for next Kimjongun

      } //kimTimer()


//****************** Steve Bannon Timer ************************************

    var countDownBannonTimer = 120;

    function bannonTimer(){
      countDownBannonTimer--;
      if (countDownBannonTimer !== 0){
        if(countDownTimer>0){
        $('#bannon').slideDown("1500");
        $('#bannon-div').notify('Wanna ban the muslims?', 'warn');
        }
      }
      //generate random interval for next Bannon

    } //bannonTimer()


//*************** creates the countdown timer for the Trump Meter *********************

      function trumpMeterTimer(){
        countDownTimer = parseInt($('#slider').val());
        var finalRating = 0;
        var currentRating = 0;
        // instance = thisInstance;


        if(currentRating <= 0){
          currentRating = 0;
          currentRating = $('#points').text();
        } else {
          currentRating = $('#points').text();
        }


        if (penalty === 0){
          countDownTimer--;

          if (countDownTimer > (MAXTRUMPTIMEVALUE * 0.80)){


            if (instance  == ivanka){ //ivanka
              $('#trump-meter-img').empty();
              $('#trump-meter-img').append('<img src= "images/aroused-trump.jpg" class="img-circle"/>');
              penalty = 30;
            } else {
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/happy-trump.jpg" class="img-circle"/>');
            currentRating++;
            }
            $('#points').text(currentRating);
          }

          else if (countDownTimer > (MAXTRUMPTIMEVALUE * 0.50) && countDownTimer < MAXTRUMPTIMEVALUE * 0.80){
            if (instance  == ivanka){ //ivanka
              $('#trump-meter-img').empty();
              $('#trump-meter-img').append('<img src= "images/aroused-trump.jpg" class="img-circle"/>');
              penalty = 30;
            } else {
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/unhappy-trump.jpg" class="img-circle"/>');
            currentRating++;
            $('#points').text(currentRating);
            }
          }


          else if (countDownTimer >(MAXTRUMPTIMEVALUE * 0.20) && countDownTimer <= (MAXTRUMPTIMEVALUE * 0.50)){
            if (instance  == ivanka){ //ivanka
              $('#trump-meter-img').empty();
              $('#trump-meter-img').append('<img src= "images/aroused-trump.jpg" class="img-circle"/>');
              penalty = 30;
            } else {
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/annoyed-trump.jpg" class="img-circle"/>');
            currentRating--;
            }

            if (currentRating <=0){
              currentRating =0;
              $('#points').text(currentRating);
            } else {
              $('#points').text(currentRating);
            }
          }

          else if (countDownTimer <= (MAXTRUMPTIMEVALUE * 0.20)){
            if (instance  == ivanka){ //ivanka
              $('#trump-meter-img').empty();
              $('#trump-meter-img').append('<img src= "images/aroused-trump.jpg" class="img-circle"/>');
              penalty = 30;
            } else {
            $('#trump-meter-img').empty();
            $('#trump-meter-img').append('<img src= "images/furious-trump.jpg" class="img-circle"/>');
            }
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
          endGame();
          $('.main-container').toggle();
          $('#approval-rating').text(finalRating);
          $('#twitter-page').css("visibility", "visible");
        }

      } //end function timeTrumpMeter()




      //**********************  Clears all timers ***************************
      function endGame(){
        console.log("cleartime", clearIntervalTimer);
        clearInterval(clearIntervalTimer);
        clearInterval(clearGameTime);
        clearInterval(clearApproval);
        clearInterval(clearJournalist);
        clearInterval(clearTrumpTimer);
        clearInterval(clearBannon);

      }





}; //windows.onload
