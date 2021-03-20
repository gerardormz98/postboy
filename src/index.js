import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter";
import './styles/styles.scss';

// TODO: Fix react autosuggest styles.
// TODO: Create simple footer.
// TODO: Change tab title with double click.

ReactDOM.render(
  	<React.StrictMode>
		<AppRouter />
  	</React.StrictMode>,
  	document.getElementById('root')
);
