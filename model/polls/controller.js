const Controller = require('../../lib/controller');
const pollsFacade = require('./facade');

class PollsController extends Controller {
    postVote() {

    }

    create(req, res, next) {
        this.facade.create(req.body)
            .then(doc => res.status(201).json(doc))
            .catch(err => next(err));
    }

    getVotes() {

    }

}

module.exports = new PollsController(pollsFacade);
