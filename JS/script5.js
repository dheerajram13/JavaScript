//Coding challenge 

var player1_age = 23;
var player1_height = 170;
var player2_age = 21;
var player2_height = 165;
var player3_age = 30;
var player3_height = 178;

var score1 = player1_height + (5 * player1_age);
var score2 = player2_height + (5 * player2_height);
var score3 = player3_height + (5 * player3_age);


 if(score1>score2 && score1>score3){
    console.log("player1 wins the game with " + score1 + " points.");
    
}
else if(score2>score1 && score2>score3 ){
    console.log("player2 wins the game with " + score2 + " points.");
}
else if(score3>score1 && score3>score2 ){
    console.log("player3 wins the game with " + score3 + " points.");
}
else{
   console.log("This is a draw game.");
}

