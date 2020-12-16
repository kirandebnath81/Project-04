const chalk=require('chalk');
const log=console.log

// Giving heading with chalk
log(chalk.white.bgBlue.bold("______Welcome to Kiran's Quiz Challenge______\n"))

// taking input
var readlineSync=require('readline-sync');
var userName=readlineSync.question(chalk.cyan('May i know your name please? \n'));

log(chalk.cyan.bold('Hello '+userName+",let's play the quiz\n"));

log(chalk.bgRed.black.bold.underline('Instructions\n'))
log(chalk.magenta('1.There are two levels 5 questions on each'))
log(chalk.magenta('2.level-01:corect answer score +2,wrong answer score -1\nlevel-02:Correct answer score +2, no negative marks'))
log(chalk.magenta('1.If your score is 7 or more in level-01, you are qualified for next level'))
log(chalk.magenta('1.In MCQ based questions type serial numbers or index value'))
log(chalk.magenta('1.If you score 8 or more in level 2 ,you will win\n'))

log(chalk.keyword('black').bgYellow.bold.italic('__Level 1:Global Quiz__\n'))

var score=0

function levelOne(question,answer){

  var userAns=readlineSync.question(question)

  if(userAns.toUpperCase()===answer.toUpperCase()){
    log(chalk.green('You are right!!\n'))
    score+=2

  }else{
    log(chalk.red('You are wrong!!\n'))
    score-=1
  }
}

var questions=[

  {question: '1. Who is the main founder of apple? ',answer: 'steve jobs'},

  {question: '2. New president of US ? ',answer: 'joe bieden'},

  {question: '3. Which is the highest moutain peak in the world? ',
  answer: 'Mount everest'},

  {question: '4. Which is the largest country in the world by area? ',
  answer: 'Russia'},
  
  {question: '5. Which is the tallest building in the world? ',answer: 'Burj khalifa'},

];

for(var i=0; i<questions.length; i++){
  var currentQuestion=questions[i]

  levelOne(currentQuestion.question,currentQuestion.answer)
}


log(chalk.blue.bold('Your level 1 score is '+score))

// levelTwo
if(score>=1){
  log(chalk.whiteBright.bgMagenta('Congratulation, you have qualified for level 2\n'));
  log(chalk.cyan('Welcome to level 2 '+userName+'\n'))

  log(chalk.keyword('black').bgYellow.bold.italic('__Level 2:Indian Quiz__\n'))

  var level2Score=0
  

  ans=['Rajasthan','Maharashtra','Uttar Pradesh','Madhya pradesh']
  index = readlineSync.keyInSelect(ans, '1. Name the most populas state of india? ');
   if(ans[index]==='Uttar Pradesh'){
     log(chalk.green('You are absolutely correct'));
     level2Score+=2
   }else{
     log(chalk.red('Opps!!! you are wrong'))
     log(chalk.yellow('Correct answer is 3'));
   }

    ans=['Chandigarh','Mumbai','Chennai','Kolkata']
  index = readlineSync.keyInSelect(ans, '2.What indian city is the capital state of two states? ');
   if(ans[index]==='Chandigarh'){
     log(chalk.green('You are absolutely correct'));
     level2Score+=2
   }else{
     log(chalk.red('Opps!!! you are wrong'))
     log(chalk.yellow('Correct answer is 1'));
   }

    ans=['Uttar pradesh','Goa','Kerala','Madhya pradesh']
  index = readlineSync.keyInSelect(ans, "3. What is the India's smallest state by area? ");
   if(ans[index]==='Goa'){
     log(chalk.green('You are absolutely correct'));
     level2Score+=2
   }else{
     log(chalk.red('Opps!!! you are wrong'))
     log(chalk.yellow('Correct answer is 2'));
   }

    ans=['Mizoram','Maharashtra','Manipur','Assam']
  index = readlineSync.keyInSelect(ans, '4.In which state is the Kaziranga national Park situated ? ');
   if(ans[index]==='Assam'){
     log(chalk.green('You are absolutely correct'));
     level2Score+=2
   }else{
     log(chalk.red('Opps!!! you are wrong'))
     log(chalk.yellow('Correct answer is 4'));
   }

    ans=['A.P.J Abdul kalam','P.T Usha','Milkha singh','Sachin tendulkar']
  index = readlineSync.keyInSelect(ans, '5. Who is known as the flying sikh of India? ');
   if(ans[index]==='Milkha singh'){
     log(chalk.green('You are absolutely correct'));
     level2Score+=2
   }else{
     log(chalk.red('Opps!!! you are wrong'))
     log(chalk.yellow('Correct answer is 3'));
   }

    
 

 log(chalk.blue.bold('\nYour final score is '+level2Score))

  if(level2Score>=8){
    log(chalk.whiteBright.bgRed('\nHurrah!! you have won the Quiz competition\n'));
  log(chalk.cyan('Thank you '+userName+ ' for participating, I hope you had fun'))
  }else{
    log(chalk.red("Try Again!!\nYou need 10 to qualify for level 2\n"))
    log(chalk.cyan('Thank you '+userName+ ' for participating in the quiz, I hope you had fun'))
  }




}else{
  log(chalk.red("Try again!!\nYou need to score 7 to qualify for level 2"))

}