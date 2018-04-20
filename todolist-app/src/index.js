import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import {render} from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
