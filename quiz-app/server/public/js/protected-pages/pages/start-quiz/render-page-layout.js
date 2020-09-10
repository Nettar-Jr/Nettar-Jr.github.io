export function renderPageLayout() {

    document.getElementById('main').innerHTML = `<h1>Start Quiz Page </h1>
    <div id="question">                       
    <div id="question-container"></div>
    <div id="options-container"></div>

    <button id="next">Next</button>
    </div>
`;
}