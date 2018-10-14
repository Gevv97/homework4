
(2)
function triangleStars(n)
{
	let a=0;
	while(a<n)
	{

		let b="";
		let c =n-a;
		let f=1;
		a++;
	
		while(f<=c)
		{
			b+="*";
			f++;
		}
		console.log(b);
		a++;
	}
	
}



(3)
function multiTosingle(a){
debugger;
let b=[];
let c=0;
while(c<a.length){
	let d=0;
	while(d<a[c].length){
		b.push(a[c][d]);
		d++;

	}
}
return b;
}



(4)

function findMinMax(a,b){
if(b==true)
{
return Math.max.apply(null,a)
}
else{
return Math.min.apply(null,a)
}
}


(5)
function forEach(a,b){
let c=0;
while(c<a.length){
b(a[c]);
c++;
}
}
forEach([1,2,3,4,5,6],function(all){
console.log(all);
});


(6)
function sum(a){
let b=0;
let c=0;
while(b<a.length){
c+=a[b];
b=b+1;
}
return c;
}
console.log(sum([2,3,4,1,10])); 

(7)
function reverse(a){
let b=0;
let c="";
while(b<a.length){
c+=a[a.length-1-b];
b++;
}return c;
}

console.log(reverse("Abu La La Mahari")); */

/*

(8)
function checkerboard(n)
{ debugger;
	let a=0;
	while(a<n)
	{ 
		if(a%2==0)
		{
			let b="";
			let c=0;

        
		while(c<n)
		{
			b=b+"* ";
			c=c+1;

	    }
	    console.log(b);

	}   
	if(a%2==1)
	{
		let b="";
		let c=0;
		while(c<n){
			b=b+" *";
			c++;

		}
		console.log(b);
	}
 
a++;
     }
}
console.log(checkerboard(5));*/