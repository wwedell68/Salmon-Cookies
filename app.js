'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var entireTable = document.getElementById('cookieTableRow');
var locationStores = [];

function headerRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Locations';
  trEl.appendChild(thEl);
  for (var j = 0; j < hours.length; j++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[j];
    trEl.appendChild(thEl);
  }
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = 'dayTotals';
  trEl.appendChild(tdEl2);
  entireTable.appendChild(trEl);
}

function NewStore(storeName, minCustomers, maxCustomersParameter, averageCookiesValue) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomersParameter = maxCustomersParameter;
  this.averageCookiesValue = averageCookiesValue;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  for (var i = 0; i < hours.length; i++) {
    var random = Math.floor(Math.random() * (this.maxCustomersParameter - this.minCustomers + 1)) + this.minCustomers;
    var averageCustomers = Math.floor(this.averageCookiesValue * random);
    this.cookiesPerHour.push(averageCustomers);
  }
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  var storeTotal = 0;
  for (var j = 0; j < hours.length; j++) {
    tdEl = document.createElement('td');
    storeTotal = storeTotal + this.cookiesPerHour[j];
    tdEl.textContent = this.cookiesPerHour[j];
    trEl.appendChild(tdEl);
  }
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = storeTotal;
  trEl.appendChild(tdEl2);
  entireTable.appendChild(trEl);
  locationStores.push(this);
}

function makeTotalsRow() {

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  var netTotals = 0;
  for (var i = 0; i < hours.length; i++) {
    var totalCookiesByHour = 0;
    for (var j = 0; j < locationStores.length; j++) {
      totalCookiesByHour += locationStores[j].cookiesPerHour[i];
      netTotals += locationStores[j].cookiesPerHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesByHour;
    trEl.appendChild(tdEl);
  }
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = netTotals;
  trEl.appendChild(tdEl2);
  entireTable.appendChild(trEl);
}

headerRow();

new NewStore('First and Pike', 23, 65, 6.3);
new NewStore('SeaTac Airport', 3, 24, 1.2);
new NewStore('Seattle Center', 11, 38, 3.7);
new NewStore('Captiol Hill', 20, 38, 2.3);
new NewStore('Alki', 2, 16, 4.6);

makeTotalsRow();
