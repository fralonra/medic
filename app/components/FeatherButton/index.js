import React, { Component } from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

import './index.less';

const margin = 8;
const styles = {
  feather: {
    margin
  }
};

class FeatherButton extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { icon, style, size, ...attributes } = this.props;
    const Feather = Icon[icon];
    return (
      <div className="cpn-feather-button" style={Object.assign(style, {
        width: size + margin * 2,
        height: size + margin * 2
      })} {...attributes}>
        <Feather style={styles.feather} size={size} />
      </div>
    );
  }
}

FeatherButton.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.string,
  size: PropTypes.number
};

FeatherButton.defaultProps = {
  size: 24
}

export default FeatherButton;
