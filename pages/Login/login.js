function Login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "user@gmail.com" && password == "123") {
        window.location.href = "../main/homepage.html"
    }
    else if (email == "vendor@gmail.com" && password == "456") {
        window.location.href = "../vendor/notifications.html"
    }
    else {
        alert("Invalid username and password");
    }
}