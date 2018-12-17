'use strict';

module.exports = function(Appuser) {
  // Appuser.makeLogin = function(credentials, include, callback) {
  //   let newCredentials = {
  //     ...credentials,
  //     realm: 'app',
  //   };
  //   return Appuser.login(newCredentials, include, function(
  //     loginErr,
  //     loginToken
  //   ) {
  //     if (loginErr) return callback(loginErr);
  //     return callback(null, loginToken.toObject());
  //   });
  // };
  // /** Register a path for the new login function
  //  */
  // Appuser.remoteMethod('makeLogin', {
  //   http: {
  //     path: '/makeLogin',
  //     verb: 'post',
  //   },
  //   accepts: [
  //     {
  //       arg: 'credentials',
  //       type: 'object',
  //       description: 'Login credentials',
  //       required: true,
  //       http: {
  //         source: 'body',
  //       },
  //     },
  //     {
  //       arg: 'include',
  //       type: 'string',
  //       description:
  //         'Related objects to include in the response. See the description of return value for more details.',
  //       http: {
  //         source: 'query',
  //       },
  //     },
  //   ],
  //   returns: [
  //     {
  //       arg: 'token',
  //       type: 'object',
  //       root: true,
  //     },
  //   ],
  // });
};
