import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <Provider store={store}>
    <MoralisProvider
      appId="mmGtpbd1lPs52AZ6Vk8yHnY7qZq9afUpXTMQbG2S"
      serverUrl="https://1unulvgrwaio.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
    ,
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
