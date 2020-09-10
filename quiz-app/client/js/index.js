
import { renderHome } from './public-pages/index.js'
import { renderLoggedInView } from './protected-pages/index.js';




const userId = localStorage.getItem('userId');
let loggedIn = false;

if(userId === null || userId === undefined || userId === '') {
    loggedIn = false;
} else {
    loggedIn = true;
}

if (loggedIn) {
    console.log('logged in >>>>>>>>');
    renderLoggedInView();
} else {
    console.log('not logged in ')
    renderHome();
}

