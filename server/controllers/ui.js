const router = require('express').Router({});

const schemas = require('./schemas/ui');
const UiModel = require('../models/ui');
const validate = require('../middlewares/validator_middleware');
const modelMethodCall = require('../core/utils/model_method_call');


/*
 * Methods
 */
/**
 * Get random greeting
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @return {Promise<void>}
 */
const greeting = async (req, res, next) => {
  await modelMethodCall(new UiModel(req), 'greeting', res);
  next();
};

/*
 * Routes
 * 'validate req (optional)' -->
 * 'Invoke method' -->
 * 'Map result (optional)'
 */
router.get('/greeting', validate(schemas.greeting), greeting);


module.exports = router;
