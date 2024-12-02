const userBlock = document.getElementById('user-block');
const username = sessionStorage.getItem('username');
if (username) {
    userBlock.innerHTML = `Signed in as <strong>${username}</strong>`;
}
