import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import EntryEditor from './EntryEditor';
import EntryViewer from './EntryViewer';
import actions from 'APP/store/actions';

import './index.less';

class Entry extends Component {
  constructor (props) {
    super(props);

    props.setEntry(props.title);
    this.state = {
      edit: Object.keys(props.entry).length <= 0,
      entry: props.entry
    };
  }

  submit (entry) {
    entry.author = this.props.user.name;
    entry.createAt = Date.now();
    this.props.postEntry(entry);
  }

  render () {
    const { entry } = this.props;
    const { edit } = this.state;
    return (
      <div className="entry-wrapper">
        {edit ? (
          <EntryEditor entry={entry} onSubmit={(entry) => {this.submit(entry)}}/>
        ) : (
          <EntryViewer entry={entry}/>
        )}
      </div>
    );
  }
}

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object,
  entry: PropTypes.object
};

const mapStateToProps = (state) => {
  const { entries } = state.query;
  return {
    user: state.auth.user,
    entry: Array.isArray(entries) ? entries.filter(e => e.title === state.entry.current)[0] || [] : entries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEntry: (payload) => {
      dispatch(actions.entrySet(payload));
    },
    postEntry: (payload) => {
      dispatch(actions.entryPost(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);
