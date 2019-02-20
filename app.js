// 'use strict';

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var allLocations = [];
// var grandTotal = 0;
// var totalCookiesEachHour = 0;
// var totalCookiesSold = 0;

// function MakeLocation(name, minCust, maxCust, avgCookies) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookies = avgCookies;
//   this.randomCustPerHour = [];
//   this.cookiesSoldPerHour = [];
//   this.totalCookiesPerStore = 0;
//   allLocations.push(this);
// }

// MakeLocation.prototype.calcRanCustByHour = function () {
//   for (var i = 0; i < hours.length; i++) {
//     this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// };

// MakeLocation.prototype.calcCookiesSoldPerHour = function () {
//   for (var j = 0; j < hours.length; j++) {
//     this.cookiesSoldPerHour.push(Math.round(this.randomCustPerHour[j] * this.avgCookies));

//   }
// };

// MakeLocation.prototype.calcTotalCookiesPerStore = function () {
//   for (var k = 0; k < hours.length; k++) {
//     this.totalCookiesPerStore += this.cookiesSoldPerHour[k];
//   }
//   return this.totalCookiesPerStore;
// };

// function newLocations() {
//   new MakeLocation('First and Pike', 23, 65, 6.3);
//   new MakeLocation('SeaTac Airport', 3, 24, 1.2);
//   new MakeLocation('Seattle Center', 11, 38, 3.7);
//   new MakeLocation('Capitol Hill', 20, 38, 2.3);
//   new MakeLocation('Alki', 2, 16, 4.6);
// }

// function headerRow() {
//   var entireTable = document.getElementById('cookie-stands');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   entireTable.appendChild(trEl);
//   thEl.textContent = 'Store Locations';
//   trEl.appendChild(thEl);
//   for (var j = 0; j < hours.length; j++) {
//     thEl = document.createElement('th');
//     thEl.textContent = hours[j];
//     trEl.appendChild(thEl);
//   }

//   function tableData() {
//     var entireTable = document.getElementById('cookie-stands');
//     entireTable.innerHTML = '';
//     headerRow ();
//     for (var i = 0; allLocations.length; i++){
//       var trEl = document.createElement('tr');
//       entireTable.appendChild(trEl);
//       var tdEl = document.createElement('td');
//       entireTable.appendChild(tdEl);
//       tdEl.textContent = allLocations[i].name;
//       for (j = 0; j < hours.length + 1; j++);{
//         tdEl = document.createElement('td');
//         entireTable.appendChild(tdEl);
//         tdEl.textContent = allLocations[i].cookiesSoldPerHour[j];
//         if (j === 15){
//           entireTable.appendChild(tdEl);
//           tdEl.textContent = allLocations[i].totalCookiesPerStore;
//         }
//       }

//     }
//   }

//   function makeTotalsRow() {
//     var cookiestands = document.getElementById('cookiestands');
//     var trEl = document.createElement('tr');
//     cookiestands.appendChild(trEl);
//     var tdEl = document.createElement('td');
//     cookiestands.appendChild(tdEl);
//     tdEl.textContent = 'Totals';
//     var netTotals = 0;
//     for (var i = 0; i < hours.length; i++) {
//       var totalCookiesByHour = 0;
//       for (var j = 0; j < allLocations.length; j++) {
//         totalCookiesByHour += allLocations[j].cookiesSoldByHour[i];
//         netTotals += allLocations[j].cookiesSoldByHour[i];
//       }
//       tdEl = document.createElement('td');
//       cookiestands.appendChild(tdEl);
//       tdEl.textContent = totalCookiesByHour;
//     }
//     tdEl = document.createElement('td');
//     cookiestands.appendChild(tdEl);
//     tdEl.textContent = netTotals;
//   }

//   function createForm(event){
//     event.preventdefault();
//     var customerForm = document.getElementById('store-form');
//     var name = customerForm.storeName.value;
//     var newStoreMinCust = parseInt(customerForm.minCust.value);
//     var newStoreMaxCust = parseInt(customerForm.maxCust.value);
//     var newStoreAvgCook = parseInt(customerForm.avgCook.value);
//     if (!newStoreMinCust || newStoreMaxCust || newStoreAvgCook) {
//       alert('Please insert the correct values');
//     } else {
//       var newStore = new MakeLocation(name, newStoreMinCust, newStoreMaxCust, newStoreAvgCook);
//       newStore.calcRanCustByHour();
//       newStore.calcCookiesSoldPerHour();
//       newStore.totalCookiesPerStore();
//       tableData();
//       makeTotalsRow();
//     }
//   }
// }

// var userSubmitButton = document.getElementById('button').addEventListener('click', createForm);

// function runTable() {
//   newLocations();
//   for(var i = 0; i < allLocations.length; i++) {
//     allLocations[i].calcRanCustByHour();
//     allLocations[i].calcCookiesSoldPerHour();
//     allLocations[i].calcTotalCookiesPerStore();
//   }
//   headerRow();
//   tableData();
//   makeTotalsRow();
// }
// runTable();
