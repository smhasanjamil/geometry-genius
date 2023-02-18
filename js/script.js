let serial = 0;
/*
*================First Card==================
*/
document.getElementById('firts-card').addEventListener('click', function () {
    serial += 1;

    const productName = document.getElementById('first-product-name').innerText;
    const firstInput = document.getElementById('first-card-first-input').value;
    const secondInput = document.getElementById('first-card-second-input').value;
    const results = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

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
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);
});


/*
*================Third Card==================
*/
document.getElementById('third-card').addEventListener('click', function () {
    serial += 1;

    const productName = document.getElementById('third-product-name').innerText;
    const firstInput = document.getElementById('third-card-first-input').value;
    const secondInput = document.getElementById('third-card-second-input').value;
    const result = parseFloat(firstInput) * parseFloat(secondInput);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);
});


/*
*================Fourth Card==================
*/
document.getElementById('fourth-card').addEventListener('click', function () {
    serial += 1;

    const productName = document.getElementById('fourth-product-name').innerText;
    const firstInput = document.getElementById('fourth-card-first-input').value;
    const secondInput = document.getElementById('fourth-card-second-input').value;
    const results = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);
});


/*
*================Fifth Card==================
*/
document.getElementById('fift-card').addEventListener('click', function () {
    serial += 1;

    const productName = document.getElementById('fifth-product-name').innerText;
    const firstInput = document.getElementById('fifth-card-first-input').value;
    const secondInput = document.getElementById('fifth-card-second-input').value;
    const results = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);
});


/*
*================Sixth Card==================
*/
document.getElementById('sixth-card').addEventListener('click', function () {
    serial += 1;

    const productName = document.getElementById('sixth-product-name').innerText;
    const firstInput = document.getElementById('sixth-card-first-input').value;
    const secondInput = document.getElementById('sixth-card-second-input').value;
    const results = 3.14 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

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






/*
*================Random Color==================
*/
const cards = document.querySelectorAll('.card-random-bg-color');

cards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#000000', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000', '#808000'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.backgroundColor = randomColor;
    });

    card.addEventListener('mouseout', function () {
        card.style.backgroundColor = '';
    });
});



