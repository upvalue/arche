import React, { Component, useEffect, useRef, useState } from 'react';
import { capitalize } from 'lodash';

import '@upvalueio/arche/index.scss';
import { Button, Input, View, Table, TableRow, TableCell, Progress } from '@upvalueio/arche';
import Popper from 'popper.js';

type EditorDataText = {
  type: 'text';
  body: string;
}

type EditorDataAtom = EditorDataText;

type EditorDataLine = {
  children: ReadonlyArray<EditorDataAtom>;
}

type EditorDataDoc = {
  root: ReadonlyArray<EditorDataAtom>;
}

const EditorLine = (props: { node: EditorDataLine }) => {
  return (
    <div data-editorLine="true">
      {props.node}
    </div>
  );
}

const Editor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
    }
  }, [ref])


  return (
    <div>
      <div>
        <button onClick={() => {
          document.execCommand('insertUnorderedList');
        }}>insert list</button>

        <button onClick={() => {
          document.execCommand('indent', false);
        }}>try indent</button>
      </div>
      <div contentEditable ref={ref}>
        some editable stuffs
      </div>
    </div>
  );
}

interface RootViewProps {
  children?: React.ReactNode;
}

const RootView = (props: RootViewProps) => {
  return (
    <View id="rootview" padding="p4" direction="column">
      {props.children}
    </View>
  );
}

const SpacingUnit = (props: any) => {
  return <div className={`a-p${props.n} a-mr2 flex flex-column justify-around`} style={{ border: '1px solid black' }}>
    <div className="flex flex-column">
      <span>Unit{props.n}</span>
      <span>({props.px}px)</span>
    </div>
  </div>
}

const tableRows = [
  {
    name: 'Dave',
    age: 21,
  },
  {
    name: 'Jim',
    age: 22,
  },
  {
    name: 'Sara',
    age: 25,
  }
]


class App extends Component<{}, {}> {
  state = {
    toast: false,
  };

  render() {
    const colors = ['primary', 'secondary', 'warning', 'danger'];

    return (
      <RootView>
        <h1 className="a-mt0">Arche</h1>
        <p>Arche is a set of React components and styling for use in my applications.</p>

        <h3>Colors</h3>

        <View direction={["column", "md-row"]}>

          {colors.map((c, i) => {
            return (
              <div key={i} className="a-mr1">
                <h3 className="a-mt0">{capitalize(c)}</h3>
                <div >
                  {[1, 2, 3, 4, 5].map((n, i) => {
                    return (
                      <View key={i} padding="p2" bg={`${c}-${n}`} style={{ width: '300px' }}>
                        {`\$a-${c}-${n}`}
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

        <div>
          <Input margin="mr3" type="text" placeholder="Type some text..." />
          <Input type="text" placeholder="disabled" disabled={true} />
        </div>

        <h3>Editor</h3>

        <p>A rich text editor.</p>
        <Editor />

        <h3>Table</h3>

        <Table striped columns={['Name', 'Age']} elementProps={{ style: { maxWidth: 500 } }}>
          {tableRows.map(tr => {
            return (
              <TableRow key={tr.name}>
                <TableCell>{tr.name}</TableCell>
                <TableCell>{tr.age}</TableCell>
              </TableRow>
            )
          })}
        </Table>

        <h3>Progress</h3>

        <View
          padding="py2"
        >
          <Progress
            value={25}
            max={100}
          />
        </View>

        <View
          padding="py2"
        >
          <Progress
            intent="secondary"
            value={25}
            max={100}
          />
        </View>
      </RootView >
    );
  }
}

export default App;
