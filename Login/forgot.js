// task in this first take the curr username from the localstorage then for that user you need to add new passward where the user will set the new passward and store it into the localstorage.

// after this whatever the user try to add into the setpassward field that will again check in the Re-enter passward field if it correct then user able to click on the submit btn of wrong then need to re enter correct password

// then, when the new passward is set succesfully then it automatically redirect to the login page.

// first take the curr username from the localstorage

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // check  user exists
  const storedUsername = localStorage.getItem("regUsername");

  if (!storedUsername) {
    alert("No user found, Please register first.");
    window.location.href = "../Register/Register.html";
    return;
  }

  // if user found then change the password here

  // get values from i/p fields
  const newPassword = document.getElementById("setNewPassword").value.trim();

  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  // check both setpassward field and re-enter password field
  if (newPassword !== confirmPassword) {
    alert("Password doesn't match");
    return;
  }

  // if the both setpassword and confirmpassward are equal then set the newpassword to the localstorage
  localStorage.setItem("regPassword", confirmPassword);

  alert("Password Changes succesfully");

  // redirect to login page.
  window.location.href = "index.html";
});


