var user;       //human
var wizard;     //computer
var arrUser = []; //user points
var arrWiz = []; //computer points
var points= "X";

//function called when human click img
function round (user){//user is user input
var showUserOption=document.getElementById("option").value=user; //show the user pick in a <p> from the input
console.log(user);//test
document.getElementById("showUserOption").innerHTML=showUserOption;//<p> to show the pick

var imgNodeRock_U = document.getElementById("a");//grab the input to change the view when selected
var imgNodePaper_U = document.getElementById("b");//grab the input to change the view when selected
var imgNodeScissors_U = document.getElementById("c");//grab the input to change the view when selected

   if(showUserOption==="rock"){//those unselected with low opacity
       imgNodeRock_U.style.opacity="1";
       imgNodePaper_U.style.opacity="0.2";
       imgNodeScissors_U.style.opacity="0.2";
 }else if(showUserOption==="paper"){
      imgNodeRock_U.style.opacity="0.2";
       imgNodePaper_U.style.opacity="1";
       imgNodeScissors_U.style.opacity="0.2";
}      
else{imgNodeRock_U.style.opacity="0.2";
       imgNodePaper_U.style.opacity="0.2";
       imgNodeScissors_U.style.opacity="1";
 }


var randomInt=getRndInteger(1,3);//random value for "computer" pick
document.getElementById("showWizardOption").innerHTML=wizardSays(randomInt);
console.log(wizard);//test


if( user === wizard){  //conditional to know who wins
    //document.getElementById("result").value="tie";//old display
    document.getElementById("display").innerHTML="tie!";//display result
}else if((user === "paper" && wizard === "rock") || (user === "rock" && wizard === "scissors") || (user === "scissors" && wizard === "paper")){
    arrUser.push("you scored");//push result into user points array
    console.log(arrUser);//test
    document.getElementById("display").innerHTML="you scored";//display result
    document.getElementById("display2").innerHTML="";//clean second line of display
    //document.getElementById("result").value="you scored";//old display
    pointsH();//see function below - show points got by human
    
}else{
    //document.getElementById("result").value="wizard scored";//old display
    document.getElementById("display").innerHTML="wizard scored";//display result
    document.getElementById("display2").innerHTML="";//clean second line of display
    arrWiz.push("wizard scored");//push result into computer points array
    pointsW();//see function below - show points got by computer
    console.log(arrWiz);//test
}

//Conditional to know final results

if(arrWiz.length===3){ 
    document.getElementById("display").innerHTML="wizard scored, game over!";//display computer won
    document.getElementById("display2").innerHTML="";//clean second line of display
    //document.getElementById("result").value="wizard scored, game over!";//old display
    var element = document.getElementById("startAgain");//grab restart button
    element.classList.remove("hiddenButton");//no longer hidden
    element.classList.add("showButton");//show button
  
}else if(arrUser.length===3){
    document.getElementById("display").innerHTML="you scored again: you won!";
    document.getElementById("display2").innerHTML="";
    //document.getElementById("result").value="you scored again: you won!";
     var element = document.getElementById("startAgain");
    element.classList.remove("hiddenButton");
    element.classList.add("showButton");
}
return;
}//closing function round


//function to add circles (points) to each player
//H=human W=wizard or computer
function pointsH(){
    var newElemHum=document.createElement("p");
    var newNodeHum = document.createTextNode(points);
    newElemHum.appendChild(newNodeHum);
    var positionHum=document.getElementById("human_points");
    positionHum.appendChild(newElemHum);
}
function pointsW(){
    var newElemWiz=document.createElement("p");
    var newNodeWiz = document.createTextNode(points);
    newElemWiz.appendChild(newNodeWiz);
    var positionWiz=document.getElementById("wizard_points");
    positionWiz.appendChild(newElemWiz);
}

//function to change style by random number(wizard option)
function wizardSays(randomInt){
var imgNodeRock_W = document.getElementById("rock_W");//grab the img
var imgNodePaper_W = document.getElementById("paper_W");
var imgNodeScissors_W = document.getElementById("scissors_W");

     if(randomInt === 3){  //change the opacity according to random number
    imgNodeRock_W.style.opacity="0.2";
    imgNodePaper_W.style.opacity="0.2";
    imgNodeScissors_W.style.opacity="1";
    return wizard = "scissors";
    }else if(randomInt === 2){
    imgNodePaper_W.style.opacity="1";
    imgNodeRock_W.style.opacity="0.2";
    imgNodeScissors_W.style.opacity="0.2";
    return wizard = "paper";
    }else{
    imgNodePaper_W.style.opacity="0.2";
    imgNodeScissors_W.style.opacity="0.2";
     imgNodeRock_W.style.opacity="1";
    return wizard="rock";
    }
}//closing f wizardSays


//function to get random integer that will be wizard pick
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;//returns a random number between min and max (both included
}//closing f getRndInteger



//function to clear display, selection (picks), and arrays
function startOver(){
arrUser=[];//clear user points array
arrWiz=[]; //clear wizard points array

document.getElementById("wizard_points").innerHTML=" ";//clear wizard points
document.getElementById("human_points").innerHTML=" ";//clear human points
document.getElementById("display").innerHTML="Go again! 3 to win!";//invite to start again
//document.getElementById("result").value=" ";//old display
document.getElementById("showUserOption").innerHTML=" "; //clean user pick display
document.getElementById("showWizardOption").innerHTML=" ";//clean wizard pick display
document.getElementById("rock_U").checked=false;//uncheck human pick
document.getElementById("paper_U").checked=false;//uncheck human pick
document.getElementById("scissors_U").checked=false;//uncheck human pick

var element = document.getElementById("startAgain");//hide start over button
element.classList.add("hiddenButton");
element.classList.remove("showButton");
    

var imgNodeRock_W = document.getElementById("rock_W");//change the opacity to 1 to all img
var imgNodePaper_W = document.getElementById("paper_W");
var imgNodeScissors_W = document.getElementById("scissors_W");
imgNodeRock_W.style.opacity="1";
imgNodePaper_W.style.opacity="1";
imgNodeScissors_W.style.opacity="1";
    
var imgNodeRock_U = document.getElementById("a");//change the opacity to 1 to all img
var imgNodePaper_U = document.getElementById("b");
var imgNodeScissors_U = document.getElementById("c");
    
imgNodeRock_U.style.opacity="1";
imgNodePaper_U.style.opacity="1";
imgNodeScissors_U.style.opacity="1";
}

