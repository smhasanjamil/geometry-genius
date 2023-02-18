let serial = 0;
/*
*================First Card==================
*/
document.getElementById('firts-card').addEventListener('click', function () {
    serial += 1;

    const productName = document.getElementById('first-product-name').innerText;
    const firstInput = document.getElementById('first-card-first-input').value;
    const secondInput = document.getElementById('first-card-second-input').value;
    const result = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to M<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);
});


/*
*================Second Card==================
*/
document.getElementById('second-card').addEventListener('click', function () {
    serial += 1;

    const productName = document.getElementById('second-product-name').innerText;
    const firstInput = document.getElementById('second-card-first-input').value;
    const secondInput = document.getElementById('second-card-second-input').value;
    const result = parseFloat(firstInput) * parseFloat(secondInput);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to M<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);
});



/*
*================Function Data Display==================
*/
//Common function to display data
function displayData(nameOfProduct, valueOfFirstInput, ValueOfSecondInput, ResultOfCalculation, convertToMeterSquire) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${nameOfProduct}</td>
        <td>${ResultOfCalculation} <span>cm <sup>2</sup> </span></td>
        <td>${convertToMeterSquire}</td>    
    `;
    container.appendChild(tr);
}