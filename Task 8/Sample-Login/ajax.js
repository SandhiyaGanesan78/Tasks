var func = new XMLHttpRequest();
        func.onreadystatechange = function () {
            if (func.readyState === 4) {
                if (func.status === 200) {
                    var response = JSON.parse(func.responseText);
                    if (response.success) {
                        alert("Login successful!");
                    } else {
                        document.getElementById("errorMessage").innerHTML = response.message;
                    }
                } else {
                    document.getElementById("errorMessage").innerHTML = "Error during login request";
                }
            }
        };