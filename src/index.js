import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header";
import MainPage from "./components/MainPage";

import './styles/styles.scss';

// TODO: About page with react router.
// TODO: Change tab title with double click.

ReactDOM.render(
  	<React.StrictMode>
		<Header />
		<MainPage />
  	</React.StrictMode>,
  	document.getElementById('root')
);
