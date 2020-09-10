export function loginToQuiz (e){
    e.preventDefault();

    const logIn = document.querySelectorAll('#loginForm input');
    const loginInput = Array.from(logIn);

    let LoginInputObject = {};

    loginInput.forEach(input => {
        LoginInputObject[input.name] = input.value;
    });
    console.log('user found in database >>>>>>>>>>>>>>', LoginInputObject);
    
    checkServerForUser(LoginInputObject)
        .then((user) => {
            localStorage.setItem('userId', user._id);

            window.location.reload();
        })
        .catch(() => {
            const errorDiv = document.createElement('div');
            errorDiv.innerText = 'wrong username or password';
    
            document.getElementById('loginForm').prepend(errorDiv)
        })
}

function checkServerForUser(user) {
    return  fetch('/login', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json());
}