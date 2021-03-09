//welcome message
var user = "Hlao";
var salution = "Hello, ";
var greeting = salution + user + "! Here are the latest Cat Royalty reviews"
var greetingEl = document.getElementById('greeting')

greetingEl.textContent = greeting;

//product price
var price = 60,
    studentDiscount = .10,
    studentPrice = price * (1 - studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);