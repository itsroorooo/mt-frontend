import { url, setRouter } from "../router/router.js";

setRouter();


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.onsubmit = async (e) => {
        e.preventDefault();

        clearErrors();

        document.querySelector("#loginForm button").disabled = true;
        document.querySelector("#loginForm button")
            .innerHTML =
            '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div>';

        const formData = new FormData(loginForm);

        const response = await fetch(url + "/api/loginuser", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });

        if (response.ok) {
            const json = await response.json();
            console.log(json);

            localStorage.setItem("token", json.token);
            
            successMessage("Successfully Login!");  

            loginForm.reset();

            window.location.href = "dashboard.html";

        } else if (response.status == 422) {
            const json = await response.json();

           setTimeout(() => {
                clearErrors();
            }, 5000);

            Object.keys(json.errors).forEach((field) => {
                const inputField = document.getElementById(field);
                const errorDiv = document.getElementById(`${field}_Error`);
                if (errorDiv && inputField) {
                    errorDiv.innerHTML = json.errors[field][0];
                    inputField.setCustomValidity(json.errors[field][0]);
                    inputField.classList.add('is-invalid');
                }
            });

            console.log(json.errors);
        }

        document.querySelector("#loginForm button").disabled = false;
        document.querySelector("#loginForm button").innerHTML = "Sign in";
    };
});

function successMessage(message) {
    const successMessageElement = document.getElementById("successMessage");

    if (successMessageElement) {
        successMessageElement.textContent = message;
        successMessageElement.hidden = false;
    }
}

function clearErrors() {
    const formElements = document.getElementById("loginForm").elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        element.setCustomValidity(""); 
        element.classList.remove("is-invalid"); 

        const errorElement = document.getElementById(`${element.id}_Error`);
        if (errorElement) {
            errorElement.innerHTML = ""; 
        }
    }
}
