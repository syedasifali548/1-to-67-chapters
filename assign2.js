// / Chap 21 t0 25
// program no:1

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// fullName = firstName + lastName
// alert("You full name is" + [fullName])

// program no:2

// var model = prompt("Enter your favorite mobile model")
// var charsInmodel = model.length
// alert(charsInmodel)

// program no:3

// var text = "Pakistani"
// var a = text.indexOf("n") 
// document.write("Index of n is:", a)

// program no:4

// var text = "Hello World"
// var a = text.indexOf("l")
// document.write("Last index of l is :", a)

// program no:4

// var text = "Pakistnai"
// var a = text.charAt(3)
// document.write("Character at index 3:",a)

// program no:5


// var str1 = prompt("Enter your first name")
// var str2 = prompt("Enter your last name")
// var res = str1.concat(  str2)
// document.write(res)

// program no:7

// var a = "Hyderabad"
// var newText = a.replace("Hyderabad", "Islamabad")
// document.write("Text after replacement:" , newText)

// program no:8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var text = message.replace (/and/g,"&")
// document.write(text)




// program no:10

// var a = prompt("Enter any value")
// var text = a.toUpperCase()
// document.write(text)


// program no:11

// var a = prompt(javascript)
// var text = a.lo




// program no:16

// var university = "U\n n \n \n i\n v\n e\n r\n s\n i\n t\n y\n o\n f\n  K\n a\n r\n a\n c\n h\n i"
// var res = university.split()
// document.write(res)

// program no:17

// var name = prompt("Ente an input")
// var res = name.charAt(name.length-1)
// document.write(res)

// program no:18

// var text = "The quick brown fox jumps over the lazy dog"
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "the") {
//         document.write("found");
//         break;
//     }
// }



// chapters 26-30

// Program no:1

// var x;
//             x = prompt("Enter a number");
//             document.write("Number:" + x + "</br>");
//             var a = Math.round(x)
//             document.write("Round off Value:" + a + "</br>");
//             var b = Math.floor(x)
//             document.write("Floor Value:" + b + "</br>");
//             var c = Math.ceil(x)
//             document.write("Ceil Value:" + c + "</br>");

// program no:2

// var a;
// a = prompt("Enter a number");
// document.write("Number:" + a + "</br>");
// var x = Math.round(a)
// document.write("Round off Value:" + x + "</br>");
// var y = Math.floor(a)
// document.write("Floor Value:" + y + "</br>");
// var z = Math.ceil(a)
// document.write("Ceil Value:" + z + "</br>");

// program no:3
// var m = Math.abs(-4)
//     document.write("The absolute value of -4 is" + " "+ m);

// program no:4

// var m = Math.floor(Math.random()*6) + 1;

//      document.write("Random dice value is:" + " "+ m)

// program no:5

// var m = Math.floor(Math.random()*2) + 1;
 
//       document.write("Random coin value is:Heads" + " "+ m)

// program no:6

// var m = Math.floor(Math.random()*100) + 1;

// document.write("Random Number between 1 to 100 is:" + " "+ m + "</br>")

// program no:7

// var weight;
//           weight = prompt("Enter your weight");
//           if(weight<50)
//           {
//                   document.write("You are fail in weight exam!");
//           }
//           else{
//           document.write(" The Wheight of user is:" + weight +" "+ " " + "</br>");
//         }

// program no:8

// var n;
// n = prompt("Enter a number from 1 to 10!");
// if(n==6){
//         document.write("Congratulation you got Lucky Number! " +" "+ n)
// }
// else{
// document.write("Try Again! You got: " +" "+ n)
// }


//  Chapter 31-34

// program no:1

// var now = new Date( );
//         document.write(now);



// program no:2



// var now = new Date( );
//         alert(now.getMonth() + "Current Month:June");

// program no:3

// var d = new Date();
// var days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// document.write(days[d.getDay()] + "<br>");

// program no:4

// var d = new Date();
//      var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//      if(days[0]){

//         document.write(days[d.getDay()] + ":" + "Its Fun Day!");
//      }
//      else if(days[6]){

//         document.write(days[d.getDay()] + ":" +  "Its Fun Day!");
//      }
//      else{
//          document.write("Sorry Today is not Fun day")
//      }
    

// program no:5

// var month = prompt("Enter date of the month")
// if(month <=15){
//     alert("first fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// program no:6
// var CurrentDate = new Date();
// var MiliSeconds =new Date("Jan,1,1970");
// var minutes =new Date("Jan,1,1970");
// document.write(" Current Date: " + CurrentDate.toDateString());
// document.write("</br>")
// document.write(" Elapsed miliseconds since january,1,1970: " + MiliSeconds.getTime());
// document.write("</br>")
// document.write(" Elapsed Minutes since january,1,1970: " + minutes.getMinutes());


// program no:6

// var time = new Date().getHours;
// var text = " ";
// if(time<=12)
// {
// document.write(text + "It's AM");
// }
// else{

//     document.write(text + "It's PM");
// }

// program no:7
// var LastDate = new Date(date.getFullYear(),date.getMonth() + 1,0);

// document.write(LastDate);


// Chap # 35 to 38


// program no: 1

// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     document.write("Current time: " + theHr + ":" + theMin);
// }
// tellTime()

// program no: 2

// function myName(a,b) {
//         var z = a + b;
//         return z;
//     }
    
//     var g = myName("Asif", "Shah");
    
//     alert(g);

// program no: 3
    // function  addNumbers(a,b) {
    //          var z = a + b;
    //          return z;
    //          }
    //          var g = addNumbers(2,7)
    //          alert(g);

 // program no: 4
 // function  addNumbers(a,b) {
//      var z = a + b;
//      return z;
//      }
//      var g = addNumbers(2,2)
//      alert(g)

// program no: 4

// function calc(num1, opr, num2) {
//     if (opr === " +") {
//         return num1 + num2;
//     }
//     else if (opr === " - ") {
//         return num1 - num2;
//     }
//     else if (opr === "*") {
//         return num1 * num2;
//     }
//     else {
//         return "Incorrect"
//     }
// }

// var result1 = calc(7,"+",5)
// var result2 = calc(9,"-",7)
// var result3 = calc(5,"*",2)

// document.write(result1);
// document.write(result2);
// document.write(result3);
    
// program no: 5

// function MySquare(){
//     document.write( Math.sqrt(64));
//     return MySquare()
// }

// program no: 6

// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// let n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);



// program no: 7

// function Calculate(){
//     var x = +prompt("Enter first number");
//     var y = +prompt("Enter Last Number");
//     document.write(x + y);
//     var z = x + y;
//     return z;
    
// }
// var a=  Calculate()
// document.write(z);

  


//  program no: 8

// var base = prompt("Input the base value.");
//         var perp = prompt("Input perpendicular value.");
//         function calculateHypotenuse(base) {
//             return( base)*2;
//         }
//         function calculateSquare( perp) {
//             return (perp)*2;
//         }
        
//         document.writeln('The area of your Hypotenuse is ' + calculateHypotenuse(base, perp)*2);         

//  program no: 9

function rectangle(a,b){
    document.write("Area of rectengle is" + " ");
document.write( a*b);
}
rectangle(3,4)