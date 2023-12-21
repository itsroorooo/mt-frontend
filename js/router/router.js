function setRouter() {
    const path = window.location.pathname;

    switch (path) {
        case "/mt-frontend/register.html":

        case "/mt-frontend/index.html":

        case "/mt-frontend/forget-password.html":

                case "/mt-frontend/reset-password.html":

        case "/mt-frontend/forget-password.html":
                if (localStorage.getItem("token")) {
                    window.location.pathname = "/mt-frontend/dashboard.html";
                }
                break;    

        case "/mt-frontend/dashboard.html":
        case "/mt-frontend/budget.html":
        case "/mt-frontend/expenses.html":
        case "/mt-frontend/summary.html":
            if (localStorage.getItem("token") == null) {
                window.location.pathname = "/mt-frontend/index.html";
            }
            break;
         

        default:
            break;
    }
}

const url = "https://70c4-216-247-48-37.ngrok-free.app/moneytracker-backend/public";

export { setRouter, url };

