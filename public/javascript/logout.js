// function for logout
async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// event listener for logout button
document.querySelector('#logout').addEventListener('click', logout);