const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-button");
const message = document.querySelector("#error-message") ;


function kaamkarjabhai(){
    message.style.display = "none" ;
    if (billAmount.value < 0){
        message.style.display = "block" ;
       message.innerText = "aisa kaisa chalega" ;
    } else{}
    if (cashGiven.value < billAmount.value){
        message.style.display = "block" ;
        message.innerText = "fir se aisa kaisa chalega didi" ;
    }
}

checkBtn.addEventListener("click", kaamkarjabhai) ; 