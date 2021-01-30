// HandleTicketChange functuon && Calculate
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'first') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    subTotal();
};

// SubTotal & Total Calculate function
function subTotal() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById("first-total").innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
};
// Input value 
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
};

//book NowButton
const bookNowBtn = document.getElementById('book-now');
bookNowBtn.addEventListener('click', function () {
    console.log(bookNowBtn);
    const hiddenFullSec = document.getElementById('hidden');
    hiddenFullSec.style.display = "none";
    let showOrderMsg = document.getElementById('bookNowPage');
    showOrderMsg.style.display = "block";
});

