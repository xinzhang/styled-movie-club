import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from '../../styles/global';
import Navigation from '../../components/Navigation';

import * as routes from '../routes';

import Movies from '../Movies';
import Search from '../Search';

class App extends Component {
  state = {
    organizationName: 'the-road-to-learn-react',
  };

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <GlobalStyles />
          <Navigation />
          <div>            
            <Route
              exact
              path={routes.Search}
              component={() => <Search />}
            />
            <Route
              exact
              path={routes.Movies}
              component={() => <Movies />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
