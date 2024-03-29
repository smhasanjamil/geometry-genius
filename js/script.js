let serial = 0;
/*
*================Blog Page==================
*/
document.getElementById('blog-button').addEventListener('click', function () {
    window.location.href = 'blog.html';
});


/*
*================First Card==================
*/

document.getElementById('firts-card').addEventListener('click', function () {


    const productName = document.getElementById('first-product-name').innerText;
    const firstInput = document.getElementById('first-card-first-input').value;
    const secondInput = document.getElementById('first-card-second-input').value;

    if (isNaN(firstInput) || isNaN(secondInput) || parseFloat(firstInput) <= 0 || parseFloat(secondInput) <= 0 || firstInput === '' || secondInput === '') {

        document.getElementById('first-card-first-input').value = '';
        document.getElementById('first-card-second-input').value = '';

        return window.alert('Please enter only numbers and greater than 0');
    }

    serial += 1;

    const results = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);

    document.getElementById('first-card-first-input').value = '';
    document.getElementById('first-card-second-input').value = '';

});



/*
*================Second Card==================
*/
document.getElementById('second-card').addEventListener('click', function () {

    const productName = document.getElementById('second-product-name').innerText;
    const firstInput = document.getElementById('second-card-first-input').value;
    const secondInput = document.getElementById('second-card-second-input').value;

    if (isNaN(firstInput) || isNaN(secondInput) || parseFloat(firstInput) <= 0 || parseFloat(secondInput) <= 0 || firstInput === '' || secondInput === '') {
        document.getElementById('second-card-first-input').value = '';
        document.getElementById('second-card-second-input').value = '';
        return window.alert('Please enter only numbers and greater than 0');
    }

    serial += 1;

    const result = parseFloat(firstInput) * parseFloat(secondInput);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);

    document.getElementById('second-card-first-input').value = '';
    document.getElementById('second-card-second-input').value = '';

});


/*
*================Third Card==================
*/
document.getElementById('third-card').addEventListener('click', function () {

    const productName = document.getElementById('third-product-name').innerText;
    const firstInput = document.getElementById('third-card-first-input').value;
    const secondInput = document.getElementById('third-card-second-input').value;

    if (isNaN(firstInput) || isNaN(secondInput) || parseFloat(firstInput) <= 0 || parseFloat(secondInput) <= 0 || firstInput === '' || secondInput === '') {

        document.getElementById('third-card-first-input').value = '';
        document.getElementById('third-card-second-input').value = '';

        return window.alert('Please enter only numbers and greater than 0');
    }

    serial += 1;

    const result = parseFloat(firstInput) * parseFloat(secondInput);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);

    document.getElementById('third-card-first-input').value = '';
    document.getElementById('third-card-second-input').value = '';

});


/*
*================Fourth Card==================
*/
document.getElementById('fourth-card').addEventListener('click', function () {

    const productName = document.getElementById('fourth-product-name').innerText;
    const firstInput = document.getElementById('fourth-card-first-input').value;
    const secondInput = document.getElementById('fourth-card-second-input').value;

    if (isNaN(firstInput) || isNaN(secondInput) || parseFloat(firstInput) <= 0 || parseFloat(secondInput) <= 0 || firstInput === '' || secondInput === '') {

        document.getElementById('fourth-card-first-input').value = '';
        document.getElementById('fourth-card-second-input').value = '';

        return window.alert('Please enter only numbers and greater than 0');
    }

    serial += 1;

    const results = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);

    document.getElementById('fourth-card-first-input').value = '';
    document.getElementById('fourth-card-second-input').value = '';

});


/*
*================Fifth Card==================
*/
document.getElementById('fift-card').addEventListener('click', function () {

    const productName = document.getElementById('fifth-product-name').innerText;
    const firstInput = document.getElementById('fifth-card-first-input').value;
    const secondInput = document.getElementById('fifth-card-second-input').value;

    if (isNaN(firstInput) || isNaN(secondInput) || parseFloat(firstInput) <= 0 || parseFloat(secondInput) <= 0 || firstInput === '' || secondInput === '') {

        document.getElementById('fifth-card-first-input').value = '';
        document.getElementById('fifth-card-second-input').value = '';

        return window.alert('Please enter only numbers and greater than 0');
    }

    serial += 1;

    const results = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);

    document.getElementById('fifth-card-first-input').value = '';
    document.getElementById('fifth-card-second-input').value = '';
});


/*
*================Sixth Card==================
*/
document.getElementById('sixth-card').addEventListener('click', function () {

    const productName = document.getElementById('sixth-product-name').innerText;
    const firstInput = document.getElementById('sixth-card-first-input').value;
    const secondInput = document.getElementById('sixth-card-second-input').value;

    if (isNaN(firstInput) || isNaN(secondInput) || parseFloat(firstInput) <= 0 || parseFloat(secondInput) <= 0 || firstInput === '' || secondInput === '') {

        document.getElementById('sixth-card-first-input').value = '';
        document.getElementById('sixth-card-second-input').value = '';

        return window.alert('Please enter only numbers and greater than 0');
    }

    serial += 1;

    const results = 3.14 * parseFloat(firstInput) * parseFloat(secondInput);
    const result = results.toFixed(2);
    const convertToMeterSquire = document.write = '<span style="background-color: blue; color: white; padding: 5px; border-radius: 5px">Convert to m<sup>2</sup></span>';

    displayData(productName, firstInput, secondInput, result, convertToMeterSquire);

    document.getElementById('sixth-card-first-input').value = '';
    document.getElementById('sixth-card-second-input').value = '';

});


/*
*================Function Data Display==================
*/
//Common function to display data
function displayData(nameOfProduct, valueOfFirstInput, ValueOfSecondInput, ResultOfCalculation, convertToMeterSquire, editButtonAction) {
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



