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

let marks = [85,97,44,37,76,60];
let sum=0;
for(i of marks)
{
sum=sum+i;
}
let avg=sum/marks.length;
console.log(`Average marks = ${avg}`);

let marks=[10,15,20,25,30];
let sum=0;
for(i of marks)
{
   sum=sum+i;
}
let avg=sum/marks.length;
console.log(avg);


let price=[250,645,300,900,50];
for(i=0;i<5;i++)
{
    
    offer=price[i]/10;
    newprice=price[i]-offer;
    console.log(newprice);
}


let item=[250,645,300,900,50];
for(i=0;i<5;i++)
{
    //console.log(item[i]);
    offer=item[i]/10;
    newprice=item[i]-offer;
    console.log(newprice);
}

let item=["tomato","potato","onion","cabbage"];
item.push("cauliflower","paneer","butter");
console.log(item);


let item=["tomato","potato","onion","cabbage","paneer","butter"];
item.pop();
console.log(item);
console.log(item.toString());


let marks=[10,20,30,40,50];
s=console.log(marks.pop());
console.log(marks);


let marks=[10,20,30,40,50];
console.log(marks.push(60));
console.log(marks);

let s1="rajeev";
let s2="singh";
console.log(s1.concat(s2));


let s1=["rajeev","shashi","rishu"];
let s2=["rakshit","rahul","sahil"];
console.log(s1.concat(s2));


let s1=["rajeev","shashi","rishu"];
let s2=["rakshit","rahul","sahil"];
let s3=["Aaryan","Aarav","Ayush"];
console.log(s1.concat(s2,s3));


let s1=["rajeev","shashi","rishu"];
let r=(s1.unshift("singh"));
console.log(s1);

let s=["Aman","shradha","dhattarwal"];
let r=console.log(s.unshift("khapra"));
console.log(s);


let s=["Aman","shradha","dhattarwal"];
let r=console.log(s.shift());
console.log(s);


let s1=["Aman","shradha","dhattarwal","khapra","rajnish","rakshit"];
console.log(s1.slice(1,3));


let num=[1,2,3,4,5,6,7,8,9];
let r=num.splice(2,3,103,104,105);
console.log(num);

let n=[10,20,30,40,50,60,70,80,90];
let r=n.splice(2,2,300,400);
console.log(n);


let n=[10,20,30,40,50,60,70,80,90];
let r=n.splice(2,0,102);
console.log(n);


let n=[10,20,30,40,50,60,70,80,90];
let r=n.splice(2,1);
console.log(n);


let n=[10,20,30,40,50,60,70,80,90];
let r=n.splice(2,1,300);
console.log(n);


let n=[10,20,30,40,50,60,70,80,90];
let r=n.splice(5);
console.log(n);


let company=["bloomberg","uber","google","microsoft","ibm","netflix"];
//let r=company.shift();
//console.log(company);
//company.splice(1,1,"ola");
//console.log(company);
let r=company.push("amazon");
console.log(company);



function a()
{
    console.log("rajeev");
    console.log("singh");
}
a();
a();

function a(x,y)
{
   
    console.log(x+y);
}

function sum(x, y, z)
{
    console.log(x-y-z);
}

function a(x,y)
{
    s=x+y;
    return s;
}
let m=a(4,9);
console.log(m);


const arrowsum=(a,b)=>{
    console.log(a+b);
}

const printhello = ()=>
{
    console.log("Hello");
};

function countvowel(str){
 let c=0;
for(const char of str)
{
    if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        c++;
    }
}
console.log(c);
}

//count vowel in word

function countvowel(str)
{
    let count=0;
        for(let char of str)
        {
            if(char==="a"|| char==="e" || char==="i"|| char==="o"|| char==="u")
            {
                count++;
        }
    }
    console.log(count);
}

//convert string to uppercase

let s="rajeev";
console.log(s.toUpperCase());


let a=["delhi","pune","mumbai","bihar","mp"];
a.forEach((val)=>{
    console.log(val.toUpperCase());
});

let b=["DELHI","PUNE","MUMBAI","BIHAR","MP"];
b.forEach((val)=>{

    console.log(val.toLowerCase());
});

let c=["DELHI","PUNE","MUMBAI","BIHAR","MP"];
c.forEach((val,idx)=>{

    console.log(val.toLowerCase(),idx);
});


let a=[1,2,3,4,5,6,7,8,9];
a.forEach((num)=>{
    console.log(num*num);
});

//square of number

let a=[1,2,3,4,5];
a.forEach((a)=>{
    console.log(a**2);
});


let num=[2,3,4,5];
num.map((val)=>{
    console.log(val);
});

let num=[2,3,4,5];
let s=num.map((val)=>{
    return val*2;
});
console.log(s);


let num=[1,2,3,4,5,6,7,8,9,10];
let odd=num.filter((val)=>{
    return val%2 !== 0;
});
console.log(odd);


let num=[1,2,3,4,5,6,7,8,9,10];
let n=num.filter((val)=>{
    return val > 4;
});

console.log(n);

let m=[1,2,3,4,5,6,7,8,9];
const output=m.reduce((result,currentvalue)=>{
    return result + currentvalue;
});
console.log(output);


let m=[1,2,3,4,5];
const output=m.reduce((result,current) =>   {
    return result*current;
});
console.log(output);


let m=[1,2,3,4,5,6,7,8,9];
let output=m.reduce((result,current)=>{
    return result>current ? result:current;
});
console.log(output);


let m=[1,2,3,4,5,6,7,8,9];
let output=m.reduce((result,current)=>{
    return result<current ? result:current;
});
console.log(output);


let n=[10,20,30,40,50,60,70,80,90,92,54,95,99,100];
let s=n.filter((val)=>{
    return val>90;
});
console.log(s);

//javascript program to find sum
let s=[1,2,3,4,5];
let sum=s.reduce((result,current)=>{
return result+current;
});
console.log(sum);


let student={
    name:"Rajeev Singh",
    cgpa:9,
    father:"Vinay kumar singh",
    house:"Bihar",
    marks:90,
};


class parent{
    hello(){
        console.log("Hello");
    }
}
class child extends parent{}
let obj=new child();



class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends person{
    work(){
        console.log("solve problem,build something");
    }
}

let rajeev=new Engineer();


let a1=[1,2,3];
let a2=[1,2,3];
if(a1==a2)
{
    console.log("same");
}
else{
    console.log("Not Same");
}

let a=10;
let b=20;
if(a===b)
{
    console.log("same");
}
else{
    console.log("Both are not same");
}

function hello(){
    console.log("Hello");
}
setTimeout(hello,5000);


function sum(a,b,c){
    console.log(a+b+c);
}

function calculator(a,b,c,sumcallback){
    sumcallback(a,b,c);
}
calculator(1,2,3,sum); 


const hello=()=>{
    console.log("Hello");
};
setTimeout(hello,4000);


function getData(dataId){
    console.log("data",dataId);
}


let promise = new promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success");
})


function getData(dataId,getnextData){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
           },5000);
    });
}


const getPromise1=()=>{
    return new promise((resolve, reject)=>{
        console.log("I am a promise");
    });
}

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}

console.log("fetching data1...");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log("fetching data2...");
    let p2=asyncFunc2();
    p2.then((res)={});
})


function hello(){
    console.log("This is your last second javascript program");
}

function sub(a,b){
    sub=a-b;
    console.log(sub);
}

const URL = "https://cat-fact.herokuapp.com/facts";
const getFacts = async () =>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
};

const URL = "https://cat-fact.herokuapp.com/facts";
const getFacts = async () =>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data[0]);
};

const URL = "https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

function getFacts(){
    fetch(URL).then((response)=>{
       return response.json();
    })
    .then((data)=>{
        console.log(data);
    });
}

btn.addEventListener("click",getFacts);


