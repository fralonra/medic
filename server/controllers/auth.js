const User = require('../models/user');
const resTypes = require('./resTypes').auth;
const sendError = require('../lib/controller').sendError;

const initialUser = {
  name: null
};

module.exports = {
  info (req, rep) {
    const user = req.session.user || initialUser;
    return rep.send({ user });
  },

  login (req, rep) {
    const { username, password } = req.body;
    User.findOne({ name: username, pwHash: password }, (err, user) => {
      if (!user) {
        return sendError(req, rep, resTypes.loginFail);
      } else {
        return login(req, rep, user);
      }
    });
  },

  logout (req, rep) {
    return logout(req, rep);
  },

  signup (req, rep) {
    const { username, password } = req.body;
    User.findOne({ name: { $eq: username } }, (err, user) => {
      if (!user) {
        User.create({
          name: username,
          pwHash: password
        })
        .then((user) => {
          return login(req, rep, user);
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        if (user.pwHash === password) {
          return login(req, rep, user);
        } else {
          return sendError(req, rep, resTypes.signupFail);
        }
      }
    });
  }
};

const login = (req, rep, user) => {
  req.session.user = user;
  rep.send({ user });
};

const logout = (req, rep) => {
  req.session.user = initialUser;
  rep.send({ user: null });
};
