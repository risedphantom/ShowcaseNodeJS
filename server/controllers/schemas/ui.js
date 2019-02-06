const Joi = require('joi');

const visitors = require('../../core/types/visitor_types');


const greeting = Joi.object({
  // Validate here all what you need - query, body, cookie, header
  query: Joi.object({
    type: Joi.string().insensitive().valid(Object.values(visitors)).required(),
  }).required(),
}).pattern(/\w+/, Joi.any());


module.exports = {
  greeting,
};
