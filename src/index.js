import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTING REDUX PROVIDER AND STORE
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
