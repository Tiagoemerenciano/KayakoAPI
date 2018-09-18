// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const axios = require('axios');

var headers = {
    headers: {'Authorization': 'Basic dC5tYXJxdWVzQG5ldG1ha2UuY29tLmJyOlRpYWdvMTk5NiM='}
};

let URL = 'https://scriptcase-support.kayako.com/api/v1/users.json?role=agent';

function request(request_url, credential){
    axios.get(request_url, credential)
        .then(response => {
            sizeof = response.data.data.length;
            for(i = 0; i < sizeof; i++){
                console.log(response.data.data[i]);
                nome = response.data.data[i].full_name;
                document.getElementById('users').innerHTML += "<tr>"+
                "<td>"+nome+"</td>"+
                "<td>"+response.data.data[i].is_enabled+"</td>"
              "</tr>"
            }
        })
        .catch(error => {
            console.log(error);
    });
}

next = request(URL, headers);