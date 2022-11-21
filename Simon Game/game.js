var buttonArray = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

const keyboardTable = {
  "i": "green",
  "o": "red",
  "k": "yellow",
  "l": "blue"
}

$(document).keydown(function(event){
  if (!started && event.key == "s") {
    nextSequence();
    started = true;
  }
});


$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function(event){
  var x = event.key;
  if (x == "i" || x == "o" || x == "k" || x == "l") {
  var userPressColor = keyboardTable[x];
  userClickedPattern.push(userPressColor);
  playSound(userPressColor);
  animatePress(userPressColor);

  checkAnswer(userClickedPattern.length-1);
}
});

function nextSequence() {

  userClickedPattern = [];
  level ++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonArray[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(name) {
  $("."+name).addClass("pressed");
  setTimeout(function(){$("."+name).removeClass("pressed");}, 100);
}



function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){nextSequence();}, 1000);
    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");}, 200);
    $("h1").text("Game Over, Press S to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;

}
