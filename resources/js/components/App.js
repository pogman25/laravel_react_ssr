import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

const data = window.__INITIAL_STORE__ || [];

if (document.getElementById("app")) {
    ReactDOM.hydrate(<Main dataList={data} />, document.getElementById("app"));
}
