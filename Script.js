const products = [
  { name: "iPhone 13", price: "₹65,000", img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg" },
  { name: "Redmi Note 11", price: "₹15,000", img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note11.jpg"}
];

let current = 0;

function registerUser() {
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    password: document.getElementById("password").value
  };
  if (user.name && user.email && user.mobile && user.password) {
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Registration Successful!");
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
  } else { alert("Please fill all fields!"); }
}

function loginUser() {
  let storedUser = JSON.parse(localStorage.getItem("userData"));
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;

  if (storedUser && email === storedUser.email && pass === storedUser.password) {
    alert("Login Successful!");
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("productPage").style.display = "block";
    showProduct(current);
  } else { alert("Invalid Email or Password!"); }
}

function showProduct(index) {
  document.getElementById("pName").innerText = products[index].name;
  document.getElementById("pImg").src = products[index].img;
  document.getElementById("pPrice").innerText = "Price: " + products[index].price;
}

function nextProduct() {
  current = (current + 1) % products.length;
  showProduct(current);
}

function prevProduct() {
  current = (current - 1 + products.length) % products.length;
  showProduct(current);
}

function addToCart() {
  alert(products[current].name + " added to cart!");
}

function viewInfo() {
  let storedUser = JSON.parse(localStorage.getItem("userData"));
  if (storedUser) {
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("showName").innerText = storedUser.name;
    document.getElementById("showEmail").innerText = storedUser.email;
    document.getElementById("showMobile").innerText = storedUser.mobile;
  } else {
    alert("No user information found!");
  }
}
