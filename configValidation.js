'use strict';

const Joi = require('joi');

// Schema Configuration
// datapath: string (required)
// files: array of strings
// deduplicate: boolean
// adminLookup: boolean
const schema = Joi.object().keys({
  imports: Joi.object().keys({
    openaddresses: Joi.object().keys({
      files: Joi.array().items(Joi.string()),
      datapath: Joi.string(),
      deduplicate: Joi.boolean(),
      adminLookup: Joi.boolean()
    }).requiredKeys('datapath').unknown(false)
  }).requiredKeys('openaddresses').unknown(true)
}).requiredKeys('imports').unknown(true);

module.exports = {
  validate: function validate(config) {
    Joi.validate(config, schema, (err) => {
      if (err) {
        throw new Error(err.details[0].message);
      }
    });
  }

};
