// ./app.js

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./serviceworker.js").then(
            function (registration) {
                console.log("Hurray! Service workers with scope: ", registration.scope);
            },
            function (err) {
                console.log("Oops! ServiceWorker registration failed: ", err);
            }
        );
    });
}