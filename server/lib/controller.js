module.exports = {
  sendError: (req, rep, error) => {
    const { code, message } = error;
    rep.send({ error });
  }
};
