import React, { Component } from 'react';
import {
  Button, ButtonGroup,
  Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class EntryEditor extends Component {
  constructor (props) {
    super(props);

    this.state = {
      entry: props.entry
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

  form () {
    const { entry, onSubmit } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="title"
            value={entry.title} onChange={ e => this.onInputChange('title', e.target.value) } />
        </FormGroup>
        <FormGroup>
          <Label for="language">Language</Label>
          <Input type="text" name="language" id="language" placeholder="language"
            value={entry.language} onChange={ e => this.onInputChange('language', e.target.value) } />
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
        <Button color="primary" onClick={ e => onSubmit(this.state.entry) }>Submit</Button>
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

EntryEditor.propTypes = {
  entry: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
};

EntryEditor.defaultProps = {
  entry: {
    title: '',
    language: '',
    pronunciation: '',
    etymology: '',
    definition: '',
    author: ''
  }
}

export default EntryEditor;
