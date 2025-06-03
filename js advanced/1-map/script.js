'use strict';

const users = [
    {id : 1, name : 'Вася'},
    {id : 2, name : 'Петя'},
    {id : 1, name : 'Вася'}
];

let filteredUsers = [];
users.forEach(user => {
    if(!filteredUsers.find(item => item.id === user.id)){
        filteredUsers.push(user)
    }
});

filteredUsers = new Set(filteredUsers);