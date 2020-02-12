var userName = 'Daniel';
var userQuestion = 'Should I have ice cream everyday?';
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

if (userName !== '') {
  console.log('Hello ' + userName + '! What is your question?');
} else {
  console.log('Hello!');
};

console.log(`${userName} Q: `, userQuestion);

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain!';
    break;
  case 1:
    eightBall = 'It is decidedly so. ;)';
    break;
  case 2:
    eightBall = 'Reply hazy try again :|';
    break;
  case 3:
    eightBall = 'Cannot predict now. ~_~';
    break;
  case 4:
    eightBall = 'Do not count on it. *_*';
    break;
  case 5:
    eightBall = 'My sources say no. ~_~ `';
    break;
  case 6:
    eightBall = 'Outlook not so good. :(';
  case 7:
    eightBall = 'Signs point to yes. ^_^';
    break;
}

console.log(`The answer is:  ${eightBall}`);