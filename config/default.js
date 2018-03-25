module.exports = {
  port: 3099,
  title: 'Medic',
  mongoPath: 'mongodb://localhost:27017/medic',
  session: {
    secret: 'medic',
    key: 'medic',
    maxAge: 2592000000 // 30 * 24 * 60 * 60 * 1000
  }
};
