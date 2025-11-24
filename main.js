'use strict';

const userProfile ={
    userName: 'developer123',
    email: 'dev@example.com',
    age: 25,
    isLoggedIn: true
};
console.log(userProfile.email);

userProfile.age = 26;

console.log(userProfile.age);

userProfile['user Location'] = 'New York';
console.log(userProfile['user Location']);