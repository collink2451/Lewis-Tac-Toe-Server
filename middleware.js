function ensureAuthenticated(req, res, next) {
  const username = req.body && req.body.username && req.body.username.trim();
  if (!username) {
    return res.status(401).send('Unauthorized: Username is required');
  }
  req.user = { login: username };
  next();
}

module.exports = { ensureAuthenticated };
