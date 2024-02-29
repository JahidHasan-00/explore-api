function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(data){
    const postContainer = document.getElementById('post-container');
    for(const user of data){
        console.log(user);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User:${user.id}</h4>
            <h5>Post:${user.title}</h5>
            <p>Post Description:${user.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}


// function displayPost2(info){
//     const postContainer = document.getElementById('post-container');
//     for(const user of info){
//         const postDiv = document.createElement('div');
//         postDiv.innerHTML = `
//             <h4>User: ${user.id}</h4>
//             <h5>Post: ${user.title}</h5>
//             <p>Post description: ${user.body}</p>
//         `;
//         postContainer.appendChild(postDiv);

//     }
// }