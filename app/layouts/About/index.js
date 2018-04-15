import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './index.less';

class About extends Component {
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

export default About;
