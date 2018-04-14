import React, { Component } from 'react';

const styles = {
  input: {
    padding: '0.25rem'
  }
};

class TextInput extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <input style={styles.input} type="text" />
    );
  }
}

export default TextInput;
