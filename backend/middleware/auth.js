function auth(req, res, next) {
  if (req.isAuthenticated()) return next();

  // res.redirect(process.env.CLIENT_URL);
  res.status(401).send("Unauthorized")
}

module.exports = auth;