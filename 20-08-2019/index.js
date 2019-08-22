//Variables in ES6
//var keyword - variable can be accessed anywhere inside the function outside of the initial block where it is defined
// function count(){
// 	var num = 6;
// 	while( num < 10){
// 		document.write(num + '<br>');
// 		num++;
// 	}
// 	document.write(num + '<br><br>');//num is accessible here
// }
// count();

//document.write(num);//num is not accessible cos it is outside it's defined function, uncomment and check


//let - variable can only be accessed within block and can be reassigned 
// function count2(){
// 	let num2 = 9;
// 	while( num2 < 10){
// 		console.log(num2);//num2 is accessible here
// 		num2 = 7;
// 		console.log(num2);//num2 is accessible here
// 	}
// }
 //count2();
// console.log(num2);//num2 not accessible here


//const - variable can only be accessed within block but cannot be reassigned
// function count3(){
// 	const num3 = 6;
// 	while( num3 < 10){
// 		document.write(num3 + '<br>');
// 		num3 = 7;//cannot be reassigned because of const property
// 	}
// 	//document.write(num + '<br><br>');//num3 is not accessible here
// }
// count3();


//this keyword
const person = {
	name: `Odaawa`,
	hello(){
		console.log(person);
	}
};

person.hello();

const say = person.hello;
say();

const person2 = {
	name: `Odaawa`,
	hello(){
		console.log(this);
		console.log(this.name);//can be used only within specified object block
	}
};

person2.hello();

const talk = person2.hello;//this therefore renders this undefined
talk();//refers to it as window file

//binding this - attaches object to function so this becomes defined in it
const talk2 = person2.hello.bind(person2);
talk2();//function can then be called as a standalone because object is attached to it



//Arrow functions - for cleaner writing of code
/*  function keyword not needed
	arrow sign => comes between parameters and body
	if there's a single parameter parentheses may be excluded
	empty parentheses for functions without parameters
	for a single line body with just return:
	return keyword, {} , and ; may be omitted
*/

const example1 = function(){
	return `Hello World!`;
}
console.log(example1());
//is equivalent to
const example_1 = () => `Hello World!`;
console.log(example_1());


const example2 = function(number){
	return number + 2;
}
console.log(example2(3));
//is equivalent to
const example_2 = number => number + 2;
console.log(example_2(3));