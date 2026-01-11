// Here the user details like username and password in stored into the LocalStorage so here no need to create another seperate variable to get the data again we direcly get it from the localStorage.

// Block login page if user is already logged in.
// not give backward if the user is already login.
// if (localStorage.getItem("isLoggedIn") === "true") {
//   window.location.replace("home.html");
// }

const loginbtn = document.querySelector(".loginBtn");

loginbtn.addEventListener("click", (event) => {
  event.preventDefault();

  // first get the data from the loginform
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // now get the data from the localstorage

  // take the 'regUsername and password' from the register.js localStorage.
  const storedUsername = localStorage.getItem("regUsername");
  const storedPassword = localStorage.getItem("regPassword");

  // here you check the user enter password is equal to localstorage username and password or not.
  if (username === storedUsername && password === storedPassword) {
    alert("Login Successful!");
    console.log("Logge in user: " + username);

    // mark user as logged in user.
    localStorage.setItem("isLoggedIn", "true");

    // redirect to home page.
    // replace() will remove the login page from the brower history
    // back btn will not return to login page.
    window.location.replace("../Home/home.html");
  } else {
    alert("Invalid username or passward");
  }

  // reset the form
  // here i not use the .getElementByClassName() because it returns the collection
  document.querySelector(".loginForm").reset();
});
