const boom = require('@hapi/boom');

/**
 * Middleware to handle schemas validations
 * @param {object} schema 
 * @param {string} property [params, body]
 * @returns {function(req, res, next)} middleware
 */
function schemasHandler(schema, property){
  return (req, _res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = schemasHandler;
