function setRouter() {
    const path = window.location.pathname;

    switch (path) {
        case "/register.html":

        case "/login.html":

        case "/forget-password.html":
                if (localStorage.getItem("token")) {
                    window.location.pathname = "/dashboard.html";
                }
                break;    

        case "/dashboard.html":
        case "/budget.html":
        case "/expenses.html":
        case "/summary.html":
            if (localStorage.getItem("token") == null) {
                window.location.pathname = "/login.html";
            }
            break;
         

        default:
            break;
    }
}

const url = "http://moneytracker-backend.test";

export { url, setRouter };

