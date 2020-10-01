import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
    register(`${process.env.BASE_URL}service-worker.js`, {
        cached() {
            console.log("Content has been cached for offline use.");
        },
        error(error) {
            console.error("Error during service worker registration:", error);
        },
        offline() {
            console.log("No internet connection found. App is running in offline mode.");
        },
        ready() {
            console.log(
                "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB\n\n"
            );
        },
        registered() {
            console.log("Service worker has been registered.");
        },
        updated(registration) {
            console.log("New content is available; please refresh.");
            registration.unregister().catch(console.error);
            setTimeout(() => {
                window.confirm("New content is available, do you want to refreh this page?") ? window.location.reload(true) : console.log("Waiting for next reload...");
            }, 1000);
        },
        updatefound() {
            console.log("New content is downloading.");
        }
    });
}
