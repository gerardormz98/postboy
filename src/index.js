import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header";
import MainPage from "./components/MainPage";

import './styles/styles.scss';

// TODO: Change context format (example in reducers/tab.js, https://stackoverflow.com/questions/61620841/handle-nested-context-providers)
// TODO: Use localstorage to save current tabs.
// TODO: Clear session button with alert.
// TODO: About page with react router.

// TODO: Change tab title with double click.

ReactDOM.render(
  	<React.StrictMode>
		<Header />
		<MainPage />
  	</React.StrictMode>,
  	document.getElementById('root')
);
