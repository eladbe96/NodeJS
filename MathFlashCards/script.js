function validation(numOne,numTwo){
    var userAnswer = document.getElementById("answer").value;
    var correctAnswer = numOne + numTwo;
    if(isNaN(userAnswer)){
        document.getElementById("output").innerHTML = userAnswer + " isn't a number!";
    }
    else {
        if (correctAnswer == userAnswer){
            document.getElementById("output").innerHTML = "Correct! " + numOne + " + " + numTwo + " = " + correctAnswer + " is the correct answer!";
            }
            else{
            document.getElementById("output").innerHTML = "Incorrect! " + numOne + " + " + numTwo + " = " + correctAnswer + " not " + userAnswer + "!";
            }
    }
    

}
function reset(){

    document.getElementById("output").innerHTML = ""
    document.getElementById("answer").value = ""
    numOne = Math.floor(Math.random() * 10 + 1);
    numTwo = Math.floor(Math.random() * 10 + 1);
    document.getElementById("data").innerHTML = numOne + " + " + numTwo;
}