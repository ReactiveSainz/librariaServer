'use strict';

var uuid = require('uuid/v4');

module.exports = function(Appusertoken) {
  /** Define a custom token id creation process
   */
  Appusertoken.createCustomAccessTokenId = function(callback) {
    return callback(null, uuid());
  };

  /** Intercept token creation and substitute id with our custom id
   */
  Appusertoken.observe('before save', function(ctx, next) {
    // Invoke custom id function
    return Appusertoken.createCustomAccessTokenId(function(err, id) {
      if (err) return next(err);
      // Substitute id
      ctx.instance.id = id;
      // Remember to use next() to not interrupt the flow of the call
      return next();
    });
  });
};
