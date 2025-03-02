let api = 'https://jsonplaceholder.typicode.com/users';

async function fetchAPI() {
    try {
        let usersApi = await fetch(api);
        let data = await usersApi.json();
        domContent(data);
        console.log(data[0]);
    } catch (error) {
        console.log('took too long ');

    }
}
fetchAPI();

function domContent(data) {
    let userName = document.getElementById('name');
    let userPlace = document.getElementById('place');

    userName.innerText = data[0].name;
    console.log(data);
    
    userPlace.innerText = data;

    document.getElementById('container').innerHTML = `<pre>${data}</pre>`
    // userPlace.innerText = data[0].address.city;
}





