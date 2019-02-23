'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locationStores = [];

function NewStore(storeName, minCustomers, maxCustomersParameter, averageCookiesValue) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomersParameter = maxCustomersParameter;
  this.averageCookiesValue = averageCookiesValue;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  locationStores.push(this);
}
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

NewStore.prototype.populateCustomers = function () {
  for (var i = 0; i < hours.length; i++) {
    var randomNumberOfCustomers = random(this.minCustomers, this.maxCustomersParameter);
    this.customersPerHour.push(randomNumberOfCustomers);
  }
};

NewStore.prototype.calculateCookiesPerHour = function () {
  this.populateCustomers();
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.averageCookiesValue));
    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
  }
};

NewStore.prototype.render = function () {
  this.calculateCookiesPerHour();
  var cookieTable = document.getElementById('cookieTableRow');
  var cookieTableRow = document.createElement('tr');
  var cookieTableData = document.createElement('td');

  cookieTableData.textContent = this.storeName;
  cookieTableRow.appendChild(cookieTableData);
  for (var i in hours) {
    cookieTableData = document.createElement('td');
    cookieTableData.textContent = this.cookiesPerHour[i];
    cookieTableRow.appendChild(cookieTableData);
  }
  cookieTableData = document.createElement('td');
  cookieTableData.textContent = this.totalCookies;
  cookieTableRow.appendChild(cookieTableData);
  cookieTable.appendChild(cookieTableRow);
};
function renderAllLocationStores() {
  var cookieTableRow = document.createElement('tr');
  var storeLocationTableTab = document.createElement('td');
  storeLocationTableTab.textContent = 'Store Location';
  cookieTableRow.appendChild(storeLocationTableTab);
  for (var j in hours) {
    var cookieTableData = document.createElement('td');
    cookieTableData.textContent = hours[j];
    cookieTableRow.appendChild(cookieTableData);
  }
  var storeTotalTableTab = document.createElement('td');
  storeTotalTableTab.textContent = 'Total Cookies';
  cookieTableRow.appendChild(storeTotalTableTab);


  for (var i in locationStores) {
    locationStores[i].render();

  }

}

new NewStore('First and Pike', 23, 65, 6.3);
new NewStore('SeaTac Airport', 3, 24, 1.2);
new NewStore('Seattle Center', 11, 38, 3.7);
new NewStore('Captiol Hill', 20, 38, 2.3);
new NewStore('Alki', 2, 16, 4.6);

renderAllLocationStores();

function createFormStore() {
  var nameOfStore = document.getElementById('storeName');
  var minCustomersNew = document.getElementById('minCustomers');
  var maxCustomersNew = document.getElementById('maxCustomers');
  var avgCookiesSold = document.getElementById('avgCookies');
  var createNewStore = new NewStore(nameOfStore, minCustomersNew, maxCustomersNew, avgCookiesSold);
  createNewStore.render();
}

createFormStore();
