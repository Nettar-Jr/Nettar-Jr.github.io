import * as pages from './pages/index.js'

export function renderLoggedInView() {

    document.getElementById('sidebar').innerHTML  = `
        <span id="startQuiz"> Start Quiz </span>
        <span id="dashboard">Dashboard</span>
        <span id="createQuiz"> Create Quiz </span>
        <span id="highScore"> HighScore </span>
        <span id="logout">Logout</span>
        <span id="gotoFacebook">Go To Facebook</span>
    `; 

    pages.dashboard();

    const htmlRefs = document.querySelectorAll('#sidebar > span');
    const navItems = Array.from(htmlRefs);

    
    navItems.forEach((item) => {
        const notFound = () => document.getElementById('main').innerHTML =
                `<h1>404 not found</h1>`;

        item.addEventListener('click', pages[item.id] || notFound)
    });
}
