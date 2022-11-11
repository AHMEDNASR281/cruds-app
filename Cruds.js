let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

// Get total
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
  } else {
    total.innerHTML = "";
  }
}
// create product
if (localStorage.product != null) {
  data = JSON.parse(localStorage.product);
} else {
  let data = [];
}

submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  if (newPro.count > 1) {
    for (let i = 0; (i = newPro.count); i++) {
      data.push(newPro);
    }
  } else {
    data.push(newPro);
  }

  localStorage.setItem("product", JSON.stringify(data));

  clearData();
  showData();
};
// save local storage
// clear inputs
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}
// read

function showData() {
  let table = "";
  for (let i = 0; i < data.length; i++) {
    table += `
      <tr>
              <td>${i}</td>
              <td>${data[i].title}</td>
              <td>${data[i].price}</td>
              <td>${data[i].taxes}</td>
              <td>${data[i].ads}</td>
              <td>${data[i].discount}</td>
              <td>${data[i].total}</td>
              <td>${data[i].category}</td>
              <td><button id="update">update</button></td>
              <td><button onclick='deleteData(${i})' id="delete">delete</button></td>
            </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (data.length > 0) {
    btnDelete.innerHTML = `
     <button onclick='deleteAll()'>Delete All</button>
    `;
  } else {
    btnDelete.innerHTML = "";
  }
}
showData();
// count
// delete

function deleteData(i) {
  data.splice(i, 1);
  localStorage.product = JSON.stringify(data);
  showData();
}

function deleteAll() {
  localStorage.clear();
  data.splice(0);
  showData();
}
// update
// search
// clean data
