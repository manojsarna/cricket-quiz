

var readlineSync = require('readline-sync')

const chalk = require('chalk');

const error = chalk.bold.red;

const success = chalk.bold.green;

const warning = chalk.keyword('orange');
 

console.log(chalk.blue.bgYellow.bold(" CRICKET QUIZ GAME! \n"));

var userName = readlineSync.question("What's your name ? ")

var welcomeMessage = " Welcome! " + warning(userName) + " to "+ chalk.bold(" THE ULTIMATE CRICKET QUIZ. ") +"\n There are multiple questions , Answer them correctly to WIN!!!!! \n"

console.log(welcomeMessage)

var score = 0


function play(question,answer){

  var userAnswer = readlineSync.question(question)
  console.log("---------------")
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(success("You were Right!!"));
    score++;
    
  } else {

    console.log(error("You were Wrong!"));
    score--;
    
  }
  console.log("---------------")
  console.log(chalk.bold.green("The Correct Answer : ",answer));
  console.log("---------------")
  console.log(warning("Your Current Score : "+score))
  console.log("---------------")
 

}


var highScores = [
  {
    name:"Manoj",
    score:7
  }
]

var questionArr = [{
  question : "Against whom did India score their highest World Cup total? ",
  answer : "Bermuda"
},{
  question : "How many times have India won the World Cup? ",
  answer : "2"
},{
  question : "Who has taken the joint-most World Cup wickets for India? ",
  answer : "Zaheer Khan"
},{
  question : "At which World Cup year did India first play in their famous light blue kit? ",
  answer : "1996"
}]


for(var i=0;i<questionArr.length;i++){
  var currentQues = questionArr[i];

  play(currentQues.question,currentQues.answer)

}


var mcquestions = [
  {
   options : ["Virat Kohli","Yuvraj Singh","Sachin Tendulkar","Suresh Raina"],
  question : "Which of these batsmen bowled the most overs in the 2011 World Cup final? ",
  answer : "Sachin Tendulkar"
}, {
  options : ["2003","2007","1996","1979"],
  question : "In which World Cup did India record their lowest total, 125 against Australia? ",
  answer : "2003"
}, {
  options: ["Ashish Nehra","Anil Kumble","Zaheer Khan","Harbhajan Singh"],
  question : "Which Indian bowler has the best bowling figures in an innings, taking 6-23 against England? ",
  answer : "Ashish Nehra",
}
];

function mcQuiz(question,options,answer){
  var userAns = readlineSync.keyInSelect(options,question);
  console.log("---------------")
  if(options[userAns].toUpperCase() === answer.toUpperCase()){
    console.log(success("You were Right!!"));
    score++;

  }else{

    console.log(error("You were Wrong!"));
    score--;

  }
  console.log("---------------")
  console.log(chalk.bold.green("The Correct Answer : ",answer));
  console.log("---------------")
  console.log(warning("Your Current Score : "+score))
  console.log("---------------")
};

for(i=0;i<mcquestions.length;i++){
currentMCQues = mcquestions[i]
mcQuiz(currentMCQues.question,currentMCQues.options,currentMCQues.answer)
}



//SCORE & HIGHSCORE LIST OUTPUT 
if(score<0){
console.log(error("YAY!! You Scored : "+score))
console.log("---------------")

} else {
  console.log(success("YAY!! You Scored : "+score))
console.log("---------------")
}


for(var i = 0;i<highScores.length;i++){

  
  if(score>=highScores[i].score){
    console.log("You Answered All Questions. Your Score will be added in the list.")

    highScores.push({'name':userName,'score':score})
    
     break;
    //console.log("Highest Scorer Name : "+userName + " Highest Score : "+score)
  } else {
    console.log(success("Highest Scorer Name : "+highScores[i].name + " Highest Score : "+highScores[i].score))
  }
}
console.log("---------------")
console.log(chalk.bold("HIGHEST SCORER LIST :"))

for(var i = 0;i<highScores.length;i++){
 console.log(success("Highest Scorer Name : "+highScores[i].name + " Highest Score : "+highScores[i].score))
 console.log("--------------")
}




