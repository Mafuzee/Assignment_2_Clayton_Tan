function validateForm() {
    var fName = document.forms["form-grid"]["fName"].value;
    var lName = document.forms["form-grid"]["lName"].value;
    var email = document.forms["form-grid"]["email"].value;
    var phone = document.forms["form-grid"]["phone"].value;
    if (fName =="") {
        alert("First name must be filled out");
        return false;
        }
    if (lName =="") {
        alert("Last name must be filled out");
        return false;
        }
    if (email == "") {
        alert("Email must be filled out");
        return false;
        }
    if (phone =="") {
        alert("Phone Number must be filled out");
        return false;
        }
}

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var currentDisplay = window.getComputedStyle(menu).display;

    if (currentDisplay === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
}