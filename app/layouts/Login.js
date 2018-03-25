import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button, ButtonGroup,
  Input, InputGroup, InputGroupAddon, InputGroupText,
  FormGroup, Label,
  Nav, NavItem, NavLink,
  TabContent, TabPane } from 'reactstrap';

import actions from 'APP/store/actions';
import { authTypes } from 'APP/store/types';

const styles = {
  page: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    maxWidth: '320px',
    height: '320px',
    padding: '1rem',
    margin: '0 auto'
  },
  tab: {
    cursor: 'pointer'
  },
  tabActive: {
    color: 'blue',
    borderBottom: '2px solid blue'
  },
  view: {
    flex: '1 0 auto'
  },
  button: {
    width: '100%'
  }
};

const LoginTab = 'Login';
const SignupTab = 'Sign Up';

class Login extends Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.loginView = this.loginView.bind(this);
    this.signupView = this.signupView.bind(this);

    this.state = {
      activeTab: LoginTab,
      username: '',
      password: '',
      passwordRe: ''
    };

    const LoginView = this.loginView;
    const SignupView = this.signupView;
    this.tabs = [{
      name: LoginTab,
      view: <LoginView />
    }, {
      name: SignupTab,
      view: <SignupView />
    }];
  }

  onButtonAddClick () {
    if (this.state.activeTab === LoginTab) {
      this.props.login({
        username: this.state.username,
        password: this.state.password
      });
    } else if (this.state.activeTab === SignupTab) {
      this.props.signup({
        username: this.state.username,
        password: this.state.password
      });
    }
  }

  onUserChange (e) {
    this.setState({
      username: e.target.value
    });
  }

  toggle (tab) {
    this.setState({
      activeTab: tab
    });
  }

  loginView (props) {
    return (
      <div>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input value={this.state.username} onChange={this.onUserChange} placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="password" type="password" />
        </InputGroup>
        <br />
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Remember Me
          </Label>
        </FormGroup>
      </div>
    );
  }

  signupView (props) {
    return (
      <div>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input value={this.state.username} onChange={this.onUserChange} placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="password" type="password" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="password again" type="password" />
        </InputGroup>
      </div>
    );
  }

  render () {
    return (
      <div style={styles.page}>
        <Nav tabs>
          {this.tabs.map((tab, index) => (
            <NavItem key={index}>
              <NavLink
                style={tab.name === this.state.activeTab ? {...styles.tab, ...styles.tabActive} : styles.tab}
                onClick={() => { this.toggle(tab.name); }}
                >
                {tab.name}
              </NavLink>
          </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={styles.view}>
          {this.tabs.map((tab, index) => (
            <TabPane key={index} tabId={tab.name}>
              {tab.view}
            </TabPane>
          ))}
        </TabContent>
        <Button color="primary" style={styles.button} onClick={() => this.onButtonAddClick() }>{this.state.activeTab}</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => {
      dispatch(actions.userAuth({
        type: authTypes.LOGIN,
        ...payload
      }));
    },
    signup: (payload) => {
      dispatch(actions.userAuth({
        type: authTypes.SIGNUP,
        ...payload
      }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
