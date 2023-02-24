import { render } from "solid-js/web";

// Application
import App from "./App";

// Styles
import "./index.css"

render(
    () => <App />,
    document.getElementById("root")!
)