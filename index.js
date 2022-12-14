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
  var password = document.getElementById("password").value;
  var retypepassword = document.getElementById("retypepassword").value;
  var address = document.getElementById("currentaddress").value;
  const phonenumbervalid = /^[6-9]\d{9}$/gi;
  const passwordvalid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
  const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var submitcount = count;
  var phonevalid = false;
  if (specialCharacter.test(firstname) || firstname.length > 20) {
    document.getElementById("firstname-error").innerHTML =
      "Invalid first name.";

    // return false;
  } else {
    document.getElementById("firstname-error").innerHTML = "";
  }
  if (specialCharacter.test(middlename) || middlename.length > 20) {
    document.getElementById("middlename-error").innerHTML =
      "Invalid middle name.";

    // return false;
  } else {
    document.getElementById("middlename-error").innerHTML = "";
  }
  if (specialCharacter.test(lastname) || lastname.length > 20) {
    document.getElementById("lastname-error").innerHTML = "Invalid last name.";
    // return false;
  } else {
    document.getElementById("lastname-error").innerHTML = "";
  }

  if (address.length > 200) {
    document.getElementById("address-error").innerHTML = "Invalid address.";
  }

  if (phone === "") {
    document.getElementById("phone-error").innerHTML = "";
  } else {
    if (!phonenumbervalid.test(phone)) {
      document.getElementById("phone-error").innerHTML = "Invalid phone number";
      // return false;
    } else {
      document.getElementById("phone-error").innerHTML = "";
      phonevalid = true;
    }
  }
  if (password === "") {
  } else {
    if (!passwordvalid.test(password)) {
      document.getElementById("password-error").innerHTML =
        "Enter a valid password (password should contain at least one Capital letter, and one Numeric and should be a minimum 8 character) ";
      // return false;
    } else {
      document.getElementById("password-error").innerHTML = "";
    }
  }
  if (retypepassword === "") {
  } else {
    if (password !== retypepassword) {
      document.getElementById("passwordsame-error").innerHTML =
        "Password do not match";

      // return false;
    } else {
      document.getElementById("passwordsame-error").innerHTML = "";
    }
  }

  if (count > 0) {
    if (
      password != retypepassword ||
      specialCharacter.test(firstname) ||
      firstname.length > 20 ||
      specialCharacter.test(middlename) ||
      middlename.length > 20 ||
      specialCharacter.test(lastname) ||
      lastname.length > 20 ||
      !passwordvalid.test(password) ||
      !phonevalid
    ) {
      console.log("unsucceeded ????");
    } else {
      alert("Registration success");
      getElementById("success").innerHTML = "Registration success";
      form.reset();
      submitcount = 0;
    }
  } else {
  }
}
