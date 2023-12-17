function setRouter() {
    const path = window.location.pathname;

    switch (path) {
        case "register.html":

        case "index.html":

        case "forget-password.html":
                if (localStorage.getItem("token")) {
                    window.location.pathname = "dashboard.html";
                }
                break;    

        case "dashboard.html":
        case "budget.html":
        case "expenses.html":
        case "summary.html":
            if (localStorage.getItem("token") == null) {
                window.location.pathname = "index.html";
            }
            break;
         

        default:
            break;
    }
}

const url = "https://066b-216-247-59-244.ngrok-free.app/moneytracker-backend/public";

export { url, setRouter };

