import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {rootReducer} from './reducers';


import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, rootElement);












// import React from 'react';
// import ReactDOM from 'react-dom';
// //import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// //import in your reducer
// import App from './App';
// import 'bulma/css/bulma.css';
// import './styles.scss';

// const store = createStore(); //argue in your reducer

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Provider><App /></Provider>, rootElement);
