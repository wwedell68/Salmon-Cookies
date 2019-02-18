// 'use strict';

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var allLocations = [];
// var totalCookiesByHour = 0;
// var total = 0;
// var stuffForFirstRow = ['coffee', 2, 4, 6, 8, 10];
// var stuffForSecondRow = ['table', 3, 5, 7, 9, 11];


// var tableEl = document.getElementById('coffeeTable');
// console.log(tableEl);
// function tableRowMaker(h) {

//   var trEl = document.createElement('tr');

//   for (var i = 0; i < h.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = h[i];
//     trEl.appendChild(tdEl);
//   }
//   tableEl.appendChild(trEl);

// }

// function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
//   this.name = name;
//   this.minCustPerHour = minCustPerHour;
//   this.maxCustPerHour = maxCustPerHour;
//   this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
//   this.randCustByHour = [];
//   this.avgCookiesSoldPerHour = [];
//   this.totalCookies = 0;
//   allLocations.push(this);
//   this.calcRandCustByHour; function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustByHour[i]);

// }

// function makeStands() {
//   new MakeLocation('First and Pike', 23, 65, 6.3);
//   new MakeLocation('SeaTac Airport', 3, 24, 1.2);
//   new MakeLocation('Seattle Center', 11, 38, 3.7);
//   new MakeLocation('Capitol Hill', 20, 38, 2.3);
//   new MakeLocation('Alki', 2, 16, 4.6);

// }

// var tableEl = document.getElementById('cookiestands');
// console.log(tableEl);

// function makeHeaderRow() {
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'hours blah';
//   trEl.appendChild(thEl);
//   for (var i in hours) {
//     var headCol = document.createElement('th');
//     headCol.textContent = hours[i];
//     tableEl.appendChild(thEl);
//     trEl.appendChild(headCol);

//   }
// }
// // var tableEl = document.getElementById('cookiestands');
// // console.log(tableEl);

// // function makeRow(k) {
// //   var trEl = document.createElement('tr');
// //   for (var i = 0; i < k.length; i++) {
// //     var thEl = document.createElement('th');
// //     tdEl.textContent = k[i];
// //     trEl.appendChild(thEl);
// //   }
// //   tableEl.appendChild(trEl);
// // }

// tableRowMaker(stuffForFirstRow);
// tableRowMaker(stuffForSecondRow);

// makeStands();
// makeHeaderRow();
// tableRowMaker(hours);
