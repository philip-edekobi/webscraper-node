import axios from 'axios';

export async function getResults(selector, url){
    const response = await axios.post('/api/v1/', {
        selector,
        url
    });

    return response.data;
}

export function displayResults(results){
    const resNode = document.getElementById('result-content');

    for(let result of results){
        let newNode = document.createElement('div');
        let br = document.createElement('br');

        newNode.innerHTML = result.toString();

        resNode.appendChild(newNode);
        resNode.appendChild(br);
    }
}