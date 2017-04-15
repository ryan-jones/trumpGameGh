
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
      wrongAnswers: ["Announce a National Men's day and have it held the day before and after International Women's Day", "Have Congress announce and investigation into vote rigging"],
      correctAnswer: "Remind him that there's still time to find a fourth wife"},

    { desc: "Obamacare reform fails to pass Congress after politicians discover people like having healthcare", imgName: "trumpcare.jpg",
      wrongAnswers: ["Toast to all the poor Democrats that will die from vegan-induced anemia", "Buy him a eyebrow comb made of gold"],
      correctAnswer: 'Shrug and say, "meh, just blame it on Paul Ryan"'},

    { desc: "Trump hits 12 above par while playing golf at his Mar-a-largo resort", imgName: "golf.jpeg",
      wrongAnswers: ["Remind him of that time he won 306 votes in the electoral college", "have secret service arrest the resort owner for tampering"],
      correctAnswer: "Propose a first strike of Kim Jong Un's compound"},

    { desc: "Trump discovers his hands are too small to open a jar of queso dip", imgName: "hands.jpg",
      wrongAnswer: ['Assure him that the phrase is "big feet ________"', "Offer to hire an illegal immigrant to open it for him" ],
      correctAnswer: "Arrange for several dozen strippers to come to White House to commemorate International Women's Day"},

    { desc: "Ivanka Trump forgot to close the door while changing", imgName: "ivanka.jpg ",
      wrongAnswer: [],},
  ],


  solutions: [

    "Strategically leave Breitbart news articles condemning Muslims around the Oval Office for him to find",
    "Comment on how luscious his hair looks today",
    "Remind him of that time he won 306 votes in the electoral college",
    "Go onto primetime television and talk about resurrecting coal jobs",
    "Convince Ivanka to give him a back rub",
    "Suggest sending SEAL Team 6 to eliminate Rosie O'Donnel",
    'Fire the last remaining African-American White House employee so that "the staff match the walls"',
    "Show Trump the latest economic numbers and tell him how it is all because of him",
    'Send Jared Kushner off to solve the Israel-Palestine conflict so Trump can have some "father-daughter time" ',
    "Arrange for several dozen strippers to come to White House to commemorate International Women's Day",
    "Subtlely suggest to 'Fox and Friends' to do a piece on how Trump's approval rating is higher than leukemia's",
    "Order him some Taco Bell",
    'Loudly quote "The Art of The Deal", and then remind him that he wrote it',
    "Remind him of how it's good PR to have a women around whose pussy he won't try to grab ",
    "Make up some ridiculous bullshit about wiretapped microwaves and put it on Twitter",
    "Make lemonade out of lemons and comment him on his physique ",
    "Wave shiny objects in front of his face and make cooing noises",
    'Have a four-star general describe the latest weapon designs with "pew-pews" and "bangs"',
    "Announce a National Men's day and have it held the day before and after International Women's Day",

  ]

};

var game;


window.onload = function(){

//creates a new crisis and image when a solution is selectedCrisis
  $('.options').click(function(){
      console.log(this)
      $('#situation-image').empty();
      game =  new TrumpGame(options);
      var solutionsArray = game._getRandomSolution();
      this.solution1 = solutionsArray[0];
      this.solution2 = solutionsArray[1];
      this.solution3 = solutionsArray[2];
      this.situation = game.getCrisis();

      $('#situations').html(this.situation.desc);
      $('#situation-image').append('<img  src="images/' + this.situation.imgName + '"/>');
      $('.options-one').html(this.solution1);
      $('.options-two').html(this.solution2);
      $('.options-three').html(this.solution3);
    });





};
