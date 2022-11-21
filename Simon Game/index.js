var gameStart = false;

$(document).keydown(function(event){
  gameStart = true;
});

var buttonArray = ["green", "red", "yellow", "blue"];

while (gameStart == true) {

  var roundNum = 1;
  var promptArray = [];
  var answerArray = [];
  var gameOver = false;

  while (gameOver == false) {
    var randomNum = Math.floor(Math.random() * 4);
    promptArray.push(randomNum);
    $(buttonArray[randomNum]).toggle();


    // in the while loop, if there is one mismatch, exit and gameOver = true


      $("green").click(function(){
        $("green").addClass("pressed");
        setTimeout(function(){$("green").removeClass("pressed");}, 100);
        answerArray.push(0);
        if (answerArray[answerArray.length-1] != promptArray[answerArray.length-1]){
          gameOver = true;
          break;
        }
      });

      $("red").click(function(){
        $("red").addClass("pressed");
        setTimeout(function(){$("red").removeClass("pressed");}, 100);
        answerArray.push(1);
        if (answerArray[answerArray.length-1] != promptArray[answerArray.length-1]){
          gameOver = true;
          break;
        }
      });

      $("yellow").click(function(){
        $("yellow").addClass("pressed");
        setTimeout(function(){$("yellow").removeClass("pressed");}, 100);
        answerArray.push(2);
        if (answerArray[answerArray.length-1] != promptArray[answerArray.length-1]){
          gameOver = true;
          break;
        }
      });

      $("blue").click(function(){
        $("blue").addClass("pressed");
        setTimeout(function(){$("blue").removeClass("pressed");}, 100);
        answerArray.push(3);
        if (answerArray[answerArray.length-1] != promptArray[answerArray.length-1]){
          gameOver = true;
          break;
        }
      });

      if (answerArray == promptArray) {
        continue;
      }
  }

  $("h1").text("Game Over, Press Any Key to Restart");

  $(document).keydown(function(event){
    gameOver = false;
  });











}
