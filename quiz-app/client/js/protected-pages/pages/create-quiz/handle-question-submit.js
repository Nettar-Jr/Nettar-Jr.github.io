
/**
 * This function extracts form input values into object literals and
 * ask you to choose the correct option
 * 
 * @param {MouseEvent} e
 * @param {HTMLFormElement} correctOptionForm
 */
export const handleQuestionSubmit = (e, correctOptionForm) => {
    // the default behaviour of a submit event is to refresh the page
    // after submission. we are calling prevent default to stop the event from
    // performing the default event action(in this case, a page refresh)
    e.preventDefault();
    
    
    // pull out the question form from the event Object
    const { target: questForm } = e;
    // The line below Queries all inputs of type text which is inside an element with the id of option.
    // This query return an HTMLCollection. In this case, an HTMLCollection of text input boxes
    // Note: A HTMLCollection often look like an arrays of html elements but they actually can't do
    // all the things that real arrays  do. For example you cannot call forEach function on a HTMLCollection
    const optionCollections = questForm.querySelectorAll('#options input[type="text"]');
    // Convert the collection  to an actual array
    const optionsInputs = Array.from(optionCollections);

    const options = [];

    // For each input in the array of option inputs, create an option object literal and get the
    // text value, then add the option literal to options array
    optionsInputs.forEach(input => {
        const option = { text: input.value };

        options.push(option)
    });


    // Get the first input in the form. Fortunately the first input
    // in the form is the question input
    const questionInput = questForm.querySelector('input');
    // create a text literal which contains a question property
    // whose value is the value of question input.
    // It also has a property of options which is an array of options object literals
    const question = {
        text: questionInput.value,
        options
    };
    

    // Creating a template for dropdown select
    let select = '<select>';

    
    question.options.forEach((option, index) => {
        select += `<option value="${index}">${option.text}</option>`;
    });

    select += `
        <button type="submit">Submit Question</button>
    </select>`

    

    correctOptionForm.innerHTML = `
        <div>
            <bold>Question: </bold>${question.text}</div>
        <label>
            Select The Correct Option To The Question
            <br />
            ${select}
        </label>
        <button type="submit">Submit</button>
    `;

    questForm.style.display = 'none';


    return question;
}