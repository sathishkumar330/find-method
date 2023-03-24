const employees=[
{
	name:"david carlson",
	age:30
},
{
	name:"john",
	age:30
},
{
	name:"mike sheridan",
	age:25
},
{
	name:"john",
	age:50
}
];
employees.find(function(a){
	if(a.name=="john")
	{
		console.log(a.name);
	}
});
function name(heo){
return heo.age==30;
}
console.log(employees.findIndex(name));
