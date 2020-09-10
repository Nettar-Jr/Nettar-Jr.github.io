import { login } from '../login/index.js';

export function signup() {
    const main = document.getElementById('main');

    main.innerHTML = `
    <form id="userForm" >
         <div class="signupForm formStyle">
             <h1>sign up</h1>
             <form id="signup">
                 <p>First Name: <input class="frm" name="firstName" type="text" value="Ben"></p>
                 <p>Last Name: <input class="frm" name="lastName" type="text" value="Ten"></p>
                 <p>email: <input class="frm" type="email" name="email" value="bt@example.com"></p>
                 <p>password: <input class="frm" type="password" name="password" value="benTen"></p>
                 <button id="signupBtn" type="submit">Signup</button>
                 <div></div>
             </form>
         </div>
     </form>
    `;

       //query all input with type test into a signUp variable
    //and convert to an HTML collection that looks array like 
    const signUP = document.querySelectorAll('#userForm input');
    const signupInputs = Array.from(signUP);


    const signupBtn = document.getElementById('signupBtn');

    //an event listener that grabs the value of 
    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const userToCreate =  {};

        signupInputs.forEach(input => {
            userToCreate[input.name] = input.value;
        });

        console.log(userToCreate);
        sendUserToServer(userToCreate);

    });
}


//add user to server on submit
function sendUserToServer (user) {
    
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then((res) => {
        if(res.success === false) {
            const errorDiv = document.createElement('div');
            errorDiv.innerText = 'User already exists';
    
            document.getElementById('userForm').prepend(errorDiv)
        } else {
            console.log('response>>>>>>>>>>>>>>>', res)
            login();
        }
    })
    .catch(() => {
        const errorDiv = document.createElement('div');
        errorDiv.innerText = 'User already exists';

        document.getElementById('#').prepend(errorDiv)
    })

    
}