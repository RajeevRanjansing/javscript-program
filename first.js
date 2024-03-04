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



alert("rajeev");



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

