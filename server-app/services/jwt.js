import jwt from 'jsonwebtoken';
import errors from '../locales/errors.json';

/**
 * Create a new jwt
 * @param {object} payload
 * @returns {string}
 */
export function GenerateJWT(payload) {
  return jwt.sign(payload,
    process.env.JWT_SECRET_KEY,
    {
      algorithm: 'HS256',
      issuer: 'Boilerplate App',
      expiresIn: '1d',
      audience: 'ws app',
    });
}

/**
 * Decode a JWT
 * @param {string} authorizationHeader
 * @param {object} res - response
 * @returns {object}
 */
export function DecodeJWT(authorizationHeader) {
  if (!authorizationHeader || authorizationHeader.search('Bearer ') === -1) {
    throw Error(errors.UNAUTHORIZED.message);
  }

  // get the token from headers
  const token = authorizationHeader.split(' ')[1];

  // decrypt the token
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
}
