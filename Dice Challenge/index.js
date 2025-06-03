// alert("working");
var randomNumber1=Math.floor(Math.random()*6)+1;
var address="./images/dice"+randomNumber1+".png";


document.querySelector(".dice .img1").setAttribute("src",address);

var randomNumber2=Math.floor(Math.random()*6)+1;
var address2="./images/dice"+randomNumber2+".png";

document.querySelector(".dice .img2").setAttribute("src",address2);

if(randomNumber1>randomNumber2)
{
    document.querySelector(".container h1").innerHTML="🚩Player 1 wins!";
}
if(randomNumber1<randomNumber2)
    {
        document.querySelector(".container h1").innerHTML="Player 2 wins!🚩";
    }