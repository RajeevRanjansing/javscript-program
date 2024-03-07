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


//if-else loop
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


//else-if loop
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


//Ternery operator
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


//do while loop
let i=5;
do{
    console.log("Rajeev Singh");
    i++;
}
while(i<=10);

//for of loop
let a="RAJEEVSINGH";
for(let i of a)
{
    console.log("i= ",i);
}

let x="rajeev";
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


let gamenum=10;

let usernum=prompt("Guess the number");
{
    console.log(usernum);
}
if(gamenum==usernum)
{
    console.log("correct");
}
else{
    console.log("SORRY!Try next time");
}

let gamenum=14;
let usernum=prompt("Guess the number");
while(usernum !=gamenum)
{
    usernum=prompt("you entered wrong number, Try again");
}
console.log("congratulation! you entered the right number");

let gamenum=25;
let usernum=prompt("Guess the number");
while(usernum != gamenum)
{
    usernum=prompt("wrong choice! Try again");
}
console.log("congratulation");

let a="Rajeev singh";
{
console.log(a.length);
}

let b="rishuraj";
{
    console.log(b[5]);
}

let c=`my name is rajeev singh`;
{
    console.log(c);
    console.log(typeof c);
}


let object={
        item:"pen",
        price:10,
};
console.log("item is ",object);
a="Rajeevkumarsingh";
{
    console.log(a.length);
}

let stude={
    name:"rajeev",
    age:15,
    cgpa:8,
};
for(let key in stude)
{
console.log("key= ",key,  "value= ",stude[key]);
}

let family={
    name:"vinaykumarsingh",
    age:52,
    profession:"Businessman",
    idea:"mastermind",
};
for(let i in family)
{
    console.log("i=",i,       "value=",family[i]);
    console.log(typeof family);
    console.log(typeof name);
    
}

console.log("Rajeev\n\nSingh");
let b="Rajeev\n\nSingh";
console.log(b.length);
console.log("Rajeev\tSingh");
let a="Rajeev\tSingh";
console.log(a.length);


let c="rajeevsingh";
console.log(c.length);
console.log(c.toUpperCase());
console.log(c.toLowerCase());


let g="      Rajeev   singh        ";
console.log(g.trim());
console.log(g.toUpperCase());
console.log(g.toLowerCase());


let i="rajeevsingh";
console.log(i.slice(0,3));

let j="Rahulsingh";
console.log(j.slice(0,5));

let k="BabuRao";
console.log(k.slice(0,6));

 a="rajeev";
 b="singh";
 s=a.concat(b);
console.log(s);

let c="Aman";
let d="singh";
console.log(c.concat(d));

console.log(d.concat(c));

let e="koi";
let f="Dukan";
console.log(e+f);
console.log(f+e);

console.log("I am buying from" + e + f);

let e="Hello";
let s=e.replace("H","y");
console.log(s);

let t=e.replace("lo","p");
console.log(t);

let u="Hellololo";
let m=u.replaceAll("lo","p");
console.log(m);

let n="rajeev";
console.log(n.replace("r","s"));
console.log(n.replaceAll("e","i"));

let m="rajeev";
console.log(m.charAt(2));
console.log(m.charAt(5));

let y="rajeev";
console.log(y.toUpperCase());
console.log(y.replace("v","s"));
console.log(y.charAt(5));
console.log(y.trim());

let username=prompt("Enter your full name");
let s="@"+ username + username.length;
console.log(s);


let username="rajeevkumar";
let s=prompt("Guess the name");
while(s != username)
{
    s=prompt("wrong choice! Try again")
}
console.log("congratulation");


let marks=[20,23,25,28,29];
console.log(marks);


let name=["rajeev","sanjeev","shashi","shubham"];
console.log(name);
console.log(name.length);

let student=[12,15,18,20,25];
console.log(student);


let name=["rajeev", "shashi" ,"tunu","munnu"];
for(let i=0;i< name.length;i++)
{
    console.log(name[i]);
}

let  cities=["pune","mumbai","up","mp"];
for(let city of cities)
{
    console.log(city);
}

let  cities=["pune","mumbai","up","mp"];
for(let city of cities)
{
    console.log(city.toUpperCase());
}


