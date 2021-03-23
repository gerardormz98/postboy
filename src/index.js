import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter";
import './styles/styles.scss';

// TODO: Always show scroll bar, change style
// TODO: Tab overflow scroll.

// TODO: Add history bar feature.

ReactDOM.render(
  	<React.StrictMode>
		<AppRouter />
  	</React.StrictMode>,
  	document.getElementById('root')
);
