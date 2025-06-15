document.getElementById('calculate-btn').addEventListener('click', function (){
    const fuelType = document.getElementById('fuel-type');
    const fuelAmount = parseFloat(document.getElementById('fuel-amount').value);
    const prisePerLiter = parseFloat(fuelType.options[fuelType.ariaSelectedIndex].dataset.price);

    if (!fuelAmount || fuelAmount <= 0) {
        alert('Введіть коректну кількість літрів!');
        return;
    }

    const totalPrice = (fuelAmount * pricePerLiter).toFixed(2);
    document.getElementById('total-price').textContent = totalPrice;
});

function updatePrice(fuelType) {
    const inputId = 'price-${fuelType}';
    const input = document.getElementById(inputId);
    const newPrice = parseFloat(input.value);

    if (!newPrice || newPrice <= 0) {
        alert('Введіть коректну ціну!');
        return;
    }

    const feulSelect = document.getElementById('fuel-type');
    for (let option of feulSelect.options) {
        if (option.value === fuelType) {
            
        }
    }
}