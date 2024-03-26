import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {ContextProvider,UserContextProvider} from "./components/Context.js"

const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<ContextProvider><UserContextProvider><App /></UserContextProvider></ContextProvider>);