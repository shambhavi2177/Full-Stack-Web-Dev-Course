// alert("say something");
var level=1;
var count=0;
var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","yellow","green"];
var start=false;

$(document).keydown(function ()
{
    if(!start)
    {
        start=true;
        nextSequence();

    }
});

$(".btn").click(function ()
{ 
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userChosenColour,count);
});


function nextSequence()
{
    //next level
    $("h1").text("Level "+level);
    level+=1;
    //next colour
    randomNumber=Math.floor(Math.random()*3);
    var randomChosenColour=buttonColours[randomNumber];
    //playSound and animate
    setTimeout(function (){
        playSound(randomChosenColour);
        $("#"+randomChosenColour).fadeIn(250).fadeOut(250).fadeIn(250);},400);
    
    //added to gamePattern
    gamePattern.push(randomChosenColour);
    
}

function playSound(name)
{
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour)
{
      $("."+currentColour).addClass("pressed");
      setTimeout(function () 
      {
        $("."+currentColour).removeClass("pressed");},
        100);
     

}

function checkAnswer(chosenColour,ind)
{
    if(userClickedPattern[ind]!=gamePattern[ind])
    {
        playSound("wrong");
        $("h1").text("Game Over!, Press any key to re-start");
        $("body").addClass("game-over");  // Add the class to body
        setTimeout(function() {
           $("body").removeClass("game-over");  // Remove the class after 200ms
              }, 200);  // 200 milliseconds delay

        start=false;
        level=1;
        coount=0;
        gamePattern=[];
        userClickedPattern=[];

    }
    else if(ind==gamePattern.length-1)
    {
        count=0;
        userClickedPattern=[];
        setTimeout(nextSequence(),1000);
    }
    else 
    {
        count+=1;
    }
}