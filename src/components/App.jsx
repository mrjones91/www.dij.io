import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Header from './Header.jsx';
import DoContainer from './do/DoContainer.jsx';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  
  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return (

        <MuiThemeProvider MuiTheme={ getMuiTheme(lightBaseTheme) } >
          <div> 
            <Header/>
            <DoContainer/>
          </div>
        </MuiThemeProvider>

    );
  }
}

export default App;
