import { render } from "solid-js/web";
import { Router } from "@solidjs/router"

// Application
import App from "./App";

// Styles
import "./index.css"

render(
    () => (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById("root")!
)