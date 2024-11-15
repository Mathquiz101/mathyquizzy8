// Function to calculate the tip
function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        document.getElementById("result").textContent = "Please enter valid values!";
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById("result").textContent = 
        `Tip: $${tipAmount.toFixed(2)} | Total: $${totalAmount.toFixed(2)}`;
}
