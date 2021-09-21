const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const returnedAmount = document.querySelector("#returned-amount") ;

const setOfNotes = [2000,500,100,50,20,5,1] ;
function validateBillAndCashAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            returnedAmount.innerText = amountToBeReturned ;
            calculateChange(amountToBeReturned) ;
        }
        else {
            message.style.display = "block";
            message.innerText = "cash should be equal or more for transactions";
        }
    } else {
        message.style.display = "block";
        message.innerText = "invalid bill amount : Should be greated than 0";
    }

}

function calculateChange(retunAmount){
        for(let i= 0 ; i<setOfNotes.length ; i++){
            const calculatedNumberOfNotes = Math.trunc(retunAmount/setOfNotes[i]) ;
            retunAmount = retunAmount % setOfNotes[i] ;
            noOfNotes[i].innerText = calculatedNumberOfNotes ;
        } 
        
}

checkBtn.addEventListener("click", validateBillAndCashAmount);