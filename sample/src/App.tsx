import React, { Component } from 'react';
import { capitalize } from 'lodash';

import './App.scss'

import { Pop, Button, Input, View, ThirdCoast, useTheme } from '@upvalueio/third-coast';

const ThemeToggler = () => {
  const [themeName, setTheme] = useTheme();

  return <Button onClick={() => setTheme(themeName === 'dark' ? '' : 'dark')}>
    Toggle Theme
  </Button>
}

interface RootViewProps {
  children?: React.ReactNode;
}

const RootView = (props: RootViewProps) => {
  const [theme] = useTheme();

  return (
    <View id="rootview" padding="p4" className={theme || ''}>
      {props.children}
    </View>
  );
}

const SpacingUnit = (props: any) => {
  return <div className={`p${props.n} mr2 flex flex-column justify-around`} style={{ border: '1px solid black' }}>
    <div className="flex flex-column">
      <span>Unit{props.n}</span>
      <span>({props.px}px)</span>
    </div>
  </div>
}

class App extends Component<{}, {}> {
  state = {
    toast: false,
  };

  toggleTheme = () => {
    console.log('toggle theme');
  }

  render() {
    const colors = ['primary', 'secondary', 'warning', 'danger'];

    return (
      <ThirdCoast>
        <RootView>
          <h1 className="mt0">Third Coast</h1>
          <p>Third Coast is a set of React components and styling for use in my applications.</p>

          <h3>Themes</h3>
          <p>Third Coast supports simple themes based on class names and context. Out of the box there are light (default) and dark themes.</p>

          <ThemeToggler />

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

          <h3>Spacing units</h3>

          <div className="block" style={{ width: '50px' }}>
            <div className="flex">
              <SpacingUnit n="1" px="4" />
              <SpacingUnit n="2" px="8" />
              <SpacingUnit n="3" px="16" />
              <SpacingUnit n="4" px="32" />
              <SpacingUnit n="5" px="64" />
            </div>
          </div>

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

          <h3>Input</h3>

          <Input margin="mr3" type="text" placeholder="Type some text..." />
          <Input type="text" placeholder="disabled" disabled={true} />

          <h3>Pop</h3>

          <Pop />

          <h3>Toast</h3>

        </RootView>
      </ThirdCoast>
    );
  }
}

export default App;
