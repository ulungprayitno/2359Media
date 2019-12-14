import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import * as serviceWorker from "./service-worker";

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
serviceWorker.unregister();
