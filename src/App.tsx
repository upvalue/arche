import React, { Component } from 'react';
import { capitalize } from 'lodash';
import { AccessAlarm } from '@material-ui/icons';

import './styles/all.scss';
import './App.scss'

import Button from './Button';
import View from './View';
import ThirdCoast from './ThirdCoast';
import { useTheme } from './Theme';

import { MdLabel } from 'react-icons/md';

const ThemeToggler = () => {
  const [themeName, setTheme] = useTheme();

  return <Button onClick={() => setTheme(themeName === 'dark' ? '' : 'dark')}>
    Toggle Theme
  </Button>

}

class App extends Component<{}, {}> {
  toggleTheme = () => {
    console.log('toggle theme');
  }

  render() {
    const colors = ['primary', 'secondary', 'warning', 'danger'];

    return (
      <ThirdCoast>
        <View id="rootview" padding="p4">
          <h1 className="mt0">Third Coast</h1>
          <p>Third Coast is a set of React components and styling for use in my applications.</p>

          <h3>Themes</h3>
          <p>Third Coast supports simple themes based on class names and context. Out of the box there are light (default) and dark themes.</p>

          <ThemeToggler />

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

          <View className="flex">
            <Button margin="mr1">
              Regular Button
            </Button>

            <Button intent="primary" margin="mr1">
              Primary Button
            </Button>

            <Button intent="secondary" margin="mr1">
              Secondary Button
            </Button>

            <Button intent="warning" margin="mr1">
              Warning Button
            </Button>

            <Button intent="danger" margin="mr1">
              Danger Button
            </Button>

            <Button minimal>
              Minimal button
            </Button>
          </View>
          <h3>Labels</h3>
        </View>
      </ThirdCoast>
    );
  }
}

export default App;
