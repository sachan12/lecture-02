// Lecture-02 Operators and Conditional Statements;
// Operators in JS
// Used to perform some operation in data
// Arithematic Operators                  +,-,*,/
// 1-Increment (++)  2-Decrement(--) 3-Exponentation(**)  4-Modulus(%)
// (Exponentation means power.)
/*let x = 10
let y = 20
console.log("x + y = ", x+y);*/
/*let x1 = 10
let x2 = 70
let r1 = x1 + x2;
console.log("x1 + x2 = ", r1);*/
// let a = 5
// let b = 2
// console.log("a = ", a, "& b = " , b );
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b);    // 5*5 = 25

// Unary Operators.
// let a = 5
// let b = 2
// console.log("a = ", a, "& b = " , b );
// a++;
// console.log("a = " , a);              // 6
// b--;
// console.log("b = " , b);              // 1

// let x = 6
// let y = 10
// console.log("x = ", x, "& y = " , y );
// console.log("++x = ", ++x);                //7
// console.log("--x = ", --x);                //6
// console.log("y++ =", y++);                 //10
// console.log("y++ = ", y);                  //11
// console.log("y-- =", y--);                 //11
// console.log("y-- = ", y);                  //10

// Assigment-Operators;    = , += , -= , *=  , %= , **=
// let a = 5
// let b = 2
// a += 4;     // a=a+4
// console.log("a = ",a);           //9


// ==================================&&=================================
// a += 5
// console.log("a = ",a);              //10


// ==================================&&=================================


// a -= 4;     // a=a-4
// console.log("a = ",a);           //1

// ==================================&&=================================


// a *= 4;     // a=a*4
// console.log("a = ",a);            //20

// ==================================&&=================================


//  a /= 4;     a=a/4
// console.log("a = ",a);            //1.25

// ==================================&&=================================

// a %= 10 
// console.log("a = ",a);               //5

// ==================================&&=================================

// a **= 4  // a=a**4
// console.log("a = ", a);        // 625 

// _____________________________________________________________________________________________

// Comparison operators ; (means compare two values); (return boolean values);

// 1-Equal to ==   2-Equal & type ===     3-Not equal to !=      4- Not equal to & type !==

// > , >= , < , <=

/*let a = 5;
let b = 3;*/

// console.log("5 == 2", a==b);             // false

// console.log("5 == 5", a==b);             // True

// console.log("5 != 5" , a!=b);            // false

// console.log("5 != 2" , a!=b);            // True

// console.log("5 === '5'" , a === b);      // False  

// console.log("5 !== '5'" , a !== b);      // True

// console.log("5 > 3" , a > b );           // True

// console.log("5 >= 3" , a >= b );         // True

// console.log("5 < 3" , a < b);            // False

// console.log("5 <= 3" , a <= b);          // False


// _____________________________________________________________________________________________

// Logical Operators ;     (Multiple expressions ko valuate karke aik final answer deta hai); (return boolean value)

// 1-Logical AND &&    2-Logical OR ||   3-Logical NOT !

// 1- Logical And && (true tabhie hoga ( jab condition-1 is true and condition-2 and all condition  is true ) );

// let a = 6;
// let b = 5;

/*let cond1 = a > b;           // True
let cond2 = a === 6;         // True
console.log("cond1 && cond2 " , cond1 && cond2);*/     // True

/*let cond1 = a > b;           // True
let cond2 = a === 5;         // False
console.log("cond1 && cond2 " , cond1 && cond2);*/     // False


/*let cond1 = a < b;           // False
let cond2 = a === 5;         // False
console.log("cond1 && cond2 " , cond1 && cond2);*/     // False

// 2-Logical OR || (condition-1 or condition-2 mai sai koi bhi aik condition true ho);

// console.log("cond-1 && cond-2 = " , a < b || a===6);    // True

// 3-Logical NOT ! ( yee bolta koi bhi expression agr true dee rha hoga mai us ko false bana doonga & agr ko bhi expreesion age false dee raha hoga mai us ko true bana doonga );
// (Give value Opposite)


// console.log("!(6<5) =", !(a<b));        // True

// console.log("!(6>5) =", !(a>b));        // False

// _____________________________________________________________________________________________
// Conditional Statements ; (To implement some condition in the code)

// if Statement ;

//let age = 18;

/*if(age >= 18) {
    console.log("you can vote");          // you can vote
}*/

/*if(age < 18){
    console.log("you can not vote");
}*/

/*if ( age >= 18 ) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}*/


/*let mode = "dark";
let color;
if (mode === "dark"){
    color = "black";
}

if (mode === 'light'){
    color === "white";
}

console.log(color);*/

// if - else statement ;

/*let mode = "blue";
let color;
if (mode === "dark"){
    color = "black";
} else {
    color = "white";
}
console.log(color);*/

// odd or even                Syntax -> rules ;

/*let num = 10 ;

if (num % 2 === 0){
    console.log(num ,"is even");
} else {
    console.log( num," is odd");
}*/

// else-if Statement ;      

/*let mode = 'pink';
let color;

if (mode === 'dark'){
    color = "black"
} else if (mode === 'blue'){
    color = "blue"
} else if  (mode === 'pink'){
    color = "pink"
} else {
    color = "white"
}
console.log(color);*/

// _____________________________________________________________________________________________

// Ternary Output ;       condition?trueoutput:FalseOutput

/*let age = 25;

let result = age >= 1num is 8 ? "adult" : "not adult";  // simpler , compact if-else

console.log(result);*/ 

// MDN  DOCS

// Practice Questions ;

/*let name = prompt("what is your name ");
console.log(name);*/

/*let num = prompt("enter a number:");
if (num % 5 === 0){
    console.log(num ,"is a multiple of 5");
} else {
    console.log(num ,"is not a multiple of 5");
}*/

/*let num = prompt("Enter a number");
if (num % 3 === 0){
    console.log(num ,"is a multiple of 3");
} else{
    console.log(num ,"is not a multiple of 3");
}*/

/*let score = prompt("Enter your scores");
let grade;
if (score >=80 && score<=100 ){
     grade="A"
}else if (score >=70 && score<=79){
    grade="B"
}else if (score >=60 && score<=69){
    grade="C"
}else if (score >=50 && score<=59){
    grade="D"
}else{
    grade="Fail"
}
console.log("according to your scores , your grade was",grade);*/



















 







