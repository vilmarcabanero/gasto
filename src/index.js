import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from 'App';
import rootReducer from 'redux/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path='/' component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
