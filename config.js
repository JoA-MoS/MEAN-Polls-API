const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 9000
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/exam2-api'
  }
};

module.exports = config;
