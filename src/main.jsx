// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <div className='w-full'>
//       <App />
//     </div>
//   </React.StrictMode>,
// )
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <div className=" w-full">
//         <App />
//       </div>

//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom"; // Import HashRouter instead of BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className="w-full">
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>
);
