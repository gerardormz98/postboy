import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter";
import './styles/styles.scss';

// TODO: Add tabs tree view on left side.
// TODO: Add history bar feature.

ReactDOM.render(
  	<React.StrictMode>
		<AppRouter />
  	</React.StrictMode>,
  	document.getElementById('root')
);
