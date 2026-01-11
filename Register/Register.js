const registerBtn = document.querySelector(".registerBtn");

// if user already exists
if (localStorage.getItem("isLoggedIn") === "true") {
  window.location.replace("../Home/home.html");
}

registerBtn.addEventListener("click", (event) => {
  // prevent the preload
  event.preventDefault();

  // get the form data.
  const regusername = document.getElementById("regusername").value.trim();
  console.log(regusername);

  const regemail = document.getElementById("regemail").value.trim();
  console.log(regemail);

  const regpassword = document.getElementById("regpassword").value.trim();
  console.log(regpassword);

  // stored in localStorage
  // i need the values in the "" this into the login.js file
  localStorage.setItem("regUsername", regusername);
  localStorage.setItem("regEmail", regemail);
  localStorage.setItem("regPassword", regpassword);

  alert("registration Successful");

  // after succesfull registeration reset the form
  document.querySelector(".registerForm").reset();

  // redirect to login page
  window.location.href = "../Login/index.html";
});
