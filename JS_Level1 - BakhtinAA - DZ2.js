"use strict";
var a = 1, b = 1, c, d, x;

c = ++a; alert("a=1, b=1, c=++a -> c=" + c); // 2 - "prefix increment a, a=2 before c=a and a=2 after"
d = b++; alert("a=1, b=1, d=b++ -> d=" + d); // 1 - "postfix increment b, b=1 before d=b and b=2 after"

c = (2+ ++a); alert("a=2, b=2, c=2+++a -> c=" + c); // 5 - "a=3 before c=2+a and a=3 after"
d = (2+ b++); alert("a=2, b=2, d=2+b++ -> d=" + d); // 4 - "b=2 before d=2+b and b=3 after"

alert("a=" + a); // 3
alert("b=" + b); // 3



a = 2;
x = 1 + (a *= 2); // a=a*2 -> a=4 -> x=5



// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
var i, y, z;

for ( i = 1; i <= 100 ; i++ )
{
	y = i % 3;
	z = i % 5;
	if ( y == 0 )
	{
		if ( z == 0 )
		{
			console.log("FizzBuzz");
		}
		else
		{
			console.log("Fizz");
		}
	}
	else if ( z == 0 )
	{
		console.log("Buzz");
	}
	else
	{
		console.log(i);
	}
}