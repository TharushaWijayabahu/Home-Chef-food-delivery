function Login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "user@gmail.com" && password == "123") {
        window.location.href = "../HomeUser"
    }
    else if (email == "vendor@gmail.com" && password == "456") {
        window.location.href = "../HomeVendor"
    }
    else {
        alert("Invalid username and password");
    }
}