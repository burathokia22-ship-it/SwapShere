function hideAll() {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("registerSection").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("contactSection").style.display = "none";

  // 🔥 ADD THESE
  document.getElementById("searchSection").style.display = "none";
  document.getElementById("itemsSection").style.display = "none";
}
function showHome() {
  hideAll();
  document.getElementById("homeSection").style.display = "block";
  document.getElementById("searchSection").style.display = "block";
  document.getElementById("itemsSection").style.display = "flex";
}
// function showHome() {
//   hideAll();
//   document.getElementById("homeSection").style.display = "block";
//   document.getElementById("itemsSection").style.display = "block";
// }

function showLogin() {
  hideAll();
  document.getElementById("loginSection").style.display = "block";
}

function showRegister() {
  hideAll();
  document.getElementById("registerSection").style.display = "block";
}

function showContact() {
  hideAll();
  document.getElementById("contactSection").style.display = "block";
}

function register() {
  let u = regUser.value;
  let p = regPass.value;
  localStorage.setItem(u, p);
  alert("Registered!");
}

function login() {
  let u = loginUser.value;
  let p = loginPass.value;

  if (localStorage.getItem(u) === p) {
    localStorage.setItem("user", u);
    showDashboard();
  } else {
    alert("Wrong details");
  }
}

// function showDashboard() {
//   hideAll();
//   dashboard.style.display = "block";
//   userName.innerText = "Welcome " + localStorage.getItem("user");
//   loadItems();
// }

function showDashboard() {
  hideAll();
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("userName").innerText =
    "Welcome " + localStorage.getItem("user");
  loadItems();
}
function logoutUser() {
  localStorage.removeItem("user");
  showHome();
}

function addItem() {
  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.push({
    name: itemName.value,
    price: itemPrice.value,
    image: itemImage.value
  });

  localStorage.setItem("items", JSON.stringify(items));
  loadItems();
}

function loadItems() {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  itemsContainer.innerHTML = "";

  items.forEach(i => {
    itemsContainer.innerHTML += `
      <div class="card">
        <img src="${i.image}" width="100">
        <h3>${i.name}</h3>
        <p>₹${i.price}</p>
      </div>
    `;
  });
}

function searchItems() {
  let searchBox = document.getElementById("search");
  if (!searchBox) return;

  let val = searchBox.value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    let name = p.querySelector("h3").innerText.toLowerCase();
    p.style.display = name.includes(val) ? "inline-block" : "none";
  });
}

// function searchItems() {
//   let val = search.value.toLowerCase();
//   let products = document.querySelectorAll(".product");

//   products.forEach(p => {
//     let name = p.querySelector("h3").innerText.toLowerCase();
//     p.style.display = name.includes(val) ? "inline-block" : "none";
//   });
// }

showHome();