import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import {
  Button, ButtonGroup,
  Input, InputGroup, InputGroupAddon, InputGroupText,
  FormGroup, Label,
  Nav, NavItem, NavLink,
  TabContent, TabPane } from 'reactstrap';
import { Lock, User } from 'react-feather';

import actions from 'APP/store/actions';
import { authTypes, messageTypes } from 'APP/store/types';

import './index.less';

const styles = {
  rememberMe: {
    marginLeft: '0.25rem',
    textAlign: 'left'
  }
}

const LoginTab = 'Login';
const SignupTab = 'Sign Up';
const usernameMin = 3;
const passwordMin = 6;

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeTab: LoginTab,
      username: this.props.username,
      password: '',
      passwordRe: '',
      warningLogin: '',
      warningSignup: ''
    };
    this.forms = [LoginTab, SignupTab];

    this.formView = this.formView.bind(this);
  }

  onSubmit () {
    if (this.state.activeTab === SignupTab && this.state.warningSignup.length > 0) return;
    if (this.state.activeTab === LoginTab) {
      this.props.login({
        username: this.state.username,
        password: this.state.password
      });
    } else if (this.state.activeTab === SignupTab) {
      if (!this.verifyUsername() || !this.verifyPassword() || !this.verifyPasswordRe()) return;
      this.props.signup({
        username: this.state.username,
        password: this.state.password
      });
    }
  }

  onInputChange (value, type, cb) {
    this.setState(prevState => ({
      [type]: value
    }), cb);
  }

  onUsernameChange (e) {
    this.onInputChange(e.target.value, 'username', () => {
      this.verifyUsername();
    });
  }

  onPasswordChange (e) {
    this.onInputChange(e.target.value, 'password', () => {
      this.verifyPassword();
    });
  }

  onPasswordReChange (e) {
    this.onInputChange(e.target.value, 'passwordRe', () => {
      this.verifyPasswordRe();
    });
  }

  verifyUsername () {
    const { username } = this.state;
    if (username.length < usernameMin) {
      this.setState({
        warningSignup: `Username must has at least ${usernameMin} characters.`
      });
      return false;
    }
    this.setState({ warningSignup: '' });
    return true;
  }

  verifyPassword () {
    const { password } = this.state;
    if (password.length < passwordMin) {
      this.setState({
        warningSignup: `Password must has at least ${passwordMin} characters.`
      });
      return false;
    }
    this.setState({ warningSignup: '' });
    return true;
  }

  verifyPasswordRe () {
    const { password, passwordRe } = this.state;
    if (passwordRe !== password) {
      this.setState({
        warningSignup: 'Password mismatched.'
      });
      return false;
    }
    this.setState({ warningSignup: '' });
    return true;
  }

  toggle (tab) {
    this.setState({
      activeTab: tab
    });
  }

  formView () {
    return (
      <div className="login-form-view">
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button color="primary" size="sm"><User size={20} /></Button>
          </InputGroupAddon>
          <Input value={this.state.username} onChange={ e => this.onUsernameChange(e) } placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button color="primary" size="sm"><Lock size={20} /></Button>
          </InputGroupAddon>
          <Input value={this.state.password} onChange={ e => this.onPasswordChange(e) } placeholder="password" type="password" />
        </InputGroup>
        <br />
        {this.state.activeTab === LoginTab ?
          <FormGroup style={styles.rememberMe} check>
            <Label check>
              <Input type="checkbox" />
              Remember Me
            </Label>
          </FormGroup> :
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button color="primary" size="sm"><Lock size={20} /></Button>
            </InputGroupAddon>
            <Input value={this.state.passwordRe} onChange={ e => this.onPasswordReChange(e) } placeholder="password again" type="password" />
          </InputGroup>
        }
      </div>
    );
  }

  render () {
    const FormView = this.formView;
    const { username } = this.props;
    return (!username || username === '') ? (
      <div>
        <div className="login-form">
          <Nav tabs>
            {this.forms.map((form, index) => (
              <NavItem key={index}>
                <NavLink
                  className={form === this.state.activeTab ? 'login-form-tab login-form-tab-active' : 'login-form-tab'}
                  onClick={() => { this.toggle(form); }}
                  active={form === this.state.activeTab}>
                  {form}
                </NavLink>
            </NavItem>
            ))}
          </Nav>
          <FormView />
          <Button color="primary" className="login-form-button" onClick={ () => this.onSubmit() }>{this.state.activeTab}</Button>
        </div>
        <p className="login-form-warning">{this.state.activeTab === LoginTab ? this.state.warningLogin : this.state.warningSignup}</p>
      </div>
    ) : (
      <Redirect to="/"/>
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
