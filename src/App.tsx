import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/App.module.scss";
import { AssignTrialBalanceForm } from "./components";
import { AccountMapperTheme } from "./styles/AccountMapperTheme";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={AccountMapperTheme}>
        <AssignTrialBalanceForm />
      </ConfigProvider>
    </div>
  );
}

export default App;
