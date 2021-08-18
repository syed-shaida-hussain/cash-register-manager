const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message")

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)

        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Bill amount should be greater than 0");
    }
});

function calculateChange(){

}

function hideMessage(){
    errorMessage.style.display = "none"
}

function showMessage(message) {
    errorMessage.style.display = "block"
    errorMessage.innerText = message;
}