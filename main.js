// 1)

let userData = {
    name: "John"
};
userData.age = prompt('Введите возраст');
console.log(userData);


// 2)

let userData = {
    name: "John"
};
userData.underage = true;
confirm(userData.underage);
console.log(userData);


// 3)

let userData = {
    name: "John"
};
let key = prompt('Введите ключ:', 'name');
console.log(userData);
delete userData.name;
console.log(userData);


// 4) и 5)

let userData = {
    name: "John",
    'address': ' '
};
userData.address = new Object();
userData.address.country = 'Germany';
userData.address.city = 'Karlruhe';
userData.address.street = 'Strasse 56';
console.log(userData);

userData.address.country['Germany'];
console.log(userData.address.country);
console.log(userData.address.city);
let checkKey = userData.address.hasOwnProperty("street");
console.log(checkKey);




