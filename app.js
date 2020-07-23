// chap 38`-44
// program 01

// function power(){
//     var a = Math.pow(5,2);
//     var b = Math.pow(6,2);
//     document.write(a + b)
// }
// power();

// program 02 

// function leapYear(){
//     var year = prompt("Enter a year")
//     if(year%4==0) 
//     {
//         alert(year + " " + "is a leap year")
//     } 

//     else {
//         alert(year +" " + "is not a Leap Year")
//     }
// }
// leapYear();

// program 03

// function Area(a,b,c)
// {
//     function AreaAngle()
//     {
//         a = 2;
//         b = 3;
//         c = 4;
//         var perimetr = (a+b+c)/2;
//         var area = Math.sqrt(perimetr*((perimetr-a)*(perimetr-b)*(perimetr-c)))
//         document.write(area)

//     }
// }
// Area();
// AreaAngle();

// program 4
// var g = 14;
// function discrete(a,b,c)
// {
  
//  var z = a+b+c;
//  return z;
// }
//  var x = discrete(4,5,6);
//  alert(g)
//  alert(x)

// function first(a,b){
    
//     return b + a;

    
// }
//  alert(first(2,3));
//  alert(first(3,3));
//  alert(first(4,3));

// program 4


// function RecicivesMarks(){
//     var subject1 = prompt("Enter Subject first marks")
//     var subject2 = prompt("Enter Subject second marks")
//     var subject3 = prompt("Enter Subject third marks")


//     document.write("1:" + subject1 + " <br>")
//     document.write( "2:" +subject2 + " <br>")
//     document.write("3:" +subject3 +" <br>")


   
// }
// RecicivesMarks();


// program 5


// var word = prompt("Enter any 1 word:");
// var find =prompt("Enter character");
// SVGPathSegCurvetoQuadraticSmoothAbs(word,find);
// function search(word,find){
//     for(var i=1;i<word.length;i++){
//     if(find===word[i]){
//         document.write("IndexOf("+find+") is +(i+1));
//         break; 
//     }
// }
// }
 

// program 6
// var string = " You need to decrement the counter when you remove a character.";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                 j--;           // take the removed character into account
//                 secondLoop--;  // string is now one character shorter
//             }

//         }
//     }
// }

// string.character();
// console.log(string);


// program 7

// function FindOccurrences(){
//     var str ="Web and Mobile hybrid app development";
//     var count = 0;
//     switch(str){
//         case'a':
//         count++;
//         case'b':
//         count++
//         case'e':
//         case'a':
//         case'i':
//         case'e':
//         case'y':
//         case'i':
//         case'a':
//         case'e':
//         case'e':
//         case'o':
//         case'e':
//         return 1;
//         default:
//             return 0;
            
//     }
// }
// console.log(FindOccurrences());


// program 9

// var overTime = +prompt("Enter total number of work hours")
// function pay(overtime){
//     if(overTime>40){
//         overTime = (overTime-40)*12;
//         document.write("Overtime pay is:" + overTime)
//     }
// }
// pay();

// program 10


// function currencyDenomination() {
//     var cash =  prompt("Enter cash (in hundreds): ");                              // You  can use prompt like this
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination();

 
// Chapters 43-48


// program 1
// alert("Welcome")

// program 2

// function MobilePhones(){
//     alert("Apple Mobile phone Iphone 11")
// }
// function iphone10(){
//    alert("Apple Mobile phone Iphone 11 Pro")
// }
// function Iphone11(){
// alert("Apple Mobile phone Iphone 10")
// }

// function SomeDeleteRowFunction(o) {
//     //no clue what to put here?
//     var p=o.parentNode.parentNode;
//         p.parentNode.removeChild(p);
//    }


// program 3

// function deleteRow(e)
// {
//     // var elem = document.getElementById("table").deleteRow(f);
//     //  var f = elem.parentNode.remove(r).rowIndex;
//     // return false;
// }

// program 4


// function changeImage(){
//         var carImage = document.getElementById("img")
//         carImage.src = "iphone-11-pro.jpg"
//     }
    
//     function changeImageBefore(){
//         var carImage = document.getElementById("img")
//         carImage.src = "Apple-iPhone-11.webp"    
    
//     }


// program 5

// function increase(){
//         var increment = document.getElementById("increment")
//         for (var i =0; i<=100; i++){
//             increment++;
    
//         }
//         console.log(increment+1)
//     }


// Chap 49 to 52

// function submit(){
//     var submission = document.getElementById("sub")
//     submission.value = " "
//     console.log(submission.value)
// }

// program # 2

// function readMore(){
//     var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil ratione fugit quisquam rerum, provident distinctio! Necessitatibus, ut. Maiores rem harum eveniet explicabo expedita nisi mollitia impedit voluptatibus minus esse."
//     var paragraph = document.getElementById("para")
//     paragraph.innerHTML = text
// }

// Chap 58-67
// program # 1

// var a = document.getElementById("main-content")


// program # 2
var a = document.getElementById("main-content")
console.log(document.childNodes[1])



