// global variable for id
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

// function for editing post 
async function editPostHandler(e) {
    e.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'put',
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

async function deletePostHandler(e) {
    e.preventDefault();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'delete'
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);
document.querySelector('.delete-post-btn').addEventListener('click', deletePostHandler);