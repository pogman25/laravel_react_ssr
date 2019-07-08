import React from "react";
import Main from './Main';
import ReactDOMServer from "react-dom/server";

let { data } = context;

const html = ReactDOMServer.renderToString(<Main dataList={data} />);
dispatch(html);
