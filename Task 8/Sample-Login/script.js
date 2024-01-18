function attemptLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var email = document.getElementById("email").value;

       
        if (!username || !password || !email) {
            document.getElementById("errorMessage").innerHTML = "All fields are required";
            return;
        }

       
        document.getElementById("errorMessage").innerHTML = "";
}