import { loginToQuiz } from './login-to-quiz.js';

export  function login() {
    const main = document.getElementById('main');
    const loginForm = `
        <div class="formStyle">
            <h1>Login</h1>
            <form id="loginForm" action="">
                <p>email: <input class="frm" name="email" type="email" value="bt@example.com"></p>
                <p>password: <input class="frm" name="password" type="password" value="benTen"></p>
                <button id="loginBtn" type="submit">login</button>
            </form>
        </div>
    `;

     //switching to login if signup successful
     main.innerHTML = loginForm;


     document.getElementById('loginBtn').addEventListener('click', loginToQuiz);
} 


