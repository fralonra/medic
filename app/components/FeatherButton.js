import React, { Component } from 'react';
import * as Icon from 'react-feather';
import Radium from 'radium';
import PropTypes from 'prop-types';

const styles = {
  button: {
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    ':hover': {
      background: '#DCDCDC'
    }
  }
};

class FeatherButton extends Component {
  constructor (props) {
    super(props);

    const {
      icon,
      style,
      ...attributes
    } = props;
    this.style = style;
    this.attributes = attributes;
  }

  render () {
    const Feather = Icon[this.props.icon];
    return (
      <div style={Object.assign(styles.button, this.style)} {...this.attributes}>
        <Feather />
      </div>
    );
  }
}

FeatherButton.propTypes = {
  icon: PropTypes.string.isRequired
};

FeatherButton = Radium(FeatherButton);

export default FeatherButton;
