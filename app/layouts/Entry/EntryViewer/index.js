import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EntryViewer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="entry-viewer">
      </div>
    );
  }
}

EntryViewer.propTypes = {
  entry: PropTypes.object.isRequired
};

export default EntryViewer;
