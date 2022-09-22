import axios from "axios";

export const fetchUsers = () => {
    /*return new Promise((resolve)=> {
        resolve()
    }, (reject) => {

    });*/
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log(response);
        return response.data;
    }).catch(error => {
        return error;
    })
};