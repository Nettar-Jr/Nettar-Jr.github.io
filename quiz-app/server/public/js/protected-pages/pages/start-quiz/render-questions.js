export function renderQuestions(questions) {
    let currentIndex = 0;

    showQuestion(currentIndex++, questions);

    document.getElementById("next").addEventListener(
        'click',
        () => {
            showQuestion(currentIndex++, questions);
    });

}

function showQuestion(questionIndex, questions) {
    const question = questions[questionIndex];
    document.getElementById('question-container').innerHTML = `
        <bold id="${question._id}">${question.text}<bold>
        <hr>
    `;

    renderOptions(question.options)
}


function renderOptions(options) {
    document.getElementById("options-container").innerHTML = 
        options.reduce((acc, option) => {
            console.log('option>>>>>>>>>>>>>>>>>', option)
            return acc + `<label> ${option.text}
                <input type="radio" name="option" value="${option.text}" />
            </label><br>`;
        }, '')

}