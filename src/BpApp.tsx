import React from 'react';

import { Button } from '@blueprintjs/core';

import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

class BpApp extends React.Component {
  render() {
    return <div>
      <h1>its hello</h1>
      <p>hwey</p>
      <Button text="its howdy doody time" />
    </div>
  }

}

export default BpApp;