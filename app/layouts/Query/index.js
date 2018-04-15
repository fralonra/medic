import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import PropTypes from 'prop-types';

import { NavLink, Search } from 'APP/components';
import actions from 'APP/store/actions';

import './index.less';

class Query extends Component {
  constructor (props) {
    super(props);
  }

  search (query) {
    this.props.search(query);
  }

  listItem ({ entry }) {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          <NavLink to={`/e/${entry.title}`}>{entry.title}</NavLink>
        </ListGroupItemHeading>
        <ListGroupItemText>
          {entry.language}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }

  componentDidMount() {
    this.props.search(this.props.keyword);
  }

  render () {
    const ListItem = this.listItem;
    const { keyword, entries } = this.props;
    return (entries.length === 1 ? (
        <Redirect to={`/e/${keyword}`}/>
      ) : (
      <div className="query-wrapper">
        <h4>Result for keyword: <b>{keyword}</b></h4>
        <Search value={keyword} onSubmit={(query) => {this.search(query)}}/>
        {entries.length > 0 ? (
          <ListGroup className="query-list">
            {entries.map(e => {
              <ListItem entry={entries}/>
            })}
          </ListGroup>
        ) : (
          <div>
            <h5>Sorry, entry not found for keyword: <b>{keyword}</b></h5>
            <h5>You can <NavLink to={`/e/${keyword}`}>create</NavLink> the entry now</h5>
          </div>
        )}
      </div>
    ));
  }
}

Query.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    keyword: state.query.keyword,
    entries: state.query.entries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (payload) => {
      dispatch(actions.queryStart(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query);
