var n = Math.random()*6 + 1;
randomeNumber = Math.floor(n);
if(randomeNumber===1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if(randomeNumber===2){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if(randomeNumber===3){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if(randomeNumber===4){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if(randomeNumber===5){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else if(randomeNumber===6){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}

var m = Math.random()*6 + 1;
randomeNumber1 = Math.floor(m);

if(randomeNumber1===1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if(randomeNumber1===2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if(randomeNumber1===3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if(randomeNumber1===4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if(randomeNumber1===5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else if(randomeNumber1===6){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}

var A = randomeNumber;
var B = randomeNumber1;
if(A > B){
    document.querySelector("h1").innerHTML = "🚩 Player 1 win!";
}

else if(A < B){
    document.querySelector("h1").innerHTML = "Player 2 win! 🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}