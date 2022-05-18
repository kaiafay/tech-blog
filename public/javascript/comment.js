// function for commenting 
async function commentFormHanlder(e) {
    e.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    // extract post_id from window object
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    // do not allow user to submit an empty string
    if(comment_text) {
        const response = await fetch('/api/comment', {
            method: 'post',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHanlder);