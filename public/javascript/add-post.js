// function for adding a post
async function addPostHandler(e) {
    e.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            body
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.new-post-form').addEventListener('submit', addPostHandler);