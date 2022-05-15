// function for sign up
async function signupFormHandler(e) {
    e.preventDefault();

    // save input values
    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if(username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
};

// event listener for signup button
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);