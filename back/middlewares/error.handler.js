/**
 * Errors logger on console
 * @param {*} err 
 * @param {*} _req 
 * @param {*} _res 
 * @param {*} next 
 */
function logErrors(err, _req, _res, next){
  console.log('🤖 > logErrors')
  console.error(err)
  next(err)
}

/**
 * Handle 500 app errors
 * @param {*} err 
 * @param {*} _req 
 * @param {*} res 
 * @param {*} _next 
 */
function errorHandler(err, _req, res, _next){
  console.log('🤖 > errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

/**
 * Handle boom lib errors
 * @param {*} err 
 * @param {*} _req 
 * @param {*} res 
 * @param {*} next 
 */
function boomErrorHandler(err, _req, res, next){
  console.log('🤖 > boomErrorHandler')
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
