import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import getStore from './store';

import Event from './Event';
import Accommodations from './Accommodations';
import Travel from './Travel';
import Registry from './Registry';
import Placeholder from './Placeholder';

const store = getStore({});
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/accommodations" component={Accommodations} />
      <Route path="/travel" component={Travel} />
      <Route path="/registry" component={Registry} />
      <Route path="*" component={Event} />
    </Router>
  </Provider>,
  document.getElementById('mount')
);
