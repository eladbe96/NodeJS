function validation(numOne,numTwo){
    var userAnswer = document.getElementById("answer").value;
    if(isNaN(userAnswer)){

        document.getElementById("output").innerHTML = userAnswer + " isn't a number!";

    }
    
    else {
        if (numOne + numTwo == userAnswer){

            document.getElementById("output").innerHTML = userAnswer + " is the correct answer!";
            }
            else{
    
            document.getElementById("output").innerHTML = userAnswer + " isn't the correct answer!"
            }
    }
    

}