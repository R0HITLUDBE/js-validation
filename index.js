const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementsByTagName("p").innerHTML = "";
  validationFunc(1);
});

form.addEventListener("input", (e) => {
  e.preventDefault();
  document.getElementsByTagName("p").innerHTML = "";
  if (e.value === "") {
  } else {
    validationFunc(0);
  }
});

function validationFunc(count) {
  var firstname = document.getElementById("firstname").value;
  var middlename = document.getElementById("middlename").value;
  var lastname = document.getElementById("lastname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var currentaddress = document.getElementById("currentaddress").value;
  var password = document.getElementById("password").value;
  var retypepassword = document.getElementById("retypepassword").value;
  var text = "";
  var submitcount = count;
  const phonenumbervalid = /^[6-9]\d{9}$/gi;
  const passwordvalid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
  const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (specialCharacter.test(firstname)) {
    document.getElementById("firstname-error").innerHTML =
      "Invalid first name.";
    count++;
    // return false;
  } else {
    document.getElementById("firstname-error").innerHTML = "";
  }
  if (specialCharacter.test(middlename)) {
    document.getElementById("middlename-error").innerHTML =
      "Invalid middle name.";
    count++;

    // return false;
  } else {
    document.getElementById("middlename-error").innerHTML = "";
  }
  if (specialCharacter.test(lastname)) {
    document.getElementById("lastname-error").innerHTML = "Invalid last name.";
    // return false;
    count++;
  } else {
    document.getElementById("lastname-error").innerHTML = "";
  }
  if (phone === "") {
    document.getElementById("phone-error").innerHTML = "";
  } else {
    if (!phonenumbervalid.test(phone)) {
      document.getElementById("phone-error").innerHTML = "Invalid phone number";
      // return false;
      count++;
    } else {
      document.getElementById("phone-error").innerHTML = "";
    }
  }
  if (password === "") {
  } else {
    if (!passwordvalid.test(password)) {
      document.getElementById("password-error").innerHTML =
        "Enter a valid password (password should contain at least one Capital letter, and one Numeric and should be a minimum 8 character) ";
      // return false;
      count++;
    } else {
      document.getElementById("password-error").innerHTML = "";
    }
  }
  if (password !== retypepassword) {
    document.getElementById("passwordsame-error").innerHTML =
      "Password do not match";
    count++;

    // return false;
  } else {
    document.getElementById("passwordsame-error").innerHTML = "";
  }

  if (
    submitcount > 0 &&
    password != "" &&
    retypepassword != "" &&
    firstname != "" &&
    lastname != "" &&
    email != "" &&
    phone != "" &&
    currentaddress != ""
  ) {
    document.getElementById("registration-success").innerHTML =
      "Registration success";
    // return true;
  } else {
    return false;
  }
}
