import React, { Component } from 'react';
import { ThemeProvider } from './material-ui';
import Chrome from './components/Chrome';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <ThemeProvider>
          <Chrome>
            {children}
          </Chrome>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
