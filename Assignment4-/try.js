const sth = document.getElementById('title');
console.log(sth);

const list = document.getElementsByTagName('li');
console.log(list);
console.log(list[3]);

const get_class = document.getElementsByClassName('pet');
console.log(get_class);
const class_length = get_class.length;//???this only works when i type it inside console

const select = document.querySelector('li#food');//querySelector makes use of CSS Selectors(tags, classes, ids in the same format), but don't include the white spaces
console.log(select); 

const getElement = document.getElementById('text');
console.log(getElement);

//creating elements
const myElement = document.createElement('p');
console.log(myElement);

const myText = document.createTextNode(`Welcome Home!`);
console.log(myText);

document.body.appendChild(myText);