import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

if (document.getElementById("app")) {
    ReactDOM.hydrate(<Main />, document.getElementById("app"));
}
