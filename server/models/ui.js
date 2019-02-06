const Model = require('./model');
const utils = require('../core/utils');
const config = require('config').get('models.ui');
const visitors = require('../core/types/visitor_types');


class UiModel extends Model {
  /**
   * @param {Object} req - Express request object
   */
  constructor(req) {
    super(req);

    this._ANON_ANSWERS = config.get('answers.anonAns');
    this._SOON_ANSWERS = config.get('answers.soonAns');
    this._ENEMY_ANSWERS = config.get('answers.enemyAns');
    this._FRIEND_ANSWERS = config.get('answers.friendAns');
    this._DEFAULT_RESPONSE = config.get('defaultResponse');
  }

  /**
   * Get random greeting
   * @return {Promise<void>}
   */
  async greeting() {
    const resId = utils.randomInt(0, 4);
    switch (this.req.query.type) {
      case visitors.FRIEND:
        this.body = this._FRIEND_ANSWERS[resId];
        return;
      case visitors.ENEMY:
        this.body = this._ENEMY_ANSWERS[resId];
        return;
      case visitors.ANON:
        this.body = this._ANON_ANSWERS[resId];
        return;
      case visitors.SOON:
        this.body = this._SOON_ANSWERS[resId];
        return;
      default:
        this.body = this._DEFAULT_RESPONSE;
    }
  }
}


module.exports = UiModel;
