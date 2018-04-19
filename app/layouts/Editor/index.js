import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, ButtonGroup,
  Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import actions from 'APP/store/actions';

import './index.less';

class Editor extends Component {
  constructor (props) {
    super(props);

    const { title } = props;
    props.setEntry(title);
    this.state = {
      entry: {
        ...props.entry,
        title
      }
    };

    this.form = this.form.bind(this);
  }

  onInputChange (key, value) {
    this.setState(prevState => ({
      entry: {
        ...prevState.entry,
        [key]: value
      }
    }));
  }

  submit () {
    const { entry } = this.state;
    if (this.validate(entry)) {
      entry.author = this.props.user.name;
      entry.createAt = Date.now();
      this.props.postEntry(entry);
    } else {
      alert('Title, language and definition are required.')
    }
  }

  validate (entry) {
    return entry.title && entry.lang && entry.definition;
  }

  form () {
    const { title, entry, onSubmit } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="title"
            value={title} onChange={ e => this.onInputChange('title', e.target.value) } disabled />
        </FormGroup>
        <FormGroup>
          <Label for="language">Language</Label>
          <Input type="text" name="language" id="language" placeholder="language"
            value={entry.lang} onChange={ e => this.onInputChange('lang', e.target.value) } />
        </FormGroup>
        <FormGroup>
          <Label for="pronunciation">Pronunciation</Label>
          <Input type="text" name="pronunciation" id="pronunciation" placeholder="pronunciation"
            value={entry.pronunciation} onChange={ e => this.onInputChange('pronunciation', e.target.value) } />
        </FormGroup>
        <FormGroup>
          <Label for="etymology">Etymology</Label>
          <Input type="textarea" name="etymology" id="etymology" placeholder="etymology"
            value={entry.etymology} onChange={ e => this.onInputChange('etymology', e.target.value) } />
        </FormGroup>
        <FormGroup>
          <Label for="definition">Definition</Label>
          <Input type="textarea" name="definition" id="definition" placeholder="definition"
            value={entry.definition} onChange={ e => this.onInputChange('definition', e.target.value) } />
        </FormGroup>
        <Button color="primary" onClick={ e => this.submit() }>Submit</Button>
      </Form>
    );
  }

  render () {
    const FormView = this.form;
    return (
      <div className="entry-editor">
        <FormView />
      </div>
    );
  }
}

Editor.propTypes = {
  title: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
};

Editor.defaultProps = {
  entry: {
    title: '',
    lang: '',
    pronunciation: '',
    etymology: '',
    definition: '',
    author: ''
  }
}

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
    },
    postEntry: (payload) => {
      dispatch(actions.entryPost(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
