const u_name = document.case.name.value;
var u_day;
const text = `So a it turns out ${u_name} was born on this wonderful day(${u_day}) and has made a mark on this earth!`;
const date = document.case.date.value;
const year = document.case.year.value;
const month = document.case.month.value;

const button = document.getElementById('do');

button.onclick = function(){
	let today = new Date(`${date} ${month} ${year}`);
	// const sth = today.toString();
	// document.write(sth);
    var u_day = today.getDay();
   var u_day = u_day.toString();
document.getElementById('space').innerHTML = text;
}

function clear(){
	document.querySelector('space').innerHTML = "";
}

