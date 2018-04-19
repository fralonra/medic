import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

import actions from 'APP/store/actions';

import './index.less';

class Entry extends Component {
  constructor (props) {
    super(props);

    props.setEntry(props.title);
  }

  render () {
    const { title, lang, pronunciation, etymology, definition, author, createAt } = this.props.entry;
    return (
      <div className="entry-wrapper">
        <h3 className="enrty-viewer-header">{title}</h3>
        <h5 className="entry-viewer-language">{lang}</h5>
        <h5 className="entry-viewer-pronunciation">{pronunciation}</h5>
        <section className="entry-viewer-etymology">{etymology}</section>
        <section className="entry-viewer-definition">{definition}</section>
        <h5 className="entry-viewer-author">{author}</h5>
        <h5 className="entry-viewer-date">{moment(createAt).format('YYYY-MM-D HH-mm-ss')}</h5>
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
    entry: entries[state.entry.current] || {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEntry: (payload) => {
      dispatch(actions.entrySet(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);
