import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import STORE from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <Provider store={STORE}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
