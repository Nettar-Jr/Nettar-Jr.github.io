
export function logout() {
    localStorage.removeItem('userId');
    window.location.reload();
}