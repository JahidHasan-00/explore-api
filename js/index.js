
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}


function displayUsers2(data){

    const list = document.querySelector('.list-items');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = (user.id + ' ' + user.name);
        list.appendChild(li);
    }
}