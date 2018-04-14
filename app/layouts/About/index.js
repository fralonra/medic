import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './index.less';

export default class About extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <div>
        <Button color="danger" onClick={() => this.onButtonAddClick() }>About</Button>
      </div>
    );
  }
}
