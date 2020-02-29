import ReactDOM from "react-dom";
import React from 'react';
import App from "./js/components/App";

// Render the React App component only when the HTML Loader has succesfully bundled the basic HTML file of your react app.
const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;