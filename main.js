// code goes here :)
//answer1
var allPrice = 0;
var priceArr = items.forEach(function(el){
  allPrice += el.price;

})
var itemsLength = items.length;
var average = allPrice / itemsLength;
var rounded = Math.round(average * 100) / 100;

document.getElementById("answer1").innerHTML = rounded


//answer2

var theCost = items.filter(function(el){
  return el.price > 14.00 && el.price < 18.00;
});

var newCost = "";
theCost.forEach(function(el, index, arr){
  newCost += "<h3>" + el.title + "</h3>" + "<h2>" + "Price: " + el.price + "</h2>";
})

document.getElementById("answer2").innerHTML = newCost;

//answer3

var currencyCode = items.filter(function(el){
  return el.currency_code === "GBP";
});

var gbp = "";
currencyCode.forEach(function(el){
  gbp += "<h3>" + el.title + "</h3>" + "<h2>" + "GBP" + el.price + "</h2>";
});

document.getElementById("answer3").innerHTML = gbp;

//answer4

var itsWood = items.filter(function(el) {
  return el.materials.includes("wood");
});

var goodWood = "";
itsWood.forEach(function(el){
  goodWood += "<h2>" + el.title + "</h2>";
});

document.getElementById("answer4").innerHTML = goodWood;

//answer5

var someMaterials = items.filter(function(el){
  return el.materials.length >= 8;
});

// var eightOrMore = "";
// someMaterials.forEach(function(el){
//   eightOrMore += "<h3>" + el.title + el.materials.length + "</h3>";
// })

var questionFive = "";
someMaterials.forEach(function(el, index, arr){
  questionFive += "<h3>" + el.title + "<h3>" + "<h2>" +  "total:" + "</h2" + "<h3>" + el.materials.length + "</h3>";
  questionFive += "<li>" + el.materials + "</li>";
});


document.getElementById("answer5").innerHTML = questionFive;

//question 6

var iDid = items.filter(function(el){
  return el.who_made === "i_did";
});

iDid.length;

document.getElementById("answer6").innerHTML = iDid.length;
