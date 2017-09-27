const Facade = require('../../lib/facade');
const pollsSchema = require('./schema');

class PollsFacade extends Facade {}

module.exports = new PollsFacade(pollsSchema);
