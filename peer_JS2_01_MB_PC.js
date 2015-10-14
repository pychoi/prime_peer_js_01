// Programmer = Pui
// 1

var value = 42;

// 2 
if(value >= 53) {
	value += 42;
} else {
	value -= 13;
}

// 3
value += "11";

// 4
var array = [];

for (var i = 0; i < value.length; i++) {
	array.push(value.charAt(i));
}

// 5 

array.pop();
array.shift();

// 6
var kitty = [];

for(i = array.length-1; i >= 0; i--) {
	kitty += array[i];
}

// 7
value = parseInt(value);
kitty = parseInt(kitty);

// Programmer = Mike

//8

value += kitty;

//9

if (value < 60){
	value = 14;
} else if (value == 2930){
	value = 27;
} else {
	value = 2;
}

//10

var x = 10;
while (x > 0 ) {
	value++;
	x--;
}

//11

function foo (val){
	
	val = val.toString();

	if (val.length > 1) {
		val = val.substring(1, val.length);
	}
	return val;
}

//12

value = foo(value);

//13
console.log(value);

