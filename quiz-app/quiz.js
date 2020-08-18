
/* The game requirements:
--The game contains 30 questionsCopy. Each question contains 4 options. and 1 is the correct one.
--When a user opens the game, he sees a start button.
--Once the start button is clicked, the game picks one random question for the user to answer.
Once the user selects an option the user is given another question.
When a user answers 10 questionsCopy, the quiz summary is shown.
The summary shows the user's score and the correct answers to the 10 questionsCopy.
At the bottom of the page, the user should see a button that says play again. */

let randomNumber;
let correctAnswerPoints ;


const startButton = document.getElementById('startBtn');
const quizContainer = document.getElementById('quizContainer');
const questionBox = document.getElementById('quizQuestion');
const optionBox = document.getElementById('answerBtn');
const resultArea = document.getElementById('resultArea');


const questions = [ 
    {
    question:'Who is the president of Nigeria?' ,
    options: [
        {text: 'Barrack Obama', correct: false},
        {text: 'Muhammadu Buhari', correct: true},
        {text: 'Donald Trump', correct: false},
        {text: 'Goodluck Jonathan', correct: false}
    ]
},
{
    question:'Who is the president of USA?' ,
    options: [
        {text: 'Barrack Obama', correct: false},
        {text: 'Donald Trump', correct: true},
        {text: 'Muhammadu Buhari', correct: false},
        {text: 'Goodluck Jonathan', correct: false}
    ]
},
{
    question:'Who is the former president of Nigeria?' ,
    options: [
        {text: 'Barrack Obama', correct: false},
        {text: 'Muhammadu Buhari', correct: false},
        {text: 'Goodluck Jonathan', correct: true},
        {text: 'Donald Trump', correct: false}
    ]
},
{
    question:'Who is the former president of USA?' ,
    options: [
        {text: 'Muhammadu Buhari', correct: false},
        {text: 'Donald Trump', correct: false},
        {text: 'Goodluck Jonathan', correct: false},
        {text: 'Barrack Obama', correct: true}
    ]
},
{
    question:'How many full moon do we have in a year?' ,
    options: [
        {text: '13', correct: true},
        {text: '20', correct: false},
        {text: '7', correct: false},
        {text: '113', correct: false}
    ]
},
{
    question:'President Barack Obama ruled for how many years?' ,
    options: [
        {text: '8', correct: true},
        {text: '4', correct: false},
        {text: '10', correct: false},
        {text: '6', correct: false}
    ]
},
{
    question:'How many states are there in Nigeria?' ,
    options: [
        {text: '18', correct: false},
        {text: '37', correct: true},
        {text: '36', correct: false},
        {text: '20', correct: false}
    ]
},
{
    question:'What is the name of the first president of USA?' ,
    options: [
        {text: 'George Bush', correct: false},
        {text: 'Abraham Lincoln', correct: false},
        {text: 'George Washington', correct: true},
        {text: 'Bill Clinton', correct: false}
    ]
},
{
    question:'Who painted the famous Monalisa portrait?' ,
    options: [
        {text: 'Leonardo Da Vinci', correct: true},
        {text: 'Michel Edward', correct: false},
        {text: 'Bill gates', correct: false},
        {text: 'Alberto Cruse', correct: false}
    ]
},
{
    question:'The number 20 is called what?' ,
    options: [
        {text: 'A Dozen', correct: false},
        {text: 'A Score', correct: true},
        {text: 'A row', correct: false},
        {text: 'A Decade', correct: false}
    ]
},
{
    question:'Who sang the famous song HEAL THE WORLD?' ,
    options: [
        {text: 'Shawn Micheal', correct: false},
        {text: 'Micheal Jordan', correct: false},
        {text: 'Samuel L. Jackson', correct: false},
        {text: 'Micheal Jackson', correct: true}
    ]
},
{
    question:'Which of this is not a color?' ,
    options: [
        {text: 'Horse Blood', correct: false},
        {text: 'gravet', correct: true},
        {text: 'Burgundy', correct: false},
        {text: 'Maroon', correct: false}
    ]
},
{
    question:'How old is Nigeria?' ,
    options: [
        {text: '59', correct: false},
        {text: '60', correct: true},
        {text: '61', correct: false},
        {text: '62', correct: false}
    ]
},
{
    question:'Which of these is not a laptop company?' ,
    options: [
        {text: 'hp', correct: false},
        {text: 'Samsung', correct: false},
        {text: 'LG', correct: false},
        {text: 'Infinix', correct: true}
    ]
},
{
    question:'The movie 8 mile is about which musical sensation?' ,
    options: [
        {text: 'Jay Z', correct: false},
        {text: 'Eminem', correct: true},
        {text: '2-Pac', correct: false},
        {text: 'Biggy', correct: false}
    ]
},
{
    question:'How long is a decade?' ,
    options: [
        {text: '5years', correct: false},
        {text: '10years', correct: true},
        {text: '20years', correct: false},
        {text: '100years', correct: false}
    ]
},
{
    question:'The character Abu is from which Walt Disney Animation?' ,
    options: [
        {text: 'Aladdin', correct: true},
        {text: 'Thinkerbell', correct: false},
        {text: 'Snow White', correct: false},
        {text: 'Moana', correct: false}
    ]
},
{
    question:'WWE stands for?' ,
    options: [
        {text: 'Winners World of Evergreen', correct: false},
        {text: 'Waste and Waste Eradication ', correct: false},
        {text: 'World Wide Enterprise', correct: false},
        {text: 'World Wrestling Entertainment', correct: true}
    ]
},
{
    question:'Which of these would you use to cut a wire?' ,
    options: [
        {text: 'Plier', correct: false},
        {text: 'Cutter', correct: true},
        {text: 'Hammer', correct: false},
        {text: 'chisel', correct: false}
    ]
},
{
    question:'which of these is not found in a first aid box?' ,
    options: [
        {text: 'Injection', correct: true},
        {text: 'Iodine', correct: false},
        {text: 'Plater', correct: false},
        {text: 'Wool', correct: false}
    ]
},
{
    question:'How long is a Millennium?' ,
    options: [
        {text: '10Years', correct: false},
        {text: '100Years', correct: true},
        {text: '1000Years', correct: false},
        {text: '1Years', correct: false}
    ]
},
{
    question:'What\'s the square root of 255?' ,
    options: [
        {text: '20', correct: false},
        {text: '15', correct: true},
        {text: '27', correct: false},
        {text: '22', correct: false}
    ]
},
{
    question:'Which of these actors starred in POLICE STORY?' ,
    options: [
        {text: 'Bruce Lee', correct: false},
        {text: 'John Cena', correct: false},
        {text: 'Jackie Chan', correct: true},
        {text: 'Samuel L. Jackson', correct: false}
    ]
},
{
    question:'When did Nigeria became a republic?' ,
    options: [
        {text: '1960', correct: false},
        {text: '1963', correct: true},
        {text: '1999', correct: false},
        {text: '1950', correct: false}
    ]
},
{
    question:'Which of those country is know for their gold?' ,
    options: [
        {text: 'Nigeria', correct: false},
        {text: 'China', correct: false},
        {text: 'India', correct: true},
        {text: 'USA', correct: false}
    ]
},
{
    question:'Who sang the song Titanium?' ,
    options: [
        {text: 'Sia', correct: true},
        {text: 'Mia', correct: false},
        {text: 'Lya', correct: false},
        {text: 'Maya', correct: false}
    ]
},
{
    question:'How old is the United states of America?' ,
    options: [
        {text: '212', correct: false},
        {text: '144', correct: false},
        {text: '122', correct: false},
        {text: '244', correct: true}
    ]
},
{
    question:'Which of these gift was not given to Jesus by the three wise men?' ,
    options: [
        {text: 'Gold', correct: false},
        {text: 'Priesthood', correct: true},
        {text: 'Myrrh', correct: false},
        {text: 'Frankincense', correct: false}
    ]
},
{
    question:'Which of these does not belong to this group?' ,
    options: [
        {text: 'Keyboard', correct: true},
        {text: 'MS Word', correct: false},
        {text: 'PhotoShop', correct: false},
        {text: 'Mavis Beacon', correct: false}
    ]
},
{
    question:'Which of these is not Paper Currency?' ,
    options: [
        {text: 'Dollar', correct: false},
        {text: 'Bit Coin', correct: true},
        {text: 'Yen', correct: false},
        {text: 'Kuwait', correct: false}
    ]
}
]

let questionsCopy;

startButton.addEventListener('click', startQuiz );
function startQuiz() {
    questionsCopy = [...questions];
    correctAnswerPoints = 0;
    startButton.classList.add('hide');
    quizContainer.classList.remove('hide');
    resultArea.classList.add('hide');

    getRandomQuestion();
}

function getRandomQuestion() {
    //generate a random number between the range of the total questions
    randomNumber = Math.floor(Math.random() * questionsCopy.length);
    console.log(randomNumber);
    showQuestion(randomNumber);

    let optionButtons = document.getElementsByClassName('btn-option');
    Array.from(optionButtons).forEach(button => {
        button.addEventListener('click', (event) => {
            const clickTarget = event.target;
            const selectedOptionText = clickTarget.innerText;
            const selectedOption = questionsCopy[randomNumber].options.find(option => {
                return option.text === selectedOptionText;
            });

            //change option color to green if correct
            if(selectedOption.correct)  {
                clickTarget.classList.add('correct');
               let percent = correctAnswerPoints += 10
            }
            
            //change option color to red if wrong
            else {
               clickTarget.classList.add('wrong')
            }
            //Just a timer to enable you see if option selected 
            questionsCopy.splice(randomNumber, 1);

            setTimeout(nextQuestion, 500);
            
         
        })
    })

}

function showQuestion(question){
    if (questionsCopy.length <= 20){

        ShowResult()
    }
    else {
        questionBox.innerText = questionsCopy[randomNumber].question;
        optionBox.innerHTML = questionsCopy[randomNumber].options.reduce((accumulator, currentValue) => {
                return `${accumulator} <button class="btn-option btn" >${currentValue.text}</button>`;
        },'');
    }

}


function nextQuestion(){
    getRandomQuestion();
}

function ShowResult(){

    document.querySelector('span').innerHTML = correctAnswerPoints;
    quizContainer.classList.add('hide');
    resultArea.classList.remove('hide');
    startButton.innerText = "PLay Again";
    startButton.classList.remove('hide');
}