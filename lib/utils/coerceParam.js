/**
 * Internal function: ensures the param is a string
 *
 * It allows parse to be called on itself:
 * `parse(parse(parse('C3')))`
 *
 * @api private
 */
function coerce (name, func) {
  return function (param) {
    if (!param) return null
    else if (param[name]) return func(param[name])
    else if (typeof param === 'string') return func(param)
    else throw Error('The ' + name + ' must be a string: ' + param)
  }
}

module.exports = coerce