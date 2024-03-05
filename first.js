let mode;
let color;
if(mode==="dark")
{
    color="black";
}
if(mode==="light")
{
    color="white";
}
console.log(color);




let age=26;
if(age>25)
{
    console.log("vote");
}
else{
    console.log("you cannot vote");
}




let a=20;
if(a%2==0)
{
    console.log("even number");
}
else{
    console.log("odd number")
}




let c=50;
if(c>50)
{
    console.log("c is more than 50");
}
else{
console.log("c is less than or equal to 50");
}




let num=29;
if(num%2===0)
{
    console.log(num,"is even")
}
else{
    console.log(num,"is odd");
}



let ag=65;
if(ag>60)
{
    console.log("you are old");
    console.log("you are able to everything");
}
else if(a<18){
    console.log("you are teenage");
    console.log("you are unable to do anything");
}
else{
    console.log("you are senior");
    console.log("you are able to do anything");
}



let g=25;
let result;
result= a>=18? "adult" : "not adult";
console.log(result);



let h=27;
let s;
s=h>=25?"adult":"not adult";
console.log(s);



let m=prompt("enter a number");
if(m%3===0)
{
    console.log(m,"is divisible by 5");
}
else{
    console.log(m,"is NOT divisible by 5");
}


let n=prompt("rajeev singh");
console.log(n);


let t=prompt("enter a number");
if(t>=80 && t<=100)
{
    console.log("You got A grade");
}
else if(t<89 && t>=70)
{
    console.log("You got B grade");
}
else if(t<=69 && t>=60)
{
    console.log("You got C grade");
}
else if(t>=59 && t<=50)
{
    console.log("You got D grade");
}
else 
{
    console.log("You are Fail");
}


let i;
for(i=1;i<=5;i++)
{
    console.log("RAJEEV SINGH");
}

for(i=1;i<=10;i++)
{
    console.log("i= ",i);
}



let i=1;
while(i<=10)
{
    console.log("Rajeev Singh");
    i++;
}
let i=5;
do{
    console.log("Rajeev Singh");
    i++;
}
while(i<=10);


let a="RAJEEVSINGH";
for(let i of a)
{
    console.log("i= ",i);
}

let x="Gautam";
for(let i of x)
{
    console.log("i= ",i);
}

let q=prompt("enter a number");
if(q>26)
{
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

alert("fill all the details");

let s=prompt("enter a number");
if(s%2===0)
{
    console.log(s,"is even");
}
else{
    console.log(s,"is odd");
}

let s=prompt("enter your marks");
if(s>90 && s<100)
{
    console.log("10 CGPA");
}
else if(s>80 && s<=90)
{
    console.log("9 CGPA");
}
else if(s>70 && s<=80)
console.log("8 CGPA");
else
console.log(s,"you are fail");



for(i=1;i<=10;i++)
{
    console.log("Rajeev singh");
}

let s="Rajeev";
let size=0;
for(let i of s)
{
    console.log("i= ",i);
    size++;
}
console.log("size of string= ",size);

let t="rajeev singh";
let length=0;
for(let i of t)
{
    console.log("i= ",i);
length++;
}
console.log("length of the string ",length);


let student={
    name:"Rajeev",
    age:20,
    cgpa:7.5,
    ispass:true,
};
for(let key in student)
{
    console.log("key= ",key,  "value= ",student[key]);
}
