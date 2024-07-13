alert("Welcome to the Ultimate JS Quiz!\nGet ready to test your skills. Remember, only choose a, b, c, or d for your answers. Let's go!");

var score = 0;

var q1 = prompt("QUESTION#01\nInside which HTML element do we put the JavaScript?\na)<scripting> b)<script> c)<js> d)<javascript>")
if (q1 == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: b)<script>")
}

var q2 = prompt("QUESTION#02\nHow do you declare a JavaScript variable?\na) variable x; b) var x; c) v x; d) x;")
if (q2 == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: b) var x;")
}

var q3 = prompt("QUESTION#03\nWhich operator is used to assign a value to a variable?\na) * b) + c) - d) =")
if (q3 == 'd') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: d) =")
}

var q4 = prompt('QUESTION#04\nWhat is the correct syntax for referring to an external script called "script.js"?\na) <script name="script.js"> b) <script src="script.js"> c) <script href="script.js"> d) <script file="script.js">')
if (q4 == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: b) <script src="script.js">')
}

var q5 = prompt('QUESTION#05\nHow do you write an if statement in JavaScript?\na) if i = 5 then b) if i == 5 then c) if (i == 5) d) if i = 5')
if (q5 == 'c') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: c) if (i == 5)')
}

var q6 = prompt('QUESTION#06\nWhere is the correct place to insert a JavaScript?\na) both <head> and <body> b) <head> c) <body>')
if (q6 == 'c') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: c) <body>')
}

var q7 = prompt('QUESTION#07\nHow do you write "Hello World" in an alert box?\na) alert("Hello World") b) msgBox("Hello World") c) alertBox("Hello World")')
if (q7 == 'a') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: a) alert("Hello World")')
}

var q8 = prompt('QUESTION#08\nHow to write an IF statement for executing some code if "i" is NOT equal to 5?\na) if(i==5) b) if(i>=5) c) if(i!=5)')
if (q8 == 'c') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: c) if(i!=5)')
}

var q9 = prompt('QUESTION#09\nJavaScript is the same as Java?\na) True b) False')
if (q9 == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: b) False')
}

var q10 = prompt('QUESTION#10\nWhich JavaScript keyword is used to declare a variable?\na) var b) let c) const d) All of these')
if (q10 == 'd') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: d) All of these')
}

// Result Message 
if(score>=0 & score<=4){
    alert("Your score is " +score+"/10\nYou need improvement in your JavaScript knowledge. Take some time to review the concepts and try again.")
}
else if(score>=5 & score<=7){
    alert("Your score is " +score+"/10\nYour performance is satisfactory in the JavaScript quiz. Good effort! Keep practicing to enhance your skills.")
}
else if(score>=8 & score<=9){
    alert("Your score is " +score+"/10\nGreat job on the JavaScript quiz! You have a good understanding of the concepts. Keep aiming for perfection.")
}
else if(score==10){
    alert("Your score is " +score+"/10\nExcellent work on the JavaScript quiz! You have mastered the concepts perfectly. Keep up the fantastic performance!")
}
