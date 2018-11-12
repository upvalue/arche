import React, { Component } from 'react';
import { capitalize } from 'lodash';
import { AccessAlarm } from '@material-ui/icons';

import './styles/all.scss';
import './App.scss'

import Text from './Text';
import Button from './Button';
import View from './View';
import { ThemeProvider, ThemeType } from './Theme';

interface AppState {
  theme: ThemeType;
};

class App extends Component<{}, AppState> {
  state = {
    theme: undefined,
  };

  toggleTheme = () => {
    this.setState(prevState => ({ theme: prevState.theme === undefined ? 'tc-dark' : undefined }));
  }

  render() {
    const colors = ['blue', 'green', 'orange', 'red'];

    return (
      <ThemeProvider theme={this.state.theme}>
        <View>
          <h1 className="mt0">Third Coast</h1>
          <p>Third Coast is a minimalistic set of React components and styling for use in my applications.</p>

          <h3>Themes</h3>
          <p>Third Coast supports simple themes based on class names and context. Out of the box there are light and dark themes.</p>
          <button onClick={this.toggleTheme}>
            Toggle theme
          </button>

          <h3>Text</h3>
          <p>The default font stack is GitHub's for nice out of the box fonts on all machines, and Open Sans / Inconsolata when you're willing to load more.</p>

          <h3>Colors</h3>

          <View className="flex flex-column flex-md-row">
            {colors.map((c, i) => {
              return (
                <div key={i} className="mr1">
                  <h3 className="mt0">{capitalize(c)}</h3>
                  <div >
                    {[1, 2, 3, 4, 5].map((n, i) => {
                      return (
                        <View key={i} padding="p2" bg={`${c}-${n}`} style={{ width: '300px' }}>
                          {`\$${c}-${n}`}
                        </View>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </View>

          <h3>Buttons</h3>

          <Button>
            Hello world button
          </Button>
          <h3>Labels</h3>
        </View>
      </ThemeProvider>
    );
  }
}

export default App;
