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

    this.state = {
      keyword: props.keyword
    };

    this.search(this.state.keyword);

    this.searchResult = this.searchResult.bind(this);
  }

  search (keyword) {
    this.setState({
      keyword
    });
    this.props.search(keyword);
  }

  listItem ({ entry }) {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          <NavLink to={`/e/${entry.title}`}>{entry.title}</NavLink>
        </ListGroupItemHeading>
        <ListGroupItemText>
          {entry.lang}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }

  searchResult () {
    const ListItem = this.listItem;
    const { entries } = this.props;
    const { keyword } = this.state;
    const list = Object.keys(entries);
    return list.length > 0 ? (
      <ListGroup className="query-list">
        {list.map(e => <ListItem entry={entries[e]} />)}
      </ListGroup>
    ) : (
      <p>
        <h5>Sorry, entry not found for keyword: <b>{keyword}</b></h5>
        <h5>You can <NavLink to={`/edit/${keyword}`}>create</NavLink> the entry now</h5>
      </p>
    );
  }

  render () {
    const SearchResult = this.searchResult;
    const { isFetching, entries } = this.props;
    const { keyword } = this.state;
    return entries[keyword] ? (
      <Redirect to={`/e/${keyword}`}/>
    ) : (
      <div className="query-wrapper">
        <h4>Result for keyword: <b>{keyword}</b></h4>
        {isFetching ? (
          <p>Searching for entries that match keyword <b>{keyword}</b></p>
        ) : (
          <div>
            <Search value={keyword} onSubmit={(keyword) => {this.search(keyword)}}/>
            <SearchResult />
          </div>
        )}
      </div>
    );
  }
}

Query.propTypes = {
  isFetching: PropTypes.bool,
  keyword: PropTypes.string,
  entries: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.global.isFetching,
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
