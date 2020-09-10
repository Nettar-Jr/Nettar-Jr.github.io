import * as pages from './pages/index.js';


export function renderHome() {
    document.getElementById('sidebar').innerHTML =`
        <span id="login">Login</span>
        <span id="signup">SignUp</span>
    `

    const htmlRefs = document.querySelectorAll('#sidebar > span');
    const navItems = Array.from(htmlRefs);
    

 navItems.forEach((item) => {
    const notFound = () => document.getElementById('main').innerHTML =
            `<h1>404 not found</h1>`;

    item.addEventListener('click', pages[item.id] || notFound)
});
}