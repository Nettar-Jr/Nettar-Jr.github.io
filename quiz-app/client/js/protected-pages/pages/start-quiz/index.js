import { renderPageLayout } from './render-page-layout.js'
import { renderQuestions } from './render-questions.js'

export function startQuiz() {
    fetch('/questions')
    .then((response) => {
        return response.json()
    })
    .then(questions => {
        console.log('question>>>>>>>>>>>>', questions)
        renderPageLayout()
        renderQuestions(questions)
    })
    .catch((error) => {
        console.log('error>>>>>>>>', error)
    });
}

