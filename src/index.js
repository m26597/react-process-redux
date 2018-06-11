import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Hello from './Hello';

const store = configureStore();
ReactDOM.render(
        <Provider store = { store }>
            <Hello />
        </Provider>, 
        document.getElementById('root')
    );
registerServiceWorker();
