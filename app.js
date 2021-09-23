const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const returningAmount = document.querySelector("#returning-amount");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const outputTable = document.querySelector("#output-table");
const returnChange = document.querySelector("#return-change");
const nextButton = document.querySelector("#next-button") ;
const divCashGiven = document.querySelector("#div-cash-given");

const setOfNotes= [2000,500,100,50,10,5,1] ;

divCashGiven.style.display = "none";
outputTable.style.display = "none";
returnChange.style.display = "none";
checkButton.style.display = "none";

function nextButtonHandler(){
    hideErrorMessage() ;
    if (billAmount.value > 0) {
        nextButton.style.display = "none";
        divCashGiven.style.display = "block";
        checkButton.style.display = "inline";
    } else {
        errorMessagefunc("Enter a valid amount");
    }
}

function checkButtonHandler(){
    hideErrorMessage() ;
    
    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);
    if (billAmountValue<0){
        invalidErrorHandler("Enter valid bill amount") ;
    }
    else {
        if(billAmountValue > cashGivenValue ){
        errorMessagefunc("Give More Cash") ;
        }
        else {const returnAmount= cashGivenValue - billAmountValue ;
        calculateChange(returnAmount) ;
         }
}
}

function invalidErrorHandler(msg){
    errorMessage.innerText = msg ;
}
function hideErrorMessage(){
    errorMessage.style.display = "none" ;
}
function errorMessagefunc(message){
    outputTable.style.display = "none";
    returnChange.style.display = "none";
    errorMessage.style.display = "block" ;
    errorMessage.innerText = message ;
}
function calculateChange(amountToBereturned){
    outputTable.style.display = "inline-block" ;
    returnChange.style.display = "inline-block" ;
    returningAmount.innerText = amountToBereturned ;
    for(let i=0 ; i<setOfNotes.length ; i++){
        const calculatedNoOfNotes = Math.trunc(amountToBereturned / setOfNotes[i]) ;
        amountToBereturned = amountToBereturned % setOfNotes[i] ;
        noOfNotes[i].innerText = calculatedNoOfNotes ;
    }
}

nextButton.addEventListener("click",nextButtonHandler);
checkButton.addEventListener("click",checkButtonHandler) ;