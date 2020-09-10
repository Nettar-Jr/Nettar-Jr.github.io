import { handleQuestionSubmit } from './handle-question-submit.js';
import { sendQuestionToServer } from './send-question-to-server.js';

export function createQuiz() {

        // create the form
        const main = document.getElementById('main');

        main.innerHTML =   `
            <h1>Create Quiz Page</h1>
            <form id="questionForm"></form>

            <form id="correctOption"></form>
        `;

        // we are getting reference to the question form here
        const questForm = main.querySelector('#questionForm');
        // we are getting reference to the answer form here
        const correctOptionForm = main.querySelector('#correctOption');

        // questions and question options fields into the question form
        questForm.innerHTML = `
            <label>Q:<br>
            <input type="text"><br>
            </label><br>
            <div id="options">
                <label>
                    Option 1:
                    <br />
                    <input type="text" />
                </label> <br>
                <label>
                    Option 2:
                    <br />
                    <input type="text" >
                </label> <br>
                <label>
                    Option 3:
                    <br />
                    <input type="text" >
                </label> <br>
                <label>
                    Option 4:
                    <br />
                    <input type="text">
                </label>
                <br>
            </div>
            <button  type="submit">Choose Correct Answer</button>
        `;

        let question;

        // we are listening to the submit event on the question form
        // and calling a function to handle the submission. This function
        // happens to extract form input values into object literals and
        // ask you to choose the correct option
        questForm.addEventListener('submit', (e) => {
           question = handleQuestionSubmit(e, correctOptionForm)
            
        });

        correctOptionForm.addEventListener('submit', e => sendQuestionToServer(e, question))
}