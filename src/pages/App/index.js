import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from '../../styles/global';
import Navigation from '../../components/Navigation';

import * as routes from '../routes';

const Search = <h1>this is search page</h1>;
const Movies = <h1>this is list of movies </h1>;

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
              path={routes.Home}
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
