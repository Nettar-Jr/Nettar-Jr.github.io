import { createQuiz, startQuiz } from '../../pages/index.js';



//send question to server
export const sendQuestionToServer = (e, question) => {
    e.preventDefault();
    const { target: correctOptionForm } = e;

   const correctOptionIndex =  correctOptionForm.querySelector('select').value;

   question.options[correctOptionIndex].correct = true;


    console.log('this is what we are submitting to the backend', question);

    
    fetch('/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question),
    })
    .then(response => response.json())
    .then(jsonResponse => {
        document.getElementById('main').innerHTML = `
            <h4>${jsonResponse.message}</h4>
            <button id="btn-start-quiz">Start Quiz</button>
            <button id="btn-add-more">Add More</button>
        `;

        document.getElementById("btn-start-quiz").addEventListener('click', () => {
            startQuiz();
        });

        document.getElementById("btn-add-more").addEventListener('click', () => {
            createQuiz();
        });
    });
}