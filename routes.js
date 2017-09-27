const Router = require('express').Router;
const router = new Router();

const quiz = require('./model/polls/router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to Exam API!' });
});

router.use('/polls', quiz);

module.exports = router;
